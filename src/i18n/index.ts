import { es } from './es';
import { en } from './en';
import type { UiDictionary } from './types';

export type Lang = 'es' | 'en';
export const LANGS: Lang[] = ['es', 'en'];

const dictionaries: Record<Lang, UiDictionary> = { es, en };

export function getDictionary(lang: Lang): UiDictionary {
  return dictionaries[lang];
}

/** Ruta al home del otro idioma, para el switch ES/EN del nav. */
export function otherLangHome(lang: Lang): string {
  return lang === 'es' ? '/en/' : '/es/';
}

export type { UiDictionary };
