/**
 * Landing pages de servicios para pablokohler.com.au (solo build AU, inglés).
 * Precios en AUD, "desde" = punto de partida; el alcance final se cotiza tras la auditoría.
 * NO agregar testimonios ni cifras de clientes sin respaldo real.
 */

export interface Plan {
  name: string;
  price: string;
  unit?: string;
  blurb: string;
  features: string[];
  featured?: boolean;
}

export interface AuService {
  slug: string;
  /** 'rescue' = landing para quienes ya tienen sitio y no lo controlan (src/data/au-rescue.ts). */
  group?: 'rescue' | 'marketing';
  /** Texto corto para la lista de servicios del home y los links entre páginas. */
  cardTitle: string;
  cardBlurb: string;
  cardFrom: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  h1Accent: string;
  sub: string;
  cta: string;
  problemsTitle: string;
  problems: string[];
  stepsTitle: string;
  steps: { title: string; desc: string }[];
  plansTitle: string;
  plans: Plan[];
  plansNote: string;
  faq: { q: string; a: string }[];
  formTitle: string;
  formSub: string;
  /** Valor que viaja en el campo oculto "service" del formulario. */
  formService: string;
  askWebsite: boolean;
  submitLabel: string;
}

export const AU_SERVICES: AuService[] = [
  {
    slug: 'website-redesign',
    cardTitle: 'Website redesign',
    cardBlurb: 'Your site looks dated, runs slowly or does not bring in enquiries. Same business, a site that works.',
    cardFrom: 'from A$1,200',
    metaTitle: 'Website Redesign for Small Business | Sydney & Australia | Pablo Kohler',
    metaDescription:
      'Website refresh and redesign for Sydney and Australian small businesses. Modern, fast, mobile-friendly, and built to keep the Google rankings you already have. Refresh from A$1,200, redesign from A$2,000.',
    eyebrow: 'Website redesign',
    h1: 'Website redesign for',
    h1Accent: 'Sydney small businesses.',
    sub: 'A refresh or full redesign that looks current, loads fast on a phone and keeps the Google rankings you have already earned. Clear scope, clear price, no jargon.',
    cta: 'Get a free website audit',
    problemsTitle: 'Sound familiar?',
    problems: [
      'It looks dated next to your competitors',
      'It is slow, or hard to use on a phone',
      'You cannot change anything without calling someone',
      'It does not bring in enquiries',
      'You are not sure who owns the login, the domain or the hosting',
    ],
    stepsTitle: 'How it works',
    steps: [
      { title: 'Free audit', desc: 'I review your current site and tell you honestly what is worth keeping and what is not.' },
      { title: 'Scope and quote', desc: 'You get a written scope and a price before anything starts.' },
      { title: 'Rebuild', desc: 'New design, with your old pages redirected so you do not lose the search rankings you already have.' },
      { title: 'Handover', desc: 'You get the logins, a walkthrough on how to make simple edits, and the option of a care plan afterwards.' },
    ],
    plansTitle: 'Two ways to start',
    plans: [
      {
        name: 'Website Refresh',
        price: 'A$1,200',
        unit: 'from',
        blurb: 'Same pages and content, a much better look and feel.',
        features: ['Up to 5 pages', 'Modern design on your existing content', 'Mobile and speed fixes', 'Basic on-page SEO tidy-up'],
      },
      {
        name: 'Website Redesign',
        price: 'A$2,000',
        unit: 'from',
        blurb: 'A rethink of structure and message, not just the paint.',
        features: [
          'Up to 10 pages',
          'New structure and page layouts',
          'Redirects so existing rankings are protected',
          'Copy tidy-up and clearer calls to action',
        ],
        featured: true,
      },
    ],
    plansNote: 'Prices in AUD. Final quote after a free audit, depending on pages, integrations and content.',
    faq: [
      {
        q: 'Will I lose my Google rankings?',
        a: 'The aim is the opposite. Existing pages are mapped to the new ones and redirected, and I check the basics (titles, headings, indexing) before and after launch.',
      },
      {
        q: 'What platform will the new site use?',
        a: 'It depends on what suits you. We will talk it through in the audit. The goal is a site you can actually manage, not one that locks you in.',
      },
      {
        q: 'How long does it take?',
        a: 'A refresh is usually quicker than a full redesign. I will give you a timeline in the written quote, based on how quickly content and feedback come back.',
      },
    ],
    formTitle: 'Start with a free audit',
    formSub: 'Tell me about your site and I will come back with an honest assessment and a quote.',
    formService: 'Website redesign',
    askWebsite: true,
    submitLabel: 'Request my free audit',
  },
  {
    slug: 'website-care-plans',
    cardTitle: 'Website care plans',
    cardBlurb: 'You have a site but no idea how to look after it. Updates, backups and edits, handled monthly.',
    cardFrom: 'from A$120 / month',
    metaTitle: 'Website Care Plans & Maintenance | Sydney & Australia | Pablo Kohler',
    metaDescription:
      'Monthly website care for Sydney and Australian small businesses: updates, backups, security and edits handled for you. Plans from A$120 per month.',
    eyebrow: 'Website care plans',
    h1: 'Website care plans for',
    h1Accent: 'Sydney small businesses.',
    sub: 'Updates, backups, security checks and small edits handled every month, so your site stays fast, safe and current without you having to figure it out.',
    cta: 'Ask about a care plan',
    problemsTitle: 'Common problems I take off your plate',
    problems: [
      'Software and plugins are out of date',
      'You are afraid to touch the site in case you break it',
      'A small text change takes weeks',
      'You are not sure there are backups',
      'Nobody checks whether the site is still working',
    ],
    stepsTitle: 'How it works',
    steps: [
      { title: 'Health check', desc: 'I look at your site and tell you what needs attention first.' },
      { title: 'Pick a plan', desc: 'Choose the level of support that fits. You can change it later.' },
      { title: 'Send requests', desc: 'Email me what you want changed. No tickets, no portals.' },
      { title: 'Stay informed', desc: 'Standard and Growth plans include a short monthly report on what was done.' },
    ],
    plansTitle: 'Plans',
    plans: [
      {
        name: 'Essential',
        price: 'A$120',
        unit: 'per month',
        blurb: 'Keep it safe and running.',
        features: ['Regular software updates', 'Backups', 'Security and uptime monitoring', 'Email support'],
      },
      {
        name: 'Standard',
        price: 'A$290',
        unit: 'per month',
        blurb: 'Keep it safe and keep it fresh.',
        features: ['Everything in Essential', '2 hours of changes per month', 'Monthly report', 'Priority replies'],
        featured: true,
      },
      {
        name: 'Growth',
        price: 'A$520',
        unit: 'per month',
        blurb: 'Make it work harder for you.',
        features: [
          'Everything in Standard',
          '4 hours of changes per month',
          'Monthly speed and SEO improvements',
          'Quarterly review call',
        ],
      },
    ],
    plansNote: 'Prices in AUD, billed monthly. Hosting and domain renewals are separate unless agreed otherwise.',
    faq: [
      {
        q: 'Do you only look after sites you built?',
        a: 'No. I am happy to take over an existing site. The health check tells us what condition it is in and what it would take to keep it healthy.',
      },
      {
        q: 'What counts as a change?',
        a: 'Text and image edits, new sections or pages, form tweaks, small fixes. Anything big gets a separate quote, so there are no surprises.',
      },
      {
        q: 'Can I cancel?',
        a: 'Plans are month to month. You should never feel locked in to get help.',
      },
    ],
    formTitle: 'Tell me about your site',
    formSub: 'Share the address and what worries you most. I will recommend the plan that fits.',
    formService: 'Website care plan',
    askWebsite: true,
    submitLabel: 'Ask about a plan',
  },
  {
    slug: 'free-website-audit',
    cardTitle: 'Free website audit',
    cardBlurb: 'Send me your URL and get a plain-English report on what is holding your site back.',
    cardFrom: 'free',
    metaTitle: 'Free Website Audit for Sydney Small Businesses | Pablo Kohler',
    metaDescription:
      'Free website audit for Sydney and Australian small businesses: speed, mobile, SEO basics and security, with a plain-English list of the top fixes.',
    eyebrow: 'Free website audit',
    h1: 'Find out what’s holding your',
    h1Accent: 'Sydney business website back.',
    sub: 'Send me your address. I will review speed, mobile experience, SEO basics and security, and send you a short plain-English report with the fixes that matter most.',
    cta: 'Get my free audit',
    problemsTitle: 'What I look at',
    problems: [
      'How fast it loads, especially on a phone',
      'How it looks and behaves on mobile',
      'Basic SEO: titles, headings, whether Google can read it',
      'Security basics and whether the site is up to date',
      'Whether visitors can easily contact you or buy',
    ],
    stepsTitle: 'How it works',
    steps: [
      { title: 'Send your URL', desc: 'Fill in the short form below. It takes a minute.' },
      { title: 'I review it', desc: 'I go through your site myself, not just an automated score.' },
      { title: 'You get a report', desc: 'A short list of the top fixes in plain English, with what each one would involve.' },
    ],
    plansTitle: 'What it costs',
    plans: [
      {
        name: 'Free website audit',
        price: 'A$0',
        blurb: 'No obligation. If you want help with the fixes, I will quote separately.',
        features: ['Speed and mobile check', 'SEO basics', 'Security basics', 'Top fixes in plain English'],
        featured: true,
      },
    ],
    plansNote: 'There is no obligation to work together afterwards.',
    faq: [
      {
        q: 'Is it really free?',
        a: 'Yes. The audit is how I show what I can do. If you want help with the fixes, we can talk about a quote.',
      },
      {
        q: 'Do you need access to my site?',
        a: 'No. I look at it the way a visitor or Google would. No logins needed.',
      },
      {
        q: 'What do you do with my details?',
        a: 'I use them to send your report and reply to you. See the privacy policy for the full detail.',
      },
    ],
    formTitle: 'Where should I look?',
    formSub: 'Send me your website address and I will come back with your report.',
    formService: 'Free website audit',
    askWebsite: true,
    submitLabel: 'Send me my audit',
  },
  {
    slug: 'web-design',
    cardTitle: 'New website',
    cardBlurb: 'No site yet, or a DIY one you have outgrown. A clean, fast site that brings in enquiries.',
    cardFrom: 'from A$1,500',
    metaTitle: 'Website Design for Small Business | Sydney & Australia | Pablo Kohler',
    metaDescription:
      'A clean, fast, mobile-friendly website for your Sydney or Australian small business, set up to be found on Google. New sites from A$1,500.',
    eyebrow: 'New website',
    h1: 'A new website for your',
    h1Accent: 'Sydney business.',
    sub: 'A clean, fast, mobile-first site that explains what you do, builds trust and makes it easy for customers to get in touch. Set up to be found on Google.',
    cta: 'Get a quote',
    problemsTitle: 'For businesses that',
    problems: [
      'Only have a Facebook page or a listing today',
      'Have a DIY site that looks amateur',
      'Need something that explains what they do in seconds',
      'Want customers to find them on Google',
      'Would rather have one person handle it end to end',
    ],
    stepsTitle: 'How it works',
    steps: [
      { title: 'Intro call', desc: 'We talk about your business, your customers and what the site needs to do.' },
      { title: 'Written quote', desc: 'Pages, features and price in writing before we start.' },
      { title: 'Design and build', desc: 'You see it and give feedback along the way.' },
      { title: 'Launch', desc: 'Domain, hosting, Google setup and a walkthrough so you know how it works.' },
    ],
    plansTitle: 'Starting point',
    plans: [
      {
        name: 'New website',
        price: 'A$1,500',
        unit: 'from',
        blurb: 'Everything a small business needs to get online properly.',
        features: [
          'Up to 5 pages',
          'Mobile-first design',
          'Contact form that reaches your inbox',
          'Basic SEO and Google-ready setup',
        ],
        featured: true,
      },
    ],
    plansNote: 'Prices in AUD. More pages, booking, payments or online shop are quoted individually.',
    faq: [
      {
        q: 'Can you write the content too?',
        a: 'I can help shape the message and tidy your copy. Tell me what you need when you get in touch and I will include it in the quote.',
      },
      {
        q: 'Do I own the site?',
        a: 'That is how it should be. We will agree on ownership of domain, hosting and files in the quote.',
      },
      {
        q: 'Can you look after it afterwards?',
        a: 'Yes, that is what the care plans are for. They are optional.',
      },
    ],
    formTitle: 'Tell me about your business',
    formSub: 'A few lines on what you do and what you need is enough to start.',
    formService: 'New website',
    askWebsite: false,
    submitLabel: 'Request a quote',
  },
  {
    slug: 'virtual-assistant',
    cardTitle: 'Virtual assistant',
    cardBlurb: 'Hand off the admin that eats your week. Flexible hours, no contracts.',
    cardFrom: 'A$35 / hour',
    metaTitle: 'Virtual Assistant for Small Business | Sydney & Australia | Pablo Kohler',
    metaDescription:
      'Virtual assistant services for Sydney and Australian small business owners: inbox, scheduling, data entry, customer enquiries and more. A$35 per hour, with hour packs available.',
    eyebrow: 'Virtual assistant',
    h1: 'A virtual assistant for',
    h1Accent: 'busy Sydney business owners.',
    sub: 'Inbox, scheduling, data entry, enquiries and the dozen small jobs that eat your week, handled by one reliable person. Pay for the hours you use.',
    cta: 'Book an intro chat',
    problemsTitle: 'Typical things I take on',
    problems: [
      'Inbox and calendar management',
      'Booking and following up enquiries',
      'Data entry and spreadsheets',
      'Social media scheduling and basic posting',
      'Document formatting, research and general admin',
    ],
    stepsTitle: 'How it works',
    steps: [
      { title: 'Intro chat', desc: 'We go through what is on your plate and what you would like to hand off.' },
      { title: 'Trial task', desc: 'We start with a small job so you can see how it works before committing to more.' },
      { title: 'Ongoing hours', desc: 'Buy hours as you need them. Packs lower the hourly rate.' },
    ],
    plansTitle: 'Pricing',
    plans: [
      {
        name: 'Pay as you go',
        price: 'A$35',
        unit: 'per hour',
        blurb: 'Flexible. Use it when you need it.',
        features: ['No minimum commitment', 'Billed for hours worked', 'Good for trying it out'],
      },
      {
        name: '10-hour pack',
        price: 'A$330',
        unit: 'A$33 / hour',
        blurb: 'For regular, predictable help.',
        features: ['10 hours to use as you need', 'Lower hourly rate', 'Priority scheduling'],
        featured: true,
      },
      {
        name: '20-hour pack',
        price: 'A$620',
        unit: 'A$31 / hour',
        blurb: 'Best value for ongoing support.',
        features: ['20 hours to use as you need', 'Lowest hourly rate', 'Priority scheduling'],
      },
    ],
    plansNote: 'Prices in AUD. Working hours are Sydney time.',
    faq: [
      {
        q: 'What if I need something that is not on the list?',
        a: 'Ask. If it is something I can do well, I will say yes. If not, I will tell you straight away.',
      },
      {
        q: 'How do you keep my information private?',
        a: 'I only use the access you give me for your tasks, and we agree on how to share logins safely before we start.',
      },
      {
        q: 'Do packs expire?',
        a: 'We will agree on the terms before you buy, so you know exactly how and when the hours can be used.',
      },
    ],
    formTitle: 'Let’s have a chat',
    formSub: 'Tell me what you would like to hand off and I will reply to arrange an intro chat.',
    formService: 'Virtual assistant',
    askWebsite: false,
    submitLabel: 'Book an intro chat',
  },
];

export function getAuService(slug: string): AuService | undefined {
  return AU_SERVICES.find((s) => s.slug === slug);
}
