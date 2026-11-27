// Textos de la portada nueva de pablokohler.com (build principal). El build AU conserva su portada anterior.
// Solo hechos que ya existen en el sitio: sin testimonios, cifras ni logos nuevos.
export const HOME_EMAIL = 'hola@pablokohler.com';
export const HOME_COPYRIGHT = '© 2026 Pablo Kohler';

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

/** Logo de un cliente. `href` = sitio real; `internal` = caso de estudio propio cuando no hay sitio que enlazar. */
export interface HomeLogo {
  name: string;
  logo: string;
  href?: string;
  internal?: Record<HomeLang, string>;
}

// Solo se enlazan URLs verificadas (respondieron con el sitio correcto el 2026-11-26).
// docomomoconference2024.com ya no sirve el sitio del congreso (redirige a otro dominio): no enlazar.
export const LOGOS: HomeLogo[] = [
  { name: 'Vetro Chile', logo: '/logos/vetro-chile.png', href: 'https://vetrochile.cl' },
  { name: 'Rangitaki', logo: '/logos/rangitaki.png', href: 'https://rangitaki.com' },
  { name: 'Proyecto Alquimia', logo: '/logos/alquimia.png', href: 'https://proyectoalquimia.cl' },
  { name: 'Fundación Huella Animal', logo: '/logos/huella-animal.png', href: 'https://fundacionhuellaanimal.cl' },
  { name: 'UC Chile', logo: '/logos/uc.png', internal: { es: '/es/casos/uc-graficas/', en: '/en/cases/uc-graficas/' } },
  { name: 'Docomomo', logo: '/logos/docomomo.png', internal: { es: '/es/casos/docomomo/', en: '/en/cases/docomomo/' } },
  { name: 'She Loves Pink', logo: '/logos/she-loves-pink.png', href: 'https://shelovespink.com.au' },
];

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
  mag: { prev: string; next: string; region: string; of: string; logosOpen: string };
  about: {
    headline: string;
    headlineAccent: string;
    paragraphs: [string, string, string];
    facts: { n: string; l: string }[];
    cta: string;
  };
  close: { pre: string; mark: string; post: string; sub: string; button: string };
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
    servicesNote: 'Soluciones para cada etapa de tu **travesía digital**.',
    serviceLink: 'Escríbeme sobre esto',
    alsoLabel: 'Ver también:',
    casesHeading: { lead: 'Proyectos', accent: 'realizados' },
    casesIntro: '',
    mag: { prev: 'Proyecto anterior', next: 'Proyecto siguiente', region: 'Proyectos', of: 'de', logosOpen: 'abre el sitio web' },
    about: {
      headline: 'Hola.',
      headlineAccent: "G'day.",
      paragraphs: [
        'Soy Consultor de Experiencia Digital y Managing Partner de la Agencia Digital <a href="https://dembu.cl" target="_blank" rel="noopener">Dembú</a>. Durante más de 9 años he ayudado a universidades, investigadores y organizaciones, primero en Chile y Latinoamérica y ahora también en Australia, a convertir lo que quieren comunicar en resultados que se pueden medir.',
        'No me quedo en el plan: **también lo construyo**. Mi trabajo une estrategia de comunicación, diseño, automatización y desarrollo web, para que el mensaje y la tecnología que lo sostiene vayan juntos.',
        'Lo que me mueve es el **propósito**: me comprometo especialmente con organizaciones que trabajan en ciencia, educación, bienestar animal e impacto basado en evidencia.',
      ],
      facts: [],
      cta: 'Escríbeme →',
    },
    close: { pre: 'Cuéntame qué sueño ', mark: 'digital', post: ' quieres construir.', sub: 'Cuéntame en qué andas.', button: 'Escríbeme' },
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
    servicesNote: 'Solutions for every stage of your **digital journey**.',
    serviceLink: 'Write to me about this',
    alsoLabel: 'See also:',
    casesHeading: { lead: 'Completed', accent: 'projects' },
    casesIntro: '',
    mag: { prev: 'Previous project', next: 'Next project', region: 'Projects', of: 'of', logosOpen: 'opens the website' },
    about: {
      headline: 'Hello.',
      headlineAccent: "G'day.",
      paragraphs: [
        'I’m a Digital Experience Consultant and Managing Partner at the digital agency <a href="https://dembu.cl" target="_blank" rel="noopener">Dembú</a>. For more than 9 years I’ve helped universities, researchers and organisations, first across Chile and Latin America and now in Australia too, turn what they want to communicate into results they can measure.',
        'I don’t stop at the plan: **I build it too**. My work brings together communications strategy, design, automation and web development, so the message and the technology behind it move together.',
        'What drives me is **purpose**: I’m especially committed to organisations working in science, education, animal welfare and evidence-based impact.',
      ],
      facts: [],
      cta: 'Write to me →',
    },
    close: { pre: 'Tell me which ', mark: 'digital', post: ' dream you want to build.', sub: 'Tell me what you’re working on.', button: 'Write to me' },
  },
};

/** Portada del sitio .com.au: el mismo diseño y los mismos servicios, en inglés y con la ubicación. */
export const HOME_AU: HomeCopy = {
  ...HOME.en,
  about: {
    ...HOME.en.about,
    paragraphs: [
      'I’m a Digital Experience Consultant based in Tasmania and Managing Partner at the digital agency <a href="https://dembu.cl" target="_blank" rel="noopener">Dembú</a>. For more than 9 years I’ve helped universities, researchers and organisations turn what they want to communicate into results they can measure.',
      HOME.en.about.paragraphs[1],
      HOME.en.about.paragraphs[2],
    ],
  },
};

export const mailto = (subject: string) => `mailto:${HOME_EMAIL}?subject=${encodeURIComponent(subject)}`;
