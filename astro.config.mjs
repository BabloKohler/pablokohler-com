import { defineConfig } from 'astro/config';

// Sitio de staging por ahora — se actualiza a https://pablokohler.com
// cuando el DNS apunte a Vercel (ver LEEME-PRIMERO.md).
export default defineConfig({
  site: 'https://pablokohler.vercel.app',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
  // El redirect "/" → "/es/" y todos los redirects 301 de las URLs viejas de
  // WordPress viven en vercel.json (301 reales a nivel de edge, no meta-refresh).
});
