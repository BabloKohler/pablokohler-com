# Cómo arrancar en Claude Code

Este paquete tiene todo para construir pablokohler.com en Astro.

## Contenido

- **PROMPT-CLAUDE-CODE.md** — el prompt maestro. Copia su contenido y pégalo como primer mensaje en Claude Code. Tiene TODO el contexto y las decisiones ya tomadas.
- **prototipo-home.html** — el home completo (6 secciones) como referencia visual exacta. Ábrelo en el navegador para ver el diseño validado.
- **prototipo-caso-detalle.html** — la plantilla de página de detalle de un caso.
- **estrella.svg** — el elemento firma (tu estrella de 4 puntas que rota).

## Pasos

1. Crea una carpeta nueva para el proyecto en tu máquina.
2. Copia estos 4 archivos ahí.
3. Abre Claude Code en esa carpeta.
4. Pega el contenido de PROMPT-CLAUDE-CODE.md como primer mensaje.
5. Adjunta los 3 archivos (los 2 HTML y el SVG) para que Claude Code los tenga de referencia.
6. Claude Code te propondrá una estructura de carpetas Astro — revísala y dale luz verde.

## Requisitos previos en tu máquina

- Node.js instalado (Astro lo necesita).
- Una cuenta de GitHub (para conectar con Vercel).
- Una cuenta de Vercel (gratis) para el deploy de staging.

## Importante

- El deploy va primero a STAGING (pablokohler.vercel.app o similar), NO al dominio real.
- El dominio pablokohler.com se toca al final, con los redirects 301 listos, para no perder tu SEO.
- Las métricas de los casos y la versión en inglés son las piezas que faltan para lanzar — el andamiaje se puede construir sin ellas.
