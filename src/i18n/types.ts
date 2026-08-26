// Forma compartida de los diccionarios de UI. es.ts y en.ts deben cumplirla
// (con `satisfies UiDictionary`) para que TypeScript avise si falta una clave al traducir.
export interface UiDictionary {
  nav: {
    work: string;
    services: string;
    about: string;
    blog: string;
    contact: string;
    langLabel: string;
    menuOpen: string;
    menuClose: string;
  };
  hero: {
    headline: string;
    headlineAccent: string;
    sub: string;
    ctaPrimary: string;
  };
  trust: {
    label: string;
  };
  caps: {
    headline: string;
    headlineAccent: string;
    intro: string;
    cards: [
      { num: string; title: string; lead: string; desc: string; list: [string, string, string] },
      { num: string; title: string; lead: string; desc: string; list: [string, string, string] },
      { num: string; title: string; lead: string; desc: string; list: [string, string, string] },
    ];
    footText: string;
    footLink: string;
  };
  formats: {
    headline: string;
    headlineAccent: string;
    intro: string;
    tags: string[];
  };
  cases: {
    headline: string;
    headlineAccent: string;
    intro: string;
    viewCase: string;
    more: string;
  };
  about: {
    headline: string;
    headlineAccent: string;
    paragraphs: [string, string, string];
    facts: [{ n: string; l: string }, { n: string; l: string }, { n: string; l: string }];
    photoNote: string;
    cta: string;
  };
  contact: {
    headline: string;
    headlineAccent: string;
    sub: string;
    form: {
      name: string;
      namePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      message: string;
      messagePlaceholder: string;
      submit: string;
      note: string;
      sending: string;
      success: string;
      error: string;
      notConfigured: string;
    };
    directLabel: string;
    calendlyTitle: string;
    calendlySub: string;
    linkedinTitle: string;
    linkedinSub: string;
    footerCopy: string;
  };
  blogPage: {
    heading: string;
    empty: string;
  };
  caseDetail: {
    back: string;
    nextCase: string;
    coverNote: string;
    metricLabel: string;
    metaClient: string;
    metaYear: string;
    metaRole: string;
    metaScope: string;
  };
}
