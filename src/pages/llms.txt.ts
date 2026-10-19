import type { APIRoute } from 'astro';
import { IS_AU } from '../site-target';
import { AU_SERVICES } from '../data/au-services';
import { AU_RESCUE } from '../data/au-rescue';
import { AU_INDUSTRIES } from '../data/au-industries';

// Resumen para buscadores con IA (llms.txt). Solo hechos reales del sitio; se genera por dominio.
export const GET: APIRoute = ({ site }) => {
  const base = String(site).replace(/\/$/, '');
  const line = (title: string, path: string, desc: string) => `- [${title}](${base}${path}): ${desc}`;
  const body = IS_AU
    ? [
        '# Pablo Kohler: web designer for Sydney small businesses',
        '',
        '> Pablo Kohler is a Sydney-based web designer and digital marketing consultant. He redesigns websites, builds new ones, looks after them, and helps business owners who already have a website but cannot manage it. Prices are in AUD.',
        '',
        '## Services',
        ...AU_SERVICES.map((s) => line(s.cardTitle, `/en/${s.slug}/`, `${s.cardBlurb} (${s.cardFrom})`)),
        '',
        '## Already have a website you cannot manage?',
        ...AU_RESCUE.map((s) => line(s.cardTitle, `/en/${s.slug}/`, `${s.cardBlurb} (${s.cardFrom})`)),
        '',
        '## By industry (Sydney)',
        ...AU_INDUSTRIES.map((s) => line(s.cardTitle, `/en/${s.slug}/`, `${s.cardBlurb} (${s.cardFrom})`)),
        '',
        '## Work',
        line('She Loves Pink', '/en/cases/shelovespink/', 'Website redesign for a Bondi Junction beauty salon, moved off Wix, with an admin panel, GA4 and ads.'),
        line('Docomomo', '/en/cases/docomomo/', 'Website and abstract submission platform for an international architecture conference.'),
        '',
      ].join('\n')
    : [
        '# Pablo Kohler: digital marketing and communications consultant',
        '',
        '> Pablo Kohler is a digital marketing and communications consultant with 9+ years of experience, working across Chile, Latin America and Australia. He builds websites, SEO and automation for universities, academic founders and organisations across Chile and Latin America. Bilingual Spanish/English. Australian business site: https://pablokohler.com.au',
        '',
        '## Pages',
        line('Inicio (español)', '/es/', 'Consultor de marketing digital y comunicaciones: sitios web, SEO y automatización.'),
        line('Home (English)', '/en/', 'Digital marketing and communications consultant: websites, SEO and automation.'),
        line('She Loves Pink', '/en/cases/shelovespink/', 'Website redesign for a Bondi Junction beauty salon.'),
        line('Docomomo', '/en/cases/docomomo/', 'Website for an international architecture conference.'),
        line('One Health', '/en/cases/one-health/', 'Science communication article for UC Chile.'),
        line('UC Chile graphics', '/en/cases/uc-graficas/', 'Campaign graphics for innovation and education programs.'),
        '',
      ].join('\n');
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
