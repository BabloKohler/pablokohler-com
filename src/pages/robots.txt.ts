import type { APIRoute } from 'astro';

// robots.txt por dominio: cada sitio declara SU propio sitemap (antes el .com.au apuntaba al del .com).
// /tasmania/ es una página privada (también lleva noindex).
export const GET: APIRoute = ({ site }) =>
  new Response(`User-agent: *\nAllow: /\nDisallow: /tasmania/\n\nSitemap: ${new URL('sitemap-index.xml', site).href}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
