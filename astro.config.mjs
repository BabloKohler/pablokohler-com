import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// SITE_TARGET=au → build de pablokohler.com.au (solo inglés). Ver src/site-target.ts.
const isAU = process.env.SITE_TARGET === 'au';

export default defineConfig({
  site: isAU ? 'https://pablokohler.com.au' : 'https://pablokohler.com',

  // El redirect "/" → "/es/" y todos los redirects 301 de las URLs viejas de
  // WordPress viven en vercel.json (301 reales a nivel de edge, no meta-refresh).
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: true,
    },
  },

  // En AU el español no se publica: se excluye del sitemap (y vercel.json lo redirige a /en/).
  // El blog está vacío (noindex): fuera del sitemap hasta que haya artículos. Quitar `/blog/` de este filtro al publicar el primero.
  integrations: [sitemap({ filter: (page) => !page.includes('/blog/') && !(isAU && page.includes('/es/')) })],
});
