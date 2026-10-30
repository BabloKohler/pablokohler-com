import type { AuService } from './au-services';

/**
 * Nodos JSON-LD de una landing de servicio: el servicio (con el proveedor ya definido en BaseLayout) y sus preguntas.
 * Sin precios ni valoraciones: solo datos que existen en la página.
 * @param site `String(Astro.site)`, con barra final: coincide con el @id de la persona en BaseLayout.
 */
export function serviceGraph(s: AuService, url: string, site: string, areaServed: object[]): object[] {
  return [
    {
      '@type': 'Service',
      '@id': `${url}#service`,
      name: s.cardTitle,
      serviceType: s.cardTitle,
      description: s.metaDescription,
      url,
      provider: { '@id': `${site}#pablo-kohler` },
      areaServed,
    },
    {
      '@type': 'FAQPage',
      mainEntity: s.faq.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ];
}
