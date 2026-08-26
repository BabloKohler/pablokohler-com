# Proyecto: pablokohler.com — construcción en Astro

Eres mi copiloto para construir mi sitio web personal desde cero en Astro. Abajo está TODO el contexto y las decisiones ya tomadas. No me vuelvas a preguntar lo que ya está decidido; si algo no está aquí, pregúntame antes de asumir.

Adjunto dos archivos HTML de prototipo (`prototipo-home.html` y `prototipo-caso-detalle.html`) y un SVG (`estrella.svg`). Los HTML son la REFERENCIA VISUAL EXACTA — el diseño, colores, tipografía y estructura ya están validados ahí. Tu trabajo es convertirlos en un proyecto Astro real, limpio y bien estructurado, NO reinventar el diseño.

---

## Quién soy y qué vende el sitio

Soy Pablo Kohler, consultor de marketing digital y comunicaciones. Mi diferenciador central: soy un **híbrido** que diseña la estrategia Y construye los sistemas técnicos que la hacen funcionar (SEO, sitios web, automatización). Casi nadie combina ambas cosas — eso lidera todo el posicionamiento.

Me estoy relocalizando a Australia. El sitio cumple DOS roles con jerarquía clara:
1. **Arriba (hero):** mi marca profesional híbrida seria.
2. **Más abajo:** servicios concretos como puerta de entrada para trabajo de flujo de caja, SUBORDINADOS, nunca al frente.

**Regla de tono:** gradiente de complejidad. Público general arriba (lenguaje cálido, cero jerga), y más técnico a medida que se baja o se hace clic. El home le habla a cualquiera; los casos y páginas profundas usan lenguaje técnico.

**NO incluir jamás:** gestión de redes sociales como servicio. No aparece en ninguna parte.

---

## Stack y decisiones técnicas (CERRADAS)

- **Framework:** Astro (estático). Elegido por rendimiento (Lighthouse 95-100 sin esfuerzo), coherencia con que vendo SEO, y simplicidad. NO Next.js, NO v0.
- **Deploy:** Vercel. Empezar con entorno de STAGING (URL tipo pablokohler.vercel.app) — NO tocar el dominio real todavía.
- **Bilingüe:** ES/EN con i18n nativo de Astro, subcarpetas `/es/` y `/en/`, español por defecto en la raíz. El contenido EN se escribe pensado en inglés (no traducción literal), especialmente el hero.
- **Formulario:** Formspree (plan gratis).
- **Blog:** desde el lanzamiento, en Markdown (Content Collections de Astro).
- **Casos:** formato "mix" — tarjeta resumen en el home que enlaza a página de detalle propia.

## Hostinger / migración (IMPORTANTE para el SEO)

- El sitio actual es **WordPress en Hostinger** con URLs ya indexadas en Google.
- Hostinger se MANTIENE — aloja otros sitios de clientes (Vetro, Rangitaki). Solo pablokohler.com se mueve a Vercel.
- ANTES del deploy final a producción: inventariar las URLs actuales de WordPress y preparar **redirects 301** para no perder rankings. (Esto es tarea pendiente, no bloquea el staging.)
- El dominio se apunta a Vercel vía DNS cuando todo esté listo — ese es el ÚLTIMO paso.

---

## Dirección visual (validada en el prototipo)

**Estética:** "Y2K Sun" — como CAPA DE ACENTO sobre una base sobria y profesional. NO Y2K saturado. La regla es: gastar la audacia en UN elemento (la estrella firma), todo lo demás disciplinado y limpio. Nada de cromados, iridiscencia ni tipografía bulbosa acumulados.

**Paleta (solo cálida, atardecer):**
- `--ink: #141210` (casi negro cálido — texto y estructura)
- `--paper: #FAF6F0` (blanco hueso cálido — fondo)
- `--coral: #E85D2A` (acento primario)
- `--amber: #F5A623` (acento secundario)
- `--magenta: #D4356B` (acento puntual)

**Tipografía:**
- Display: "Space Grotesk"
- Body: "Inter"
- Mono (métricas, datos, detalles técnicos): "JetBrains Mono"

**Elemento firma:** una estrella de 4 puntas (archivo `estrella.svg`, derivada de mi símbolo de marca ✸) que ROTA lento y continuo. Aparece como acento sutil en el hero (grande, baja opacidad), en las tarjetas de capacidad, en los casos, y en el contacto. Respeta siempre `prefers-reduced-motion`.

**Texturas/detalles:** grano sutil sobre el fondo (rompe el "plano perfecto" que delata IA), bordes que se desvanecen en la marquesina, hovers que levantan tarjetas con borde coral.

---

## Estructura del HOME (6 secciones, en orden)

1. **Hero** — copy definitivo abajo.
2. **Franja de logos** — marquesina de scroll infinito. Clientes: Vetro Chile, Rangitaki, Proyecto Alquimia, Fundación Huella Animal, UC Chile, Docomomo. (Logos PNG están en mi WordPress actual, los aporto yo.)
3. **Capacidades (Nivel 2)** — 3 tarjetas: Presencia / Crecimiento / Sistemas. Cada una con titular humano + descripción + lista técnica en mono. Al pie, franja discreta "¿Necesitas algo puntual?" (puerta de flujo de caja).
4. **Casos (Nivel 3)** — formato mix, tarjetas que enlazan a detalle. Por ahora 2 casos reales: Docomomo y One Health. FALTAN MÉTRICAS (ver abajo).
5. **Sobre mí** — bio real (abajo) + foto (la aporto yo) + 3 "facts": 9+ años / bilingüe ES-EN / CL→AU.
6. **Contacto** — formulario Formspree + Calendly + LinkedIn. Sin botón de email suelto. Footer con remate.

---

## COPY DEFINITIVO DEL HERO (español)

- **Eyebrow:** Tu socio digital, de principio a fin
- **Titular:** Hago crecer tu presencia digital — y que funcione de verdad.
- **Subtítulo:** Una sola persona para pensar tu estrategia digital y construirla completa. Desde la idea hasta que está funcionando.
- **Chips:** Sitios que convierten · Más visibilidad · Menos trabajo manual
- **Remate:** You need it, I make it real.

## Bio "Sobre mí" (español, ya redactada)

Soy especialista en comunicaciones y marketing digital. Durante más de 9 años he ayudado a universidades, emprendedores académicos y organizaciones a convertir sus objetivos de comunicación en resultados medibles — diseñando campañas basadas en datos y construyendo los sistemas digitales que las hacen funcionar.

No solo planifico campañas: las construyo. Mi trabajo abarca estrategia de contenido y comunicaciones, automatización de marketing, analítica y desarrollo web práctico — uniendo el mensaje con la tecnología que hay detrás.

Lo que me mueve es el propósito: me comprometo especialmente con organizaciones que trabajan en ciencia, educación, bienestar animal e impacto basado en evidencia.

---

## Canales de contacto reales

- Calendly: https://calendly.com/pablokohlerlara/30min
- LinkedIn: https://www.linkedin.com/in/pablo-kohler/
- Email (para Formspree, no como botón suelto): p.kohlerlara@gmail.com

---

## PENDIENTE — no bloquea el andamiaje pero sí el lanzamiento

- **MÉTRICAS DE LOS CASOS:** el punto crítico. Los casos hoy no tienen números. Las voy a sacar de Google Search Console / GA4 (empezando por tráfico orgánico de Vetro Chile). La plantilla de detalle de caso ya tiene el HUECO reservado para las métricas — solo hay que llenarlo. NO inventes métricas.
- **Regla de contenido de casos:** describir en lenguaje de resultado, con nombres de servicios y outcomes — NUNCA revelar metodología paso a paso.
- **Contenido EN:** el inglés se escribe con intención nativa, no traducido. Prioridad el hero (me la juego ante empleadores australianos).

---

## Tu primera tarea

1. Inicializa un proyecto Astro limpio con estructura para i18n (ES/EN, subcarpetas, ES por defecto).
2. Configura Content Collections para casos y blog.
3. Monta el sistema de diseño como tokens/variables globales (la paleta, tipografías, la estrella firma como componente reutilizable).
4. Porta el HOME sección por sección desde `prototipo-home.html`, como componentes `.astro` limpios y reutilizables — no un HTML monolítico.
5. Porta la plantilla de detalle de caso desde `prototipo-caso-detalle.html`.
6. Deja el proyecto listo para `npm run dev` y para un deploy de staging en Vercel.

Empieza confirmándome el plan de estructura de carpetas antes de generar código. Trabaja incremental y explícame las decisiones de estructura Astro que tome (ahí sí soy menos experto).
