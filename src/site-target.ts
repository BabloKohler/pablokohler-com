/**
 * Variante del sitio que se está construyendo.
 *  - "main" (por defecto): pablokohler.com, ES + EN.
 *  - "au": pablokohler.com.au, solo inglés (espejo del mismo repo).
 * Se activa con SITE_TARGET=au en el proyecto de Vercel australiano.
 */
export const IS_AU = process.env.SITE_TARGET === 'au';
export const SITE_URL = IS_AU ? 'https://pablokohler.com.au' : 'https://pablokohler.com';
