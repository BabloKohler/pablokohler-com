/**
 * Motor de interacción de los soles (hero y footer).
 *
 *  - Scroll: cada sol se desplaza a su propia velocidad (`data-speed`) y rota (`data-rot`).
 *  - Mouse: SOLO reacciona el sol que está debajo del cursor (el de más arriba si se superponen).
 *    Se aparta un poco y crece levemente. No hay parallax global con el mouse.
 *  - Arrastre: manteniendo el clic sobre un sol se puede arrastrar "un poquito" (límite elástico);
 *    al soltar vuelve a su sitio con un rebote de resorte.
 *  - Solo mouse/lápiz: en pantallas táctiles solo funciona el scroll (no se pisa el gesto de desplazar).
 *  - El bucle rAF corre únicamente mientras algo se mueve y la sección es visible.
 *  - prefers-reduced-motion: no hace nada (los soles quedan fijos).
 *
 * Capas de transform (para que no se pisen): `.sun-pos` (este módulo) → `.sun-pop` (entrada, CSS) → svg (giro, CSS).
 */
export interface SunFieldOptions {
  /** Contenedor que tiene los `.sun`. */
  root: HTMLElement;
  /** Elemento de referencia para el desplazamiento con el scroll (el hero o la banda del footer). */
  section: HTMLElement;
  /**
   * Contenedor que recorta a los soles y donde se permite la interacción; recibe `data-sun-cursor`.
   * Por defecto es `section`. En el footer es toda la sección de contacto: la banda de soles no recibe el mouse
   * y sus estrellas se asoman fuera de ella.
   */
  bounds?: HTMLElement;
  /** 'hero': el desplazamiento sale de scrollY. 'section': de la posición de la sección en pantalla. */
  mode: 'hero' | 'section';
}

interface Sun {
  host: HTMLElement;
  pos: HTMLElement;
  speed: number;
  rot: number;
  size: number;
  x: number; // desplazamiento por interacción (hover/arrastre), con resorte
  y: number;
  vx: number;
  vy: number;
  sc: number;
  vsc: number;
}

const clamp = (v: number, a: number, b: number) => Math.min(b, Math.max(a, v));

export function initSunField({ root, section, mode, bounds = section }: SunFieldOptions) {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  const suns: Sun[] = Array.from(root.querySelectorAll<HTMLElement>('.sun')).map((host) => ({
    host,
    pos: host.querySelector<HTMLElement>('.sun-pos')!,
    speed: parseFloat(host.dataset.speed ?? '0'),
    rot: parseFloat(host.dataset.rot ?? '0'),
    size: host.offsetWidth,
    x: 0,
    y: 0,
    vx: 0,
    vy: 0,
    sc: 1,
    vsc: 0,
  }));
  if (!suns.length) return;

  const pointer = { x: -9999, y: -9999 };
  const dragStart = { x: 0, y: 0 };
  let hovered: Sun | null = null;
  let dragging: Sun | null = null;
  let raf = 0;
  let sectionH = section.offsetHeight;

  /** Valor que reemplaza a "scrollY" en el cálculo del desplazamiento de cada sol. */
  const scrollScalar = () => {
    if (mode === 'hero') return window.scrollY;
    const r = section.getBoundingClientRect();
    return (window.innerHeight / 2 - (r.top + r.height / 2)) * 0.3;
  };

  const isVisible = () => {
    if (mode === 'hero') return window.scrollY <= sectionH * 1.4;
    const r = section.getBoundingClientRect();
    return r.bottom > -240 && r.top < window.innerHeight + 240;
  };

  /** Centro "de reposo" del sol en pantalla (sin el desplazamiento de hover/arrastre). */
  const baseCenter = (s: Sun, scalar: number) => {
    const r = s.host.getBoundingClientRect();
    return { x: r.left + r.width / 2, y: r.top + r.height / 2 + scalar * s.speed };
  };

  const insideBounds = () => {
    const r = bounds.getBoundingClientRect();
    return pointer.x >= r.left && pointer.x <= r.right && pointer.y >= r.top && pointer.y <= r.bottom;
  };

  /** El sol que está debajo del cursor: se recorre al revés porque los últimos del DOM quedan por encima. */
  const pickHover = (): Sun | null => {
    if (!fine || !insideBounds()) return null;
    const scalar = scrollScalar();
    for (let i = suns.length - 1; i >= 0; i--) {
      const s = suns[i];
      const c = baseCenter(s, scalar);
      if (s.size === 0) continue; // oculta (display:none)
      const reach = s.size * 0.34 + 12; // cuerpo visible de la estrella + un margen para que sea fácil acertar
      if (Math.hypot(pointer.x - c.x, pointer.y - c.y) < reach) return s;
    }
    return null;
  };

  const setCursor = () => {
    if (dragging) bounds.dataset.sunCursor = 'grabbing';
    else if (hovered) bounds.dataset.sunCursor = 'grab';
    else delete bounds.dataset.sunCursor;
  };

  const frame = () => {
    raf = 0;
    if (!isVisible() && !dragging) return;
    const scalar = scrollScalar();
    let active = false;

    for (const s of suns) {
      let tx = 0;
      let ty = 0;
      let tsc = 1;

      if (s === dragging) {
        // Seguir al cursor con un límite elástico: nunca se aleja más de `max`.
        const dx = pointer.x - dragStart.x;
        const dy = pointer.y - dragStart.y;
        const len = Math.hypot(dx, dy);
        const max = clamp(s.size * 0.35, 26, 90);
        const k = len > 0 ? (max * Math.tanh(len / max)) / len : 0;
        tx = dx * k;
        ty = dy * k;
        tsc = 1.12;
      } else if (s === hovered) {
        // Se aparta un poco del cursor y crece levemente.
        const c = baseCenter(s, scalar);
        const dx = pointer.x - c.x;
        const dy = pointer.y - c.y;
        const dist = Math.hypot(dx, dy) || 1;
        const reach = s.size * 0.34 + 12;
        const k = Math.max(0, 1 - dist / reach);
        const push = clamp(s.size * 0.16, 12, 44) * k * k + clamp(s.size * 0.05, 4, 14) * k;
        tx = (-dx / dist) * push;
        ty = (-dy / dist) * push;
        tsc = 1 + 0.07 * k;
      }

      // Resorte amortiguado: da el rebote al soltar y el movimiento "con peso".
      s.vx = (s.vx + (tx - s.x) * 0.16) * 0.78;
      s.vy = (s.vy + (ty - s.y) * 0.16) * 0.78;
      s.vsc = (s.vsc + (tsc - s.sc) * 0.16) * 0.74;
      s.x += s.vx;
      s.y += s.vy;
      s.sc += s.vsc;
      if (
        Math.abs(tx - s.x) > 0.05 ||
        Math.abs(ty - s.y) > 0.05 ||
        Math.abs(s.vx) > 0.02 ||
        Math.abs(s.vy) > 0.02 ||
        Math.abs(tsc - s.sc) > 0.001
      ) {
        active = true;
      }

      s.pos.style.transform = `translate3d(${s.x.toFixed(2)}px, ${(scalar * s.speed + s.y).toFixed(2)}px, 0) rotate(${(scalar * s.rot).toFixed(2)}deg) scale(${s.sc.toFixed(4)})`;
    }

    if (active || dragging) raf = requestAnimationFrame(frame);
  };
  const kick = () => {
    if (!raf) raf = requestAnimationFrame(frame);
  };

  window.addEventListener('scroll', kick, { passive: true });
  window.addEventListener(
    'resize',
    () => {
      sectionH = section.offsetHeight;
      suns.forEach((s) => (s.size = s.host.offsetWidth));
      kick();
    },
    { passive: true },
  );

  if (fine) {
    window.addEventListener(
      'pointermove',
      (e) => {
        if (e.pointerType === 'touch') return;
        pointer.x = e.clientX;
        pointer.y = e.clientY;
        if (!dragging) {
          const next = pickHover();
          if (next !== hovered) {
            hovered = next;
            setCursor();
          }
        }
        kick();
      },
      { passive: true },
    );

    window.addEventListener('pointerdown', (e) => {
      if (e.button !== 0 || e.pointerType === 'touch') return;
      // Los enlaces y botones siguen funcionando con normalidad.
      if ((e.target as Element | null)?.closest('a, button, input, textarea, select, label, summary, [role="button"]')) return;
      pointer.x = e.clientX;
      pointer.y = e.clientY;
      const s = pickHover();
      if (!s) return;
      dragging = hovered = s;
      dragStart.x = e.clientX;
      dragStart.y = e.clientY;
      document.body.classList.add('sun-dragging'); // evita seleccionar texto mientras se arrastra
      e.preventDefault();
      setCursor();
      kick();
    });

    const release = () => {
      if (!dragging) return;
      dragging = null;
      document.body.classList.remove('sun-dragging');
      hovered = pickHover();
      setCursor();
      kick();
    };
    window.addEventListener('pointerup', release);
    window.addEventListener('pointercancel', release);
    window.addEventListener('blur', release);

    document.documentElement.addEventListener('mouseleave', () => {
      if (dragging) return;
      pointer.x = pointer.y = -9999;
      hovered = null;
      setCursor();
      kick();
    });
  }

  kick();
}
