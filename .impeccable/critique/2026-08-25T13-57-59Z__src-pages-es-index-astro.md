---
target: pablokohler.com — sitio completo (home ES/EN, casos, blog)
total_score: 18
max_score: 32
na_heuristics: 7,10
p0_count: 3
p1_count: 2
timestamp: 2026-08-25T13-57-59Z
slug: src-pages-es-index-astro
---
Method: dual-agent (A: a77f38bb747622a95 · B: a8fd25180f1b381dd)

Aviso: no se implementó ningún fix entre la crítica anterior y esta — corrida de confirmación independiente, no verificación de progreso.

# Crítica de diseño — pablokohler.com (2ª corrida)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 1/4 | El formulario no da estado de carga/éxito/error. |
| 2 | Match Between System & Real World | 2/4 | Los casos muestran corchetes de placeholder crudos como contenido real. |
| 3 | User Control and Freedom | 3/4 | Back link funciona bien; único callejón sin salida real es Blog. |
| 4 | Consistency and Standards | 2/4 | Tagline en inglés hardcodeada en el diccionario ES; nav móvil rompe expectativa estándar. |
| 5 | Error Prevention | 3/4 | Validación HTML5 nativa, nada más. |
| 6 | Recognition Rather Than Recall | 3/4 | Anclas y labels claros. |
| 7 | Flexibility and Efficiency of Use | n/a | No aplican rutas de power-user. |
| 8 | Aesthetic and Minimalist Design | 3/4 | Base sobria; estrella sobreusada como ícono genérico en ~7 contextos. |
| 9 | Error Recovery | 1/4 | No existe UI de error en ningún lugar. |
| 10 | Help and Documentation | n/a | No aplica a portafolio/marketing. |
| **Total** | | **18/32** | **Acceptable (56%)** |

vs. 17/32 la corrida anterior — variación dentro del ruido entre pasadas independientes, el código no cambió.

## Veredicto de especificidad de diseño

Tercio superior específico ("CL → AU", "No entrego un plan y te dejo solo... con una sola persona"). Debajo colapsa: ambos casos tienen instrucciones de redacción renderizadas como contenido en vivo, la marquesina es texto plano, la foto de Sobre mí es un placeholder.

CLI reproduce exactamente los mismos 5 hallazgos (4x gradient-text, 1x overused-font). La inyección en vivo cubrió las 5 páginas esta vez (antes 3) y aparecen hallazgos nuevos por cobertura ampliada: kicker-above-heading (x3 por página de caso), em-dash-overuse (x1, One Health, 8 em-dashes). clipped-overflow-container no apareció esta vez — probable diferencia de estado de scroll/viewport, no cambio real.

Falso positivo: undersized-ui-text en MÉTRICA (2-3x por página) es un único patrón de MetricsStrip.astro contado como hallazgos independientes.

Discrepancia del propio detector: el header de consola dice menos anti-patrones ("15"/"8") que líneas individuales registradas (19/12) en home y casos respectivamente — problema del detector mismo, reportado tal cual.

Overlays: inyección exitosa en las 5 páginas; pestañas cerradas y live-server detenido tras capturar evidencia.

## Impresión general

Sitio idéntico al de la corrida anterior porque no se tocó nada. Los 3 P0 y 2 P1 se re-confirman de forma independiente. Matiz nuevo: el Blog vacío es "honesto y bien escrito" pero sigue siendo callejón sin salida en nav principal; el .form-note no verifica si formAction resolvió antes de mostrar el aviso de "podría no estar terminado".

## Problemas prioritarios (sin cambios)

**[P0] Casos de estudio exponen placeholders y notas internas de redacción en vivo**
- Nuevo detalle: el cuerpo "Lo que hice" de Docomomo incluye literalmente "Recuerda: nombres de servicios y resultados, no procedimientos" como si fuera texto final.
- Comando sugerido: /impeccable harden

**[P0] Fuga de inglés en el diccionario español (es.ts)**
- Confirmado de nuevo en hero y footer.
- Comando sugerido: /impeccable clarify

**[P0] Formulario de contacto sin feedback**
- Confirmado de nuevo; el aviso de Formspree se muestra siempre, sin verificar si formAction resolvió.
- Comando sugerido: /impeccable harden

**[P1] Sin menú de navegación móvil**
- Confirmado de nuevo.
- Comando sugerido: /impeccable adapt

**[P1] Estrella sobreusada como ícono genérico (~7 roles distintos)**
- Nuevo matiz: al usarse como placeholder de foto/imagen faltante, dobla como "asset no listo", debilitando la firma.
- Comando sugerido: /impeccable quieter

## Persona Red Flags

**Jordan:** ve "CLIENTE: [Nombre del cliente]" en One Health y duda de si el negocio es real.

**Riley:** envía el formulario, no pasa nada, y el texto ya le había advertido que podría no funcionar.

**Casey (móvil):** sin nav, scrollea todo, ve el placeholder del caso y cierra sin llegar al formulario.

## Observaciones menores

- Blog vacío honesto en copy pero mismo peso de nav que Trabajo/Contacto.
- .metric-descriptor usa el mismo tratamiento visual que métricas numéricas reales — riesgo de confundirse con una cifra.
- Sección de logos sin heading semántico.
- Nuevo: 8 em-dashes en el cuerpo de One Health, revisar si es patrón a moderar.

## Preguntas provocadoras

- ¿Debería "Ver el caso" ser clickeable todavía, o un estado "Próximamente" como el ya existente para métricas?
- ¿La línea "You need it, I make it real." es firma bilingüe deliberada? ¿Debería marcarse visualmente como tal?
- La estrella hace doble trabajo (firma + placeholder de asset no listo) — ¿qué está firmando realmente hoy?
