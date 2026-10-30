/**
 * Landing pages de marketing (SEO, Google Ads, redes sociales y Meta Ads) para pablokohler.com (build principal, ES + EN).
 * Misma plantilla que au-marketing.ts, pero SIN precios: cada página termina en una cotización por escrito
 * (decisión del dueño: no fijar una moneda para un público que no es solo australiano).
 * Solo se generan en el build principal; en el build AU las rutas devuelven [].
 * NO agregar testimonios ni cifras de clientes sin respaldo real.
 */
import type { AuService } from './au-services';

export type MktLang = 'es' | 'en';

export interface MktService {
  id: 'seo' | 'google-ads' | 'social';
  en: AuService;
  es: AuService;
}

/** Ruta pública de una página de marketing en el sitio principal. */
export const mktHref = (lang: MktLang, s: AuService) => (lang === 'es' ? `/es/servicios/${s.slug}/` : `/en/services/${s.slug}/`);

export const MKT: MktService[] = [
  // ───────────────────────── SEO ─────────────────────────
  {
    id: 'seo',
    en: {
      slug: 'seo',
      group: 'marketing',
      cardTitle: 'SEO',
      cardBlurb: 'Be found by the right people on Google. Technical fixes, useful pages and measurement, in accounts you own.',
      cardFrom: 'Quote in writing',
      metaTitle: 'SEO Consultant | Local & Organic SEO | Pablo Kohler',
      metaDescription:
        'SEO for organisations and small businesses in Latin America and Australia: technical fixes, local and organic pages, Google Business Profile and Search Console.',
      eyebrow: 'SEO',
      h1: 'SEO that helps the right people',
      h1Accent: 'find you.',
      sub: 'Local and organic SEO for organisations and small businesses. A clear plan, a written quote, and the accounts are yours, so nothing is held hostage.',
      cta: 'Ask for an SEO check',
      problemsTitle: 'Sound familiar?',
      problems: [
        'Your organisation does not show up when people search for what you do',
        'Your website looks fine but nobody finds it',
        'Your Google Business Profile is missing, out of date or not in your name',
        'You do not know which pages bring in enquiries',
        'Someone sold you SEO and you cannot tell what they actually did',
      ],
      stepsTitle: 'How it works',
      steps: [
        { title: 'Free check', desc: 'I look at your site and at how you show up on Google today, and tell you what is holding it back.' },
        { title: 'Plan and quote', desc: 'What I will do, what it costs and what I need from you, in writing, before anything starts.' },
        { title: 'Fix and build', desc: 'Titles, headings, structure, useful pages and your Google Business Profile, with Analytics and Search Console installed.' },
        { title: 'Report', desc: 'A short update in plain language on what changed and what comes next.' },
      ],
      plansTitle: 'Two ways to work together',
      plans: [
        {
          name: 'SEO foundation',
          price: '',
          unit: 'Quote in writing',
          blurb: 'A solid base, done once and done properly.',
          features: [
            'A review of how Google sees your site',
            'Google Business Profile set up or tidied',
            'Page titles, headings and keywords fixed',
            'New or improved pages where they help',
            'Google Analytics and Search Console installed',
          ],
          featured: true,
        },
        {
          name: 'Ongoing SEO',
          price: '',
          unit: 'Quote in writing',
          blurb: 'Keep improving, month after month.',
          features: ['New or improved pages each month', 'Search Console checks and fixes', 'A short report in plain language', 'No lock-in'],
        },
      ],
      plansNote:
        'Every project gets a written quote after a free check. Results depend on competition and on how long your site has existed, so I do not promise rankings. I will tell you what is realistic before you spend anything.',
      faq: [
        {
          q: 'How long until SEO works?',
          a: 'Usually months, not days, and it depends on how many sites compete for the same searches. I cannot guarantee rankings. I can make sure your site is set up properly and that you can measure what is happening.',
        },
        {
          q: 'Have you done this before?',
          a: 'Yes. I built a local SEO website for a Sydney painter with a landing page for each of 44 suburbs, and a niche site for a heritage painter with a page for each service, both with Google Analytics and Search Console. You can read the case studies on this site.',
        },
        {
          q: 'Do I need a website first?',
          a: 'Yes, and it needs to work. If yours needs fixing or rebuilding first, I will tell you before you spend anything on SEO.',
        },
        {
          q: 'Who owns the accounts?',
          a: 'You do: Google Business Profile, Analytics and Search Console. If we stop working together, nothing is taken away.',
        },
      ],
      formTitle: 'Ask for a free SEO check',
      formSub: 'Send your website address and a few words about what you do and where. I will come back with an honest check and a quote.',
      formService: 'SEO',
      askWebsite: true,
      submitLabel: 'Request my free check',
    },
    es: {
      slug: 'seo',
      group: 'marketing',
      cardTitle: 'SEO',
      cardBlurb: 'Que las personas correctas te encuentren en Google. Arreglos técnicos, páginas útiles y medición, en cuentas que son tuyas.',
      cardFrom: 'Cotización por escrito',
      metaTitle: 'Consultor SEO | SEO local y orgánico | Pablo Kohler',
      metaDescription:
        'SEO para organizaciones y pequeños negocios en Chile, Latinoamérica y Australia: arreglos técnicos, páginas locales y orgánicas, Google Business Profile y Search Console.',
      eyebrow: 'SEO',
      h1: 'SEO para que las personas correctas',
      h1Accent: 'te encuentren.',
      sub: 'SEO local y orgánico para organizaciones y pequeños negocios. Un plan claro, una cotización por escrito y cuentas que son tuyas, así que nada queda en rehén.',
      cta: 'Pide una revisión SEO',
      problemsTitle: '¿Te suena?',
      problems: [
        'Tu organización no aparece cuando buscan lo que haces',
        'Tu sitio se ve bien, pero nadie lo encuentra',
        'Tu perfil de Google Business falta, está desactualizado o no está a tu nombre',
        'No sabes qué páginas traen consultas',
        'Alguien te vendió SEO y no puedes saber qué hizo realmente',
      ],
      stepsTitle: 'Cómo funciona',
      steps: [
        { title: 'Revisión gratis', desc: 'Miro tu sitio y cómo apareces hoy en Google, y te cuento qué lo está frenando.' },
        { title: 'Plan y cotización', desc: 'Qué voy a hacer, cuánto cuesta y qué necesito de ti, por escrito, antes de empezar.' },
        { title: 'Arreglar y construir', desc: 'Títulos, encabezados, estructura, páginas útiles y tu perfil de Google Business, con Analytics y Search Console instalados.' },
        { title: 'Informe', desc: 'Una actualización corta, en lenguaje claro, de qué cambió y qué viene.' },
      ],
      plansTitle: 'Dos formas de trabajar juntos',
      plans: [
        {
          name: 'Base SEO',
          price: '',
          unit: 'Cotización por escrito',
          blurb: 'Una base sólida, hecha una vez y bien hecha.',
          features: [
            'Revisión de cómo ve Google tu sitio',
            'Perfil de Google Business creado u ordenado',
            'Títulos, encabezados y palabras clave corregidos',
            'Páginas nuevas o mejoradas donde ayudan',
            'Google Analytics y Search Console instalados',
          ],
          featured: true,
        },
        {
          name: 'SEO continuo',
          price: '',
          unit: 'Cotización por escrito',
          blurb: 'Seguir mejorando, mes a mes.',
          features: ['Páginas nuevas o mejoradas cada mes', 'Revisión y arreglos en Search Console', 'Un informe corto en lenguaje claro', 'Sin amarras'],
        },
      ],
      plansNote:
        'Cada proyecto recibe una cotización por escrito después de una revisión gratis. Los resultados dependen de la competencia y de cuánto tiempo lleva tu sitio, así que no prometo posiciones. Te digo qué es realista antes de que gastes algo.',
      faq: [
        {
          q: '¿Cuánto demora en funcionar el SEO?',
          a: 'Normalmente meses, no días, y depende de cuántos sitios compiten por las mismas búsquedas. No puedo garantizar posiciones. Sí puedo dejar tu sitio bien configurado y que puedas medir qué está pasando.',
        },
        {
          q: '¿Ya lo has hecho antes?',
          a: 'Sí. Construí un sitio de SEO local para un pintor de Sídney, con una página para cada uno de 44 suburbios, y un sitio de nicho para un pintor patrimonial, con una página por servicio, ambos con Google Analytics y Search Console. Puedes leer los casos en este sitio.',
        },
        {
          q: '¿Necesito tener un sitio web antes?',
          a: 'Sí, y tiene que funcionar. Si el tuyo necesita arreglo o reconstrucción primero, te lo digo antes de que gastes algo en SEO.',
        },
        {
          q: '¿Quién es dueño de las cuentas?',
          a: 'Tú: Google Business Profile, Analytics y Search Console. Si dejamos de trabajar juntos, no se te quita nada.',
        },
      ],
      formTitle: 'Pide una revisión SEO gratis',
      formSub: 'Envíame la dirección de tu sitio y unas palabras sobre lo que haces y dónde. Te respondo con una revisión honesta y una cotización.',
      formService: 'SEO',
      askWebsite: true,
      submitLabel: 'Pedir mi revisión gratis',
    },
  },

  // ───────────────────────── Google Ads ─────────────────────────
  {
    id: 'google-ads',
    en: {
      slug: 'google-ads',
      group: 'marketing',
      cardTitle: 'Google Ads',
      cardBlurb: 'Get calls and enquiries sooner. A search campaign set up in your own Google Ads account, with tracking you can read.',
      cardFrom: 'Quote in writing',
      metaTitle: 'Google Ads Management | Campaigns You Own | Pablo Kohler',
      metaDescription:
        'Google Ads for organisations and small businesses in Latin America and Australia: campaigns set up in your own account, with tracked calls and enquiries.',
      eyebrow: 'Google Ads',
      h1: 'Google Ads you can',
      h1Accent: 'actually measure.',
      sub: 'Appear when people search for what you offer, and pay when they click. Campaigns set up in your own account, with tracking so you can see calls and enquiries.',
      cta: 'Ask for an ads check',
      problemsTitle: 'Sound familiar?',
      problems: [
        'You spent money on ads and cannot tell what it brought in',
        'An agency runs your account and you have no access to it',
        'Clicks come in but nobody calls or fills in the form',
        'You are not sure your budget is going to the right searches',
        'You have never tried ads and do not know where to start',
      ],
      stepsTitle: 'How it works',
      steps: [
        { title: 'Free check', desc: 'I look at your site and your market, and tell you honestly whether ads are a good fit.' },
        { title: 'Plan and budget', desc: 'Keywords, areas, a realistic starting budget and what I will track, in writing.' },
        { title: 'Set up and launch', desc: 'The campaign goes live in your own account, with conversion tracking in place.' },
        { title: 'Report and adjust', desc: 'A short update in plain language, and changes where something is not working.' },
      ],
      plansTitle: 'Two ways to work together',
      plans: [
        {
          name: 'Campaign setup',
          price: '',
          unit: 'Quote in writing',
          blurb: 'A search campaign, set up and ready to run.',
          features: [
            'Keywords, ad text and location targeting',
            'Conversion tracking, so you can see calls and enquiries',
            'The ad account is in your name',
            'The ad budget is separate and paid straight to Google',
          ],
          featured: true,
        },
        {
          name: 'Ads management',
          price: '',
          unit: 'Quote in writing',
          blurb: 'Someone keeping an eye on it.',
          features: ['Ongoing keyword and budget checks', 'Changes when something is not working', 'A short report in plain language', 'Ad budget not included'],
        },
      ],
      plansNote:
        'Every project gets a written quote after a free check. The ad budget is separate and paid straight to Google from your account. I do not promise a number of enquiries: it depends on your market and your website.',
      faq: [
        {
          q: 'How much should I spend on ads?',
          a: 'It depends on how many people search for what you offer and what a click costs in your market. I give you a realistic starting budget in the plan. You can start small and adjust.',
        },
        {
          q: 'Do I pay Google directly?',
          a: 'Yes. The ad budget goes straight from your account to Google. I never hold your money, and the ad account is in your name.',
        },
        {
          q: 'Does my website need to be good?',
          a: 'It needs to work well on a phone and make it easy to call or enquire. If it does not, I will tell you before you spend anything on ads.',
        },
        {
          q: 'How soon will I see results?',
          a: 'Ads can start bringing visits within days, but they usually need tuning. I cannot promise a number of enquiries, and I will report honestly on what happens.',
        },
      ],
      formTitle: 'Ask for a free ads check',
      formSub: 'Send your website address and a few words about what you offer and where. I will come back with an honest check and a quote.',
      formService: 'Google Ads',
      askWebsite: true,
      submitLabel: 'Request my free check',
    },
    es: {
      slug: 'google-ads',
      group: 'marketing',
      cardTitle: 'Google Ads',
      cardBlurb: 'Consigue llamadas y consultas más rápido. Una campaña de búsqueda en tu propia cuenta de Google Ads, con medición que puedes leer.',
      cardFrom: 'Cotización por escrito',
      metaTitle: 'Gestión de Google Ads | Campañas que son tuyas | Pablo Kohler',
      metaDescription:
        'Google Ads para organizaciones y pequeños negocios en Chile, Latinoamérica y Australia: campañas en tu propia cuenta, con llamadas y consultas medidas.',
      eyebrow: 'Google Ads',
      h1: 'Google Ads que puedes',
      h1Accent: 'medir de verdad.',
      sub: 'Aparece cuando buscan lo que ofreces y paga cuando hacen clic. Campañas en tu propia cuenta, con medición para que veas llamadas y consultas.',
      cta: 'Pide una revisión de anuncios',
      problemsTitle: '¿Te suena?',
      problems: [
        'Gastaste en anuncios y no sabes qué trajeron',
        'Una agencia maneja tu cuenta y tú no tienes acceso',
        'Llegan clics, pero nadie llama ni llena el formulario',
        'No estás seguro de que tu presupuesto vaya a las búsquedas correctas',
        'Nunca has probado anuncios y no sabes por dónde partir',
      ],
      stepsTitle: 'Cómo funciona',
      steps: [
        { title: 'Revisión gratis', desc: 'Miro tu sitio y tu mercado, y te digo con honestidad si los anuncios te convienen.' },
        { title: 'Plan y presupuesto', desc: 'Palabras clave, zonas, un presupuesto inicial realista y qué voy a medir, por escrito.' },
        { title: 'Armado y lanzamiento', desc: 'La campaña sale en tu propia cuenta, con seguimiento de conversiones listo.' },
        { title: 'Informe y ajustes', desc: 'Una actualización corta en lenguaje claro y cambios donde algo no funcione.' },
      ],
      plansTitle: 'Dos formas de trabajar juntos',
      plans: [
        {
          name: 'Armado de campaña',
          price: '',
          unit: 'Cotización por escrito',
          blurb: 'Una campaña de búsqueda, armada y lista para correr.',
          features: [
            'Palabras clave, textos de anuncio y segmentación por zona',
            'Seguimiento de conversiones, para ver llamadas y consultas',
            'La cuenta de anuncios queda a tu nombre',
            'El presupuesto de anuncios va aparte y se paga directo a Google',
          ],
          featured: true,
        },
        {
          name: 'Gestión de anuncios',
          price: '',
          unit: 'Cotización por escrito',
          blurb: 'Alguien que la mira de cerca.',
          features: ['Revisión continua de palabras clave y presupuesto', 'Cambios cuando algo no funciona', 'Un informe corto en lenguaje claro', 'El presupuesto de anuncios no está incluido'],
        },
      ],
      plansNote:
        'Cada proyecto recibe una cotización por escrito después de una revisión gratis. El presupuesto de anuncios va aparte y se paga directo a Google desde tu cuenta. No prometo un número de consultas: depende de tu mercado y de tu sitio.',
      faq: [
        {
          q: '¿Cuánto debería gastar en anuncios?',
          a: 'Depende de cuánta gente busca lo que ofreces y de cuánto cuesta un clic en tu mercado. Te doy un presupuesto inicial realista en el plan. Puedes partir chico y ajustar.',
        },
        {
          q: '¿Le pago a Google directamente?',
          a: 'Sí. El presupuesto va directo de tu cuenta a Google. Yo nunca manejo tu plata y la cuenta de anuncios queda a tu nombre.',
        },
        {
          q: '¿Mi sitio web tiene que estar bien?',
          a: 'Tiene que funcionar bien en el celular y hacer fácil llamar o consultar. Si no es así, te lo digo antes de que gastes algo en anuncios.',
        },
        {
          q: '¿Cuándo veré resultados?',
          a: 'Los anuncios pueden traer visitas en días, pero normalmente necesitan ajustes. No puedo prometer un número de consultas y te informo con honestidad lo que pase.',
        },
      ],
      formTitle: 'Pide una revisión de anuncios gratis',
      formSub: 'Envíame la dirección de tu sitio y unas palabras sobre lo que ofreces y dónde. Te respondo con una revisión honesta y una cotización.',
      formService: 'Google Ads',
      askWebsite: true,
      submitLabel: 'Pedir mi revisión gratis',
    },
  },

  // ───────────────────────── Redes sociales y Meta Ads ─────────────────────────
  {
    id: 'social',
    en: {
      slug: 'social-media-ads',
      group: 'marketing',
      cardTitle: 'Social media & Meta Ads',
      cardBlurb: 'Facebook and Instagram set up properly, with ads that bring in enquiries. Accounts in your name.',
      cardFrom: 'Quote in writing',
      metaTitle: 'Social Media Setup & Meta Ads | Facebook, Instagram | Pablo Kohler',
      metaDescription:
        'Facebook and Instagram setup and Meta Ads for organisations and small businesses in Latin America and Australia. Accounts in your name, tracked enquiries.',
      eyebrow: 'Social media & Meta Ads',
      h1: 'Social media and Meta Ads that',
      h1Accent: 'bring enquiries.',
      sub: 'Your Facebook and Instagram accounts set up properly and, if you want, ads that reach people by area and interest. Accounts in your name and reports in plain language.',
      cta: 'Ask for a social check',
      problemsTitle: 'Sound familiar?',
      problems: [
        'Your Facebook page or Instagram profile is only half set up',
        'Nobody has the admin login for your business page',
        'You boosted posts and are not sure it did anything',
        'You want ads but not an agency retainer',
        'Your website cannot tell which ads bring in enquiries',
      ],
      stepsTitle: 'How it works',
      steps: [
        { title: 'Free check', desc: 'I look at your accounts and your site, and tell you honestly whether ads are a good fit.' },
        { title: 'Plan and quote', desc: 'What I will set up, what it costs and what I need from you, in writing, before anything starts.' },
        { title: 'Set up and launch', desc: 'Accounts in your name, tracking installed on your site, and the first campaign live.' },
        { title: 'Report', desc: 'A short update in plain language on what happened and what to change.' },
      ],
      plansTitle: 'Set up, design and ads',
      plans: [
        {
          name: 'Social setup',
          price: '',
          unit: 'Quote in writing',
          blurb: 'Facebook and Instagram, set up the right way.',
          features: [
            'Facebook page and Instagram profile set up or tidied',
            'Business accounts in your name',
            'Tracking on your website, so you can see what ads bring in',
            'Handover and password manager setup',
          ],
        },
        {
          name: 'Meta Ads campaign',
          price: '',
          unit: 'Quote in writing',
          blurb: 'A campaign, set up and ready to run.',
          features: [
            'Audience, location and ad text',
            'Designs for your ads, from your photos and logo',
            'The ad account is in your name',
            'The ad budget is separate and paid straight to Meta',
          ],
          featured: true,
        },
        {
          name: 'Ads management',
          price: '',
          unit: 'Quote in writing',
          blurb: 'Someone keeping an eye on it.',
          features: ['Ongoing audience and budget checks', 'Changes when something is not working', 'A short report in plain language', 'Ad budget not included'],
        },
      ],
      plansNote:
        'Every project gets a written quote after a free check. The ad budget is separate and paid straight to Meta. This covers setup and paid ads, not day-to-day posting. Results depend on your market, so I do not promise a number of enquiries.',
      faq: [
        {
          q: 'Do you post for me every day?',
          a: 'No. This service covers setting up your accounts and running paid campaigns. It does not include day-to-day posting.',
        },
        {
          q: 'Who pays Meta?',
          a: 'You do, straight from your own account. The ad budget is separate from my fee, and I never hold your money.',
        },
        {
          q: 'Will ads work for my business?',
          a: 'It depends on what you offer and who your customers are. The free check includes an honest answer, and if I think ads are not a good fit, I will say so.',
        },
        {
          q: 'Who owns the accounts?',
          a: 'You do. If we stop working together, your pages, ad accounts and audiences stay with you.',
        },
      ],
      formTitle: 'Ask for a free social check',
      formSub: 'Send your website or Facebook page and a few words about what you offer and where. I will come back with an honest check and a quote.',
      formService: 'Social media and Meta Ads',
      askWebsite: true,
      submitLabel: 'Request my free check',
    },
    es: {
      slug: 'redes-sociales-meta-ads',
      group: 'marketing',
      cardTitle: 'Redes sociales y Meta Ads',
      cardBlurb: 'Facebook e Instagram bien armados, con anuncios que traen consultas. Cuentas a tu nombre.',
      cardFrom: 'Cotización por escrito',
      metaTitle: 'Redes Sociales y Meta Ads | Facebook e Instagram | Pablo Kohler',
      metaDescription:
        'Configuración de Facebook e Instagram y Meta Ads para organizaciones y pequeños negocios en Chile, Latinoamérica y Australia. Cuentas a tu nombre, consultas medidas.',
      eyebrow: 'Redes sociales y Meta Ads',
      h1: 'Redes sociales y Meta Ads que',
      h1Accent: 'traen consultas.',
      sub: 'Tus cuentas de Facebook e Instagram bien armadas y, si quieres, anuncios que llegan a las personas por zona e interés. Cuentas a tu nombre e informes en lenguaje claro.',
      cta: 'Pide una revisión de redes',
      problemsTitle: '¿Te suena?',
      problems: [
        'Tu página de Facebook o tu perfil de Instagram están a medio armar',
        'Nadie tiene el acceso de administrador de la página de tu negocio',
        'Impulsaste publicaciones y no sabes si sirvió',
        'Quieres anuncios, pero no un contrato con una agencia',
        'Tu sitio no puede saber qué anuncios traen consultas',
      ],
      stepsTitle: 'Cómo funciona',
      steps: [
        { title: 'Revisión gratis', desc: 'Miro tus cuentas y tu sitio, y te digo con honestidad si los anuncios te convienen.' },
        { title: 'Plan y cotización', desc: 'Qué voy a armar, cuánto cuesta y qué necesito de ti, por escrito, antes de empezar.' },
        { title: 'Armado y lanzamiento', desc: 'Cuentas a tu nombre, seguimiento instalado en tu sitio y la primera campaña en marcha.' },
        { title: 'Informe', desc: 'Una actualización corta en lenguaje claro de qué pasó y qué cambiar.' },
      ],
      plansTitle: 'Armado, diseño y anuncios',
      plans: [
        {
          name: 'Armado de redes',
          price: '',
          unit: 'Cotización por escrito',
          blurb: 'Facebook e Instagram, armados como corresponde.',
          features: [
            'Página de Facebook y perfil de Instagram creados u ordenados',
            'Cuentas de negocio a tu nombre',
            'Seguimiento en tu sitio, para ver qué traen los anuncios',
            'Entrega y gestor de contraseñas',
          ],
        },
        {
          name: 'Campaña de Meta Ads',
          price: '',
          unit: 'Cotización por escrito',
          blurb: 'Una campaña, armada y lista para correr.',
          features: [
            'Audiencia, zona y textos de anuncio',
            'Diseños para tus anuncios, con tus fotos y tu logo',
            'La cuenta de anuncios queda a tu nombre',
            'El presupuesto de anuncios va aparte y se paga directo a Meta',
          ],
          featured: true,
        },
        {
          name: 'Gestión de anuncios',
          price: '',
          unit: 'Cotización por escrito',
          blurb: 'Alguien que la mira de cerca.',
          features: ['Revisión continua de audiencias y presupuesto', 'Cambios cuando algo no funciona', 'Un informe corto en lenguaje claro', 'El presupuesto de anuncios no está incluido'],
        },
      ],
      plansNote:
        'Cada proyecto recibe una cotización por escrito después de una revisión gratis. El presupuesto de anuncios va aparte y se paga directo a Meta. Esto cubre el armado y los anuncios pagados, no la publicación diaria. Los resultados dependen de tu mercado, así que no prometo un número de consultas.',
      faq: [
        {
          q: '¿Publicas por mí todos los días?',
          a: 'No. Este servicio cubre armar tus cuentas y correr campañas pagadas. No incluye la publicación del día a día.',
        },
        {
          q: '¿Quién le paga a Meta?',
          a: 'Tú, directo desde tu propia cuenta. El presupuesto de anuncios va aparte de mi tarifa y yo nunca manejo tu plata.',
        },
        {
          q: '¿Van a funcionar los anuncios para mi negocio?',
          a: 'Depende de lo que ofreces y de quiénes son tus clientes. La revisión gratis incluye una respuesta honesta, y si creo que los anuncios no te convienen, te lo digo.',
        },
        {
          q: '¿Quién es dueño de las cuentas?',
          a: 'Tú. Si dejamos de trabajar juntos, tus páginas, cuentas de anuncios y audiencias se quedan contigo.',
        },
      ],
      formTitle: 'Pide una revisión de redes gratis',
      formSub: 'Envíame tu sitio o tu página de Facebook y unas palabras sobre lo que ofreces y dónde. Te respondo con una revisión honesta y una cotización.',
      formService: 'Redes sociales y Meta Ads',
      askWebsite: true,
      submitLabel: 'Pedir mi revisión gratis',
    },
  },
];
