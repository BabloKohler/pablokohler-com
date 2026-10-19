# Auditoría SEO: pablokohler.com (Chile) y pablokohler.com.au (Australia)

Fecha: 19-oct-2026 · Método: rastreo propio de los dos sitios en vivo (sitemaps, redirecciones, etiquetas, datos
estructurados, enlaces, duplicidad entre dominios), Lighthouse móvil con throttling simulado (Edge), pruebas
funcionales con navegador automatizado y búsquedas de mercado. Las correcciones técnicas ya están publicadas
(commit `e8629d9`).

## 1. Resumen ejecutivo

| Área | Antes | Ahora |
|---|---|---|
| Rendimiento móvil, home `.com` | 58 (LCP 4,8 s) | **92** (LCP 2,9 s) |
| Rendimiento móvil, home `.com.au` | 70–81 | **91** |
| Rendimiento móvil, landing australiana | 46 (TBT 3,5 s)* | **99** (LCP 1,7 s) |
| Rendimiento móvil, caso She Loves Pink | 65 (3,2 MB, LCP 7,8 s) | **96** (0,6 MB, LCP 2,0 s) |
| SEO (Lighthouse) | 92–100 | **100** en las 4 |
| Accesibilidad | 92–96 | 96–100 |
| CLS | 0,02–0,15 | 0 |

\* Parte de ese 46 era ruido de la máquina de medición; el aislamiento por variantes mostró que la causa real del
retraso era Google Fonts (FCP 3,1 s → 1,2 s al quitarlo).

**Lo más importante que se corrigió:** el `robots.txt` de `.com.au` apuntaba al sitemap de `.com`; los canonical y los
enlaces internos de los casos iban sin "/" final mientras el sitemap los tenía con "/" (duplicados técnicos); no había
`hreflang` entre dominios; el `<title>` de 10 páginas y la descripción de ~20 excedían el largo de Google; las fuentes de
Google bloqueaban el render.

**Lo que más va a mover el posicionamiento a partir de ahora (no es técnico):** contenido y autoridad. Ver sección 6.

## 2. Correcciones ya publicadas

### Indexación e internacional
- `robots.txt` y `llms.txt` generados por dominio, cada uno con su propio sitemap.
- URLs con "/" final en canonical, hreflang y enlaces internos (coinciden con el sitemap).
- `hreflang` recíproco en las páginas compartidas: `es` ↔ `en` ↔ `en-AU` (verificado en vivo). `html lang="en-AU"` en
  Australia; `og:locale` corregido (`en_US` en `.com/en`, antes decía `en_AU`).
- Blog vacío: `noindex` y fuera del sitemap (ver "al publicar el primer artículo", más abajo).

### On-page
- Títulos ≤ 60 y descripciones ≤ 155 caracteres: 16 landing AU, 4 casos × 2 idiomas, homes. Fuente única en
  `src/data/au-seo.ts` y `seoTitle` en cada caso.
- Home en español: título ahora apunta a "Consultor de marketing digital en Chile".
- `BreadcrumbList` (JSON-LD) en casos y landing. Corregido " ," antes de la coma del titular del hero.

### Rendimiento y accesibilidad
- Fuentes autoalojadas con precarga (adiós Google Fonts).
- Un solo símbolo de la estrella por página: HTML de la home 88 → 56 KB (AU) y 79 → 46 KB (.com).
- El motor de los soles arranca en reposo (hero) o al acercarse (footer): sin tarea larga en la carga.
- Caso She Loves Pink: imágenes livianas en los marcos y recortes 4:3 en móvil; las de 2× solo se cargan en el visor.
- Portada One Health JPG → WebP (145 → 29 KB), tarjetas con carga diferida, cabeceras de seguridad.
- Contraste WCAG AA en texto secundario y en el coral pequeño; enlace descriptivo en el banner de cookies.

## 3. Hallazgos que necesitan tu decisión o tu cuenta

| # | Qué | Por qué importa | Quién |
|---|---|---|---|
| 1 | **Search Console** para `.com` y `.com.au` (propiedad de dominio), enviar `sitemap-index.xml` y solicitar indexación de las URLs clave | Sin esto no sabemos qué está indexado; con un dominio nuevo acelera semanas | Tú (cuenta Google) |
| 2 | **Google Business Profile** (negocio de servicio en Sydney) | Es la palanca más rápida para búsquedas locales | Tú |
| 3 | **Home AU con contenido de Chile** (ver sección 4) | La relevancia local del body es débil: "Sydney" aparece 1 vez | Aprobar copy |
| 4 | **Chile sin páginas de servicio** (ver sección 5) | Con solo home + casos no hay qué posicionar para búsquedas con intención | Aprobar enfoque |
| 5 | **Imagen social única por página** (hoy todas usan tu retrato) | Mejora clics al compartir en LinkedIn/WhatsApp | Yo |
| 6 | **Créditos con enlace** en los sitios de tus clientes ("Sitio por Pablo Kohler") | Backlinks reales y relevantes; She Loves Pink es el primero | Tú + cliente |
| 7 | **Casos con ~280 palabras** (Docomomo, One Health, UC): ampliar a 500+ con proceso y resultado | Contenido fino compite poco | Tú aportas datos |
| 8 | Texto del footer del `.com`: "Santiago → Australia" vs "Sydney-based" en el `.au` | Señales de ubicación inconsistentes | Tú decides |
| 9 | `lastmod` en el sitemap | Hoy no hay; solo conviene si es la fecha real de edición | Yo (con cuidado) |

## 4. Australia: diagnóstico y plan

**Fortalezas:** 22 URLs indexables (5 servicios, 7 de "ya tengo sitio y no lo controlo", 4 por rubro, casos), titulares con
"Sydney", datos estructurados `ProfessionalService` (Sydney / NSW / Australia), precios transparentes y rendimiento alto.

**Debilidades:**
- La home `.com.au` usa el mismo hero y la misma sección "Sobre mí" que el `.com` (hablan de Chile y Latinoamérica; los
  logos de clientes son chilenos). Para Google, "Sydney" aparece una sola vez en el texto de la home.
- Dominio nuevo: espera normal de semanas ("sandbox"); necesita señales externas.
- Competencia directa: agencias locales con precios publicados (p. ej. sitios pequeños entre A$1.900 y A$3.800 y planes
  desde A$97/mes). Tus precios están en el tramo bajo; la diferencia debe ser el nicho de dolor.

**Copy propuesto para la home AU (requiere tu aprobación):**
- H1: "Websites that work for Sydney small businesses."
- Subtítulo: "I redesign, fix and look after websites for small business owners across Sydney and Australia, including the
  ones who can't manage theirs."
- CTA principal: "Get a free website audit". "Sobre mí" reescrito para Australia (Sydney, 9+ años, bilingüe).

**Palabras clave objetivo (sin datos de volumen: no tengo acceso a Semrush/Ahrefs; validar en Search Console y Google Ads):**
- Servicio: *website redesign Sydney*, *web designer Sydney small business*, *website maintenance Sydney*.
- Dolor (cola larga, menos competencia, alta intención): *lost access to my website*, *who owns my domain name Australia*,
  *website developer disappeared*, *can't edit my website*, *hacked website repair Sydney*, *move from Wix to WordPress*.
- Rubro: *website design for tradies / plumbers / cafes / physios Sydney*.

**Contenido (blog), el mayor potencial:** artículos que respondan la duda exacta y enlacen a la landing correspondiente:
1. "¿Quién es dueño de mi dominio `.au`? Cómo revisarlo" (citando la regla de auDA: si un desarrollador registra un `.au`
   para ti, el registrante debe ser tu negocio).
2. "Cuánto cuesta un sitio web en Sydney (2026)", con tus precios reales.
3. "Cómo editar tu sitio en WordPress / Wix / Squarespace / Shopify (lo básico)".
4. "Señales de que tu sitio fue hackeado y qué hacer".
5. "Wix vs WordPress para una pyme australiana".
Al publicar el primero: quitar `/blog/` del filtro de `astro.config.mjs` y el `noindex` (`posts.length === 0` ya lo hace solo).

**Local:** Google Business Profile (categoría principal "Web designer" + servicios), NAP idéntico en todos lados, directorios
australianos (Yellow Pages, True Local, Hotfrog), reseña de She Loves Pink en Google y un testimonio real en las landing.
Evitar cientos de páginas por suburbio: sin presencia física son "doorway pages". Una sección "Áreas de servicio" en la home basta.

## 5. Chile: diagnóstico y plan

**Situación:** 1 home + 4 casos + privacidad. La home menciona "Chile" 2 veces y "Santiago" 1; no hay páginas de servicio.
Para "consultor de marketing digital Chile" compiten perfiles de LinkedIn, directorios de agencias (Semrush) y bolsas de
empleo: es un término muy disputado y genérico.

**Oportunidad real, tu nicho:** comunicación científica y marketing para universidades, oficinas de transferencia
tecnológica y fundadores académicos. En mis búsquedas no aparecieron proveedores claros de ese servicio en Chile.
Páginas sugeridas (en español, una por intención de búsqueda):
1. `/es/comunicacion-cientifica/`: comunicación científica para universidades y centros de investigación (caso One Health).
2. `/es/marketing-transferencia-tecnologica/`: marketing y comunicación para oficinas de transferencia y licenciamiento.
3. `/es/sitios-web-congresos-academicos/`: sitio web y recepción de resúmenes para congresos (caso Docomomo, 512 resúmenes).
4. `/es/diseno-web-para-ong-y-bienestar-animal/` o `/es/marketing-digital-para-organizaciones-con-proposito/`
   (alineado con tu foco de propósito).
5. `/es/sobre-mi/`: trayectoria (9+ años, UC), E-E-A-T para la búsqueda de tu nombre.
Blog en español: "Cómo comunicar un hallazgo científico a no especialistas", "Qué es la transferencia tecnológica y cómo
comunicarla", "Checklist de un sitio web para congresos académicos".

## 6. Autoridad y medición
- **Backlinks:** créditos en sitios de clientes, perfiles (LinkedIn ya está en `sameAs`), directorios, colaboraciones con
  oficinas de transferencia y asociaciones, notas en medios locales. Sin tráfico ni enlaces, ninguna optimización técnica basta.
- **Medición:** GA4 ya mide (y se corrigió el error de `gtag`); marcar `generate_lead` como evento clave; vincular Search
  Console con GA4; revisar semanalmente consultas, impresiones y posición en Search Console.
- **SEO de pago como atajo:** Google Ads hacia `/website-control-check` y `/locked-out-of-my-website`, y usar sus datos de
  búsqueda para validar qué palabras clave valen la pena en orgánico.

## 7. Plan de 30 / 60 / 90 días

**Primeros 7 días:** Search Console ×2 + sitemaps; Google Business Profile; aprobar copy de la home AU; crédito con enlace en
She Loves Pink; imágenes sociales únicas.
**Días 8–30:** publicar 2 artículos AU (dominio `.au` y costos); 2 páginas de servicio para Chile (comunicación científica y
congresos); ampliar los casos a 500+ palabras; reseña y testimonio real.
**Días 31–60:** 2 artículos por mes por mercado; resto de páginas de servicio en Chile; directorios y citaciones; empezar Ads
de prueba y leer Search Console.
**Días 61–90:** reforzar lo que ya empiece a posicionar (títulos, enlazado interno), nuevos artículos según consultas
reales, outreach de enlaces.

## 8. Limitaciones de esta auditoría
- No pude verificar la **indexación real** ni las posiciones: no tengo acceso a Search Console y las búsquedas `site:` de mi
  herramienta no son confiables. Es el primer punto de la sección 3.
- Sin datos de **volumen de palabras clave** (no hay herramientas de pago conectadas): las listas son hipótesis por
  intención de búsqueda.
- Lighthouse es **de laboratorio** (throttling simulado) y varía con la carga de la máquina; los datos de campo (Core Web
  Vitals reales) aparecerán en Search Console cuando haya tráfico suficiente.
- Los precios de mercado citados vienen de páginas de proveedores (marketing), tomados como referencia.
