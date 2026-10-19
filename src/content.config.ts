import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Un caso = una tarjeta en el home + una página de detalle propia (formato "mix").
// `metrics[].value` va en `null` hasta que saques el número real de GSC/GA4 —
// la plantilla de detalle muestra el guion "—" y la etiqueta "MÉTRICA" mientras tanto.
// Nunca se debe inventar un valor aquí.
const caseSchema = z.object({
  title: z.string(),
  // Título corto para <title> y migas de pan (≤ 45 caracteres + " | Pablo Kohler"); el H1 usa `title`.
  seoTitle: z.string().optional(),
  lead: z.string(),
  tags: z.array(z.string()),
  client: z.string(),
  year: z.string(),
  role: z.string(),
  scope: z.string(),
  cardMetricDescriptor: z.string(),
  cardMetricLabel: z.string(),
  cardDescription: z.string(),
  coverVariant: z.enum(['default', 'alt']).default('default'),
  coverImage: z.string().optional(),
  // 'contain' evita recortar piezas gráficas verticales (posters, flyers) en el cover 16:9.
  coverFit: z.enum(['cover', 'contain']).default('cover'),
  // 'landscape' para capturas de sitios web (16:10); 'portrait' (por defecto) para posters/piezas verticales.
  galleryLayout: z.enum(['portrait', 'landscape']).default('portrait'),
  // Casos de sitios web: enlace al sitio real + "showcase" (marcos de navegador con scroll y visor con zoom).
  // Si hay `showcase`, reemplaza a la portada y a la galería. Las capturas se guardan a 2x (WebP).
  liveUrl: z.string().url().optional(),
  showcase: z
    .object({
      kicker: z.string(),
      title: z.string(),
      intro: z.string(),
      liveLabel: z.string(),
      ui: z.object({
        expand: z.string(),
        close: z.string(),
        prev: z.string(),
        next: z.string(),
        zoomIn: z.string(),
        zoomOut: z.string(),
        fit: z.string(),
        scrollHint: z.string(),
        zoomHint: z.string(),
        desktopLabel: z.string(),
        mobileLabel: z.string(),
      }),
      screens: z.array(
        z.object({
          kind: z.enum(['desktop', 'mobile']),
          src: z.string(),
          alt: z.string(),
          label: z.string(),
          url: z.string(),
        }),
      ),
    })
    .optional(),
  // Galería opcional de piezas (caso de diseño gráfico en vez de web/contenido).
  gallery: z.array(z.object({ src: z.string(), alt: z.string() })).optional(),
  metrics: z
    .array(z.object({ value: z.string().nullable(), label: z.string() }))
    .length(3),
  sections: z.object({
    context: z.object({ kicker: z.string(), title: z.string(), body: z.string() }),
    work: z.object({ kicker: z.string(), title: z.string(), body: z.string() }),
    result: z.object({ kicker: z.string(), title: z.string(), body: z.string() }),
  }),
  nextCaseSlug: z.string(),
  nextCaseTitle: z.string(),
});

const blogSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.date(),
  tags: z.array(z.string()).default([]),
  draft: z.boolean().default(false),
});

const casesEs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/es/cases' }),
  schema: caseSchema,
});
const casesEn = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/en/cases' }),
  schema: caseSchema,
});
const blogEs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/es/blog' }),
  schema: blogSchema,
});
const blogEn = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/en/blog' }),
  schema: blogSchema,
});

export const collections = {
  'cases-es': casesEs,
  'cases-en': casesEn,
  'blog-es': blogEs,
  'blog-en': blogEn,
};
