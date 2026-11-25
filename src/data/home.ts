// Textos de la portada nueva de pablokohler.com (build principal). El build AU conserva su portada anterior.
// Solo hechos que ya existen en el sitio: sin testimonios, cifras ni logos nuevos.
export const HOME_EMAIL = 'hola@pablokohler.com';

export type HomeLang = 'es' | 'en';

/** Frase del titular: `pre` + palabra resaltada + `post`. */
export interface HomePhrase {
  pre: string;
  mark: string;
  post: string;
}

export interface HomeService {
  /** Etiqueta del chip de la portada. */
  chip: string;
  /** Cómo termina el lema cuando se elige este servicio. */
  phrase: HomePhrase;
  title: string;
  line: string;
  subject: string;
}

export interface HomeCopy {
  metaTitle: string;
  metaDescription: string;
  /** Estado inicial: el lema completo. */
  lema: HomePhrase;
  sub: string;
  subject: string;
  pickLabel: string;
  cta: string;
  services: [HomeService, HomeService, HomeService, HomeService];
  servicesHeading: { lead: string; accent: string };
  servicesNote: string;
  serviceLink: string;
  alsoLabel: string;
  casesHeading: { lead: string; accent: string };
  casesIntro: string;
  about: {
    headline: string;
    headlineAccent: string;
    paragraphs: [string, string, string];
    facts: { n: string; l: string }[];
    cta: string;
  };
  close: { pre: string; mark: string; post: string; button: string };
}

export const HOME: Record<HomeLang, HomeCopy> = {
  es: {
    metaTitle: 'Pablo Kohler | Consultor de Experiencia Digital',
    metaDescription:
      'Asesoría comunicacional, diseño web y de productos digitales, automatización de procesos y optimización de conversión. Construyamos tus sueños digitales.',
    lema: { pre: 'Construyamos tus sueños ', mark: 'digitales', post: '.' },
    sub: 'Soy Pablo Kohler, Consultor de Experiencia Digital. Te ayudo a ordenar lo que comunicas, diseñar y construir tus productos digitales, automatizar lo repetitivo y convertir más visitas en clientes.',
    subject: 'Construyamos algo juntos',
    pickLabel: '¿Qué quieres construir?',
    cta: 'Escríbeme',
    services: [
      {
        chip: 'Comunicación',
        phrase: { pre: 'Construyamos tu ', mark: 'estrategia de comunicación', post: '.' },
        title: 'Asesoría comunicacional',
        line: 'Estrategia, contenidos y un plan que tu equipo pueda ejecutar.',
        subject: 'Quiero conversar sobre asesoría comunicacional',
      },
      {
        chip: 'Diseño',
        phrase: { pre: 'Construyamos tu ', mark: 'producto digital', post: '.' },
        title: 'Diseño web y de productos digitales',
        line: 'Sitios, tiendas, landing pages y herramientas a medida.',
        subject: 'Quiero conversar sobre diseño web y de productos digitales',
      },
      {
        chip: 'Automatización',
        phrase: { pre: 'Construyamos tu ', mark: 'automatización', post: '.' },
        title: 'Automatización de procesos',
        line: 'Formularios, informes e integraciones entre tus sistemas.',
        subject: 'Quiero conversar sobre automatización de procesos',
      },
      {
        chip: 'Conversión',
        phrase: { pre: 'Construyamos más ', mark: 'conversiones', post: '.' },
        title: 'Optimización de conversión',
        line: 'SEO, campañas y pruebas para mejorar resultados.',
        subject: 'Quiero conversar sobre optimización de conversión',
      },
    ],
    servicesHeading: { lead: 'Cómo puedo', accent: 'ayudarte' },
    servicesNote: 'Comunicación, diseño, automatización y conversión trabajando juntas, y todo (dominios, cuentas y accesos) queda a tu nombre.',
    serviceLink: 'Escríbeme sobre esto',
    alsoLabel: 'Ver también:',
    casesHeading: { lead: 'Proyectos donde estrategia y ejecución vivieron', accent: 'juntas.' },
    casesIntro: 'Una muestra de lo que hago.',
    about: {
      headline: 'Hola.',
      headlineAccent: "G'day.",
      paragraphs: [
        'Soy Consultor de Experiencia Digital y vivo en Tasmania. Durante más de 9 años he ayudado a universidades, fundadores académicos y organizaciones, primero en Chile y Latinoamérica y ahora también en Australia, a convertir lo que quieren comunicar en resultados que se pueden medir.',
        'No me quedo en el plan: **también lo construyo**. Mi trabajo une estrategia de comunicación, diseño, automatización y desarrollo web, para que el mensaje y la tecnología que lo sostiene vayan juntos.',
        'Lo que me mueve es el **propósito**: me comprometo especialmente con organizaciones que trabajan en ciencia, educación, bienestar animal e impacto basado en evidencia.',
      ],
      facts: [
        { n: 'ES/EN', l: 'bilingüe' },
        { n: 'TAS', l: 'Tasmania, Australia' },
      ],
      cta: 'Escríbeme →',
    },
    close: { pre: 'Cuéntame qué sueño ', mark: 'digital', post: ' quieres construir.', button: 'Escríbeme' },
  },
  en: {
    metaTitle: 'Pablo Kohler | Digital Experience Consultant',
    metaDescription:
      'Communications consulting, web and digital product design, process automation and conversion optimisation. Let’s build your digital dreams.',
    lema: { pre: 'Let’s build your digital ', mark: 'dreams', post: '.' },
    sub: 'I’m Pablo Kohler, a Digital Experience Consultant. I help you sort out what you communicate, design and build your digital products, automate the repetitive work and turn more visitors into clients.',
    subject: 'Let’s build something together',
    pickLabel: 'What do you want to build?',
    cta: 'Write to me',
    services: [
      {
        chip: 'Communications',
        phrase: { pre: 'Let’s build your ', mark: 'communications strategy', post: '.' },
        title: 'Communications consulting',
        line: 'Strategy, content and a plan your team can carry out.',
        subject: 'I’d like to talk about communications consulting',
      },
      {
        chip: 'Design',
        phrase: { pre: 'Let’s build your ', mark: 'digital product', post: '.' },
        title: 'Web and digital product design',
        line: 'Websites, online stores, landing pages and custom tools.',
        subject: 'I’d like to talk about web and digital product design',
      },
      {
        chip: 'Automation',
        phrase: { pre: 'Let’s build your ', mark: 'automation', post: '.' },
        title: 'Process automation',
        line: 'Forms, reports and integrations between your systems.',
        subject: 'I’d like to talk about process automation',
      },
      {
        chip: 'Conversion',
        phrase: { pre: 'Let’s build more ', mark: 'conversions', post: '.' },
        title: 'Conversion optimisation',
        line: 'SEO, campaigns and tests to improve results.',
        subject: 'I’d like to talk about conversion optimisation',
      },
    ],
    servicesHeading: { lead: 'How I can', accent: 'help you' },
    servicesNote: 'Communications, design, automation and conversion working together, with everything (domains, accounts and logins) in your name.',
    serviceLink: 'Write to me about this',
    alsoLabel: 'See also:',
    casesHeading: { lead: 'Projects where strategy and execution lived', accent: 'together.' },
    casesIntro: 'A sample of what I do.',
    about: {
      headline: 'Hello.',
      headlineAccent: "G'day.",
      paragraphs: [
        'I’m a Digital Experience Consultant based in Tasmania. For more than 9 years I’ve helped universities, academic founders and organisations, first across Chile and Latin America and now in Australia too, turn what they want to communicate into results they can measure.',
        'I don’t stop at the plan: **I build it too**. My work brings together communications strategy, design, automation and web development, so the message and the technology behind it move together.',
        'What drives me is **purpose**: I’m especially committed to organisations working in science, education, animal welfare and evidence-based impact.',
      ],
      facts: [
        { n: 'ES/EN', l: 'bilingual' },
        { n: 'TAS', l: 'Tasmania, Australia' },
      ],
      cta: 'Write to me →',
    },
    close: { pre: 'Tell me which ', mark: 'digital', post: ' dream you want to build.', button: 'Write to me' },
  },
};

export const mailto = (subject: string) => `mailto:${HOME_EMAIL}?subject=${encodeURIComponent(subject)}`;
