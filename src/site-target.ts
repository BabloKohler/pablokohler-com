/**
 * Variante del sitio que se está construyendo.
 *  - "main" (por defecto): pablokohler.com, ES + EN.
 *  - "au": pablokohler.com.au, solo inglés (espejo del mismo repo).
 * Se activa con SITE_TARGET=au en el proyecto de Vercel australiano.
 */
export const IS_AU = process.env.SITE_TARGET === 'au';
export const SITE_URL = IS_AU ? 'https://pablokohler.com.au' : 'https://pablokohler.com';

/** Los dos dominios. El otro sirve para el hreflang cruzado (.com ↔ .com.au). */
export const MAIN_URL = 'https://pablokohler.com';
export const AU_URL = 'https://pablokohler.com.au';

/** Páginas en inglés que existen en AMBOS dominios (home, casos, privacidad): llevan hreflang cruzado. */
export const isSharedEnPath = (p: string) =>
  /^\/en\/$/.test(p) || /^\/en\/cases\/[a-z0-9-]+\/$/.test(p) || /^\/en\/privacy\/$/.test(p);
