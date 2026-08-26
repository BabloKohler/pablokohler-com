import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Un caso = una tarjeta en el home + una página de detalle propia (formato "mix").
// `metrics[].value` va en `null` hasta que saques el número real de GSC/GA4 —
// la plantilla de detalle muestra el guion "—" y la etiqueta "MÉTRICA" mientras tanto.
// Nunca se debe inventar un valor aquí.
const caseSchema = z.object({
  title: z.string(),
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
