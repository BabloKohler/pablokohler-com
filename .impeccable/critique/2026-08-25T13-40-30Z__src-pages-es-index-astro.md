---
target: pablokohler.com — sitio completo (home ES/EN, casos, blog)
total_score: 17
max_score: 32
na_heuristics: 7,10
p0_count: 3
p1_count: 2
timestamp: 2026-08-25T13-40-30Z
slug: src-pages-es-index-astro
---
Method: dual-agent (A: ab282fb4c72185f98 · B: af67872b651ea1ce4)

# Crítica de diseño — pablokohler.com (home ES/EN, casos, blog)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 1/4 | El formulario de contacto no da ninguna confirmación de éxito/error. |
| 2 | Match Between System & Real World | 2/4 | Las páginas de caso muestran texto de andamiaje crudo ("[Placeholder]", "—"). |
| 3 | User Control and Freedom | 2/4 | No hay menú móvil; las páginas de caso pierden el switch de idioma. |
| 4 | Consistency and Standards | 2/4 | El home ES muestra una frase en inglés en el hero/footer. |
| 5 | Error Prevention | 3/4 | Validación nativa básica presente, nada más. |
| 6 | Recognition Rather Than Recall | 3/4 | Buena orientación en desktop, se degrada en móvil/casos. |
| 7 | Flexibility and Efficiency of Use | n/a | Superficie de marketing/portafolio. |
| 8 | Aesthetic and Minimalist Design | 3/4 | Home limpio; casos con ruido de placeholders; estrella sobreusada. |
| 9 | Help Recognize/Diagnose/Recover from Errors | 1/4 | No existe ningún estado de error en el sitio. |
| 10 | Help and Documentation | n/a | No aplica a marketing/portafolio. |
| **Total** | | **17/32** | **Acceptable (53%)** |

## Veredicto de especificidad de diseño

El sistema de tokens es genuinamente bespoke y disciplinado. El copy es desparejo: fuerte en "No solo planifico campañas: las construyo", genérico en hero/capacidades. El claim central (híbrido estrategia+construcción) nunca se dice explícitamente. Las páginas que probarían ese claim (los casos) son las que hoy tienen placeholders.

Detector: 5 hallazgos estáticos (4× gradient-text, 1× overused-font). Inyección en vivo (3 páginas): low-contrast (3.2:1, confirmado real, no aplica excepción de texto grande), clipped-overflow-container ×4, tiny-text ×2, undersized-ui-text (MÉTRICA 9px ×3), cream-palette, all-caps-body, marquee ×2, kicker-above-heading ×3.

Falsos positivos probables: undersized-ui-text y kicker-above-heading son un único patrón de componente repetido 3x, no 3 bugs independientes. all-caps-body apunta a una etiqueta corta (eyebrow), no a párrafo de cuerpo. clipped-overflow-container es probablemente intencional (estrellas decorativas sangrando fuera del contenedor). marquee es válido en general pero el código ya respeta prefers-reduced-motion, cosa que el detector no puede verificar.

Overlays: inyección exitosa en 3 páginas, pero las pestañas se cerraron y live-server se detuvo tras capturar evidencia — no queda overlay visible abierto ahora mismo.

## Impresión general

El nivel de sistema es sólido y fiel al brief. El problema es honestidad del staging: las páginas que deberían probar "entrego sistemas que funcionan" muestran placeholders crudos, y el momento de mayor riesgo (el formulario) admite que podría no estar terminado. La mayor oportunidad es cerrar la brecha entre andamiaje y producto listo para visitantes reales antes de lanzar.

## Lo que funciona

1. Sistema de tokens disciplinado y consistente en todo el sitio.
2. "No solo planifico campañas: las construyo" — copy específico que gana la posición híbrida, y su versión EN se lee nativa.
3. Higiene de accesibilidad de componente donde se pensó: estrellas aria-hidden, jerarquía de encabezados limpia.

## Problemas prioritarios

**[P0] El formulario de contacto no da feedback y expone una nota de desarrollador**
- Por qué importa: momento de mayor riesgo del sitio; hoy admite que podría no funcionar y no confirma nada.
- Fix: quita la nota de estado de build del texto visible; implementa feedback real de éxito/error.
- Comando sugerido: /impeccable harden

**[P0] Los casos de estudio muestran placeholders crudos como contenido en vivo**
- Por qué importa: son la única prueba de trabajo, alcanzada por los visitantes más interesados.
- Fix: ocúltalos del grid del home hasta tener contenido real, o diseña un estado "en preparación" intencional.
- Comando sugerido: /impeccable harden

**[P0] El home en español muestra una frase en inglés en el hero y footer**
- Por qué importa: en el idioma primario, se lee como bug de traducción.
- Fix: dale valores reales en español a es.ts, o trata la línea como elemento de marca aparte del sistema de traducción.
- Comando sugerido: /impeccable clarify

**[P1] No existe menú de navegación móvil**
- Por qué importa: Servicios y Blog quedan inalcanzables en móvil salvo con scroll completo.
- Fix: agrega un toggle de menú móvil.
- Comando sugerido: /impeccable adapt

**[P1] El motivo de la estrella rotante está sobreusado, diluyendo la firma**
- Por qué importa: el brief pide gastar audacia en UN elemento; hoy aparece en casi todas las secciones mientras el wordmark del nav usa un glifo Unicode plano en vez del asset real. Corroborado por el detector (gradient-text ×4, fuente concentrada, 2 animaciones de loop).
- Fix: reserva la estrella giratoria para el hero, simplifica el resto, usa el componente real como glifo del nav.
- Comando sugerido: /impeccable quieter

## Persona Red Flags

**Jordan (primer visitante ES):** la línea en inglés bajo el CTA se lee como glitch. "Blog" es callejón sin salida. El caso Docomomo rompe la confianza a mitad de párrafo con texto de placeholder.

**Riley (probador de estrés):** ambos casos muestran el mismo patrón de placeholder; One Health tiene campos completos entre corchetes. La nota de Formspree bajo el botón de envío lo hace preferir LinkedIn.

**Casey (móvil distraído):** sin botón de menú, tiene que scrollear todo para llegar a Servicios; las cajas de métrica en "—" parecen un widget roto antes de cargar contenido real.

## Observaciones menores

- Contraste WCAG AA fallido en dos combinaciones: ink-40 (~2.6:1, único color de texto en /blog/) y coral sobre paper (~3.2:1, confirmado por detector).
- Las páginas de caso pierden el switch de idioma completamente.
- Bug de comillas tipográficas en el título "One Health" (comillas de cierre en ambos lados).
- Nota de instrucción de build "imagen / mockup del proyecto aquí" visible en las páginas de caso.
- Tarjetas de caso son un solo <a> gigante — nombre accesible muy largo para lectores de pantalla.
- Foco de teclado en campos de formulario es sutil comparado con el resto del sitio.

## Preguntas provocadoras

- Si el claim central es "casi nadie combina estrategia y construcción", ¿por qué ninguna oración lo dice directamente?
- ¿Vale la pena tener "Blog" en la navegación principal antes de que exista un solo post?
- ¿Deberían los casos estar enlazados desde el home todavía, si hacer clic hoy daña la confianza?
- ¿La estrella se trató como firma (rara, deliberada) o como ícono decorativo de stock?
