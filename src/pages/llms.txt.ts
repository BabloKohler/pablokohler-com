import type { APIRoute } from 'astro';
import { IS_AU } from '../site-target';
import { AU_SERVICES } from '../data/au-services';
import { AU_RESCUE } from '../data/au-rescue';
import { AU_INDUSTRIES } from '../data/au-industries';
import { AU_MARKETING } from '../data/au-marketing';
import { MKT, mktHref } from '../data/marketing';

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
        '## Get found and get customers (SEO, Google Ads, Meta Ads)',
        ...AU_MARKETING.map((s) => line(s.cardTitle, `/en/${s.slug}/`, `${s.cardBlurb} (${s.cardFrom})`)),
        '',
        '## Already have a website you cannot manage?',
        ...AU_RESCUE.map((s) => line(s.cardTitle, `/en/${s.slug}/`, `${s.cardBlurb} (${s.cardFrom})`)),
        '',
        '## By industry (Sydney)',
        ...AU_INDUSTRIES.map((s) => line(s.cardTitle, `/en/${s.slug}/`, `${s.cardBlurb} (${s.cardFrom})`)),
        '',
        '## Work',
        line('She Loves Pink', '/en/cases/shelovespink/', 'Website redesign for a Sydney beauty salon, moved off Wix, with an admin panel, GA4 and ads.'),
        line('Bondi Painters', '/en/cases/bondipainters/', 'Local SEO website for a Sydney painter: a landing page for each of 44 Eastern Suburbs, with Google Analytics and Search Console.'),
        line('Heritage Painting Services', '/en/cases/heritagepainting/', 'Specialist website for a Sydney heritage painter: a landing page for each heritage service, with Google Analytics and Search Console.'),
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
        ...MKT.flatMap((m) => [
          line(`${m.en.cardTitle} (English)`, mktHref('en', m.en), m.en.cardBlurb),
          line(`${m.es.cardTitle} (español)`, mktHref('es', m.es), m.es.cardBlurb),
        ]),
        line('She Loves Pink', '/en/cases/shelovespink/', 'Website redesign for a Sydney beauty salon.'),
        line('Saludamente', '/en/cases/saludamente/', 'Website for a mental health centre in Chile with a fully self-managed admin console.'),
        line('Heritage Painting Services', '/en/cases/heritagepainting/', 'Specialist website for a Sydney heritage painter, with SEO landing pages.'),
        line('Bondi Painters', '/en/cases/bondipainters/', 'Local SEO website for a Sydney painter, with a landing page for each suburb.'),
        line('Docomomo', '/en/cases/docomomo/', 'Website for an international architecture conference.'),
        line('One Health', '/en/cases/one-health/', 'Science communication article for UC Chile.'),
        line('UC Chile graphics', '/en/cases/uc-graficas/', 'Campaign graphics for innovation and education programs.'),
        '',
      ].join('\n');
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
