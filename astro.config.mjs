import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://pablokohler.com',

  // El redirect "/" → "/es/" y todos los redirects 301 de las URLs viejas de
  // WordPress viven en vercel.json (301 reales a nivel de edge, no meta-refresh).
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: true,
    },
  },

  integrations: [
    sitemap({
      // Página temporal y privada, sin indexar (ver src/pages/cuenta-despedida/index.astro).
      filter: (page) => !page.includes('/cuenta-despedida/'),
    }),
  ],
});
