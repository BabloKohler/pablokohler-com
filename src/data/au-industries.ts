/**
 * Landing pages por rubro para pablokohler.com.au (solo build AU, inglés).
 * Los precios salen de au-services.ts (una sola fuente de verdad).
 * NO agregar testimonios, cifras de clientes ni resultados sin respaldo real.
 */
import { AU_SERVICES, type AuService } from './au-services';

const newSite = AU_SERVICES.find((s) => s.slug === 'web-design')!.plans[0];
const redesign = AU_SERVICES.find((s) => s.slug === 'website-redesign')!.plans[1];

interface Industry {
  slug: string;
  who: string; // "Sydney tradies"
  titleWho: string; // versión corta para el <title> (máx. ~60 caracteres en total)
  whoShort: string; // "tradies"
  examples: string; // "plumbers, electricians, builders"
  cardBlurb: string;
  metaDescription: string;
  sub: string;
  problems: string[];
  includesTitle?: string;
  includes: string[];
  faq: { q: string; a: string }[];
}

function build(i: Industry): AuService {
  return {
    slug: i.slug,
    cardTitle: `Websites for ${i.whoShort}`,
    cardBlurb: i.cardBlurb,
    cardFrom: 'from A$1,500',
    metaTitle: `Website Design for ${i.titleWho} | Pablo Kohler`,
    metaDescription: i.metaDescription,
    eyebrow: `Websites for ${i.whoShort}`,
    h1: 'A website for',
    h1Accent: `${i.who}.`,
    sub: i.sub,
    cta: 'Get a free website audit',
    problemsTitle: `Common problems for ${i.whoShort}`,
    problems: i.problems,
    stepsTitle: 'How it works',
    steps: [
      { title: 'Free audit or intro call', desc: 'I look at your current site (or what you have today) and we talk about what you need it to do.' },
      { title: 'Written quote', desc: 'Pages, features and price in writing before we start.' },
      { title: 'Design and build', desc: 'You see progress and give feedback along the way.' },
      { title: 'Launch and handover', desc: 'Domain, hosting and Google setup handled, plus a walkthrough so you know how to make simple edits.' },
    ],
    plansTitle: 'Where to start',
    plans: [newSite, redesign],
    plansNote: `Prices in AUD. ${i.includesTitle ?? 'Typical inclusions'}: ${i.includes.join('; ')}. Anything beyond that is quoted individually.`,
    faq: i.faq,
    formTitle: `Tell me about your ${i.whoShort === 'tradies' ? 'business' : 'practice or business'}`,
    formSub: 'A few lines on what you do and what you need is enough to start.',
    formService: `Website for ${i.whoShort}`,
    askWebsite: false,
    submitLabel: 'Request a free audit or quote',
  };
}

const industries: Industry[] = [
  {
    slug: 'website-design-for-tradies',
    who: 'Sydney tradies',
    titleWho: 'Sydney Tradies',
    whoShort: 'tradies',
    examples: 'plumbers, electricians, builders, landscapers',
    cardBlurb: 'Plumbers, electricians, builders and landscapers: a site that gets the phone ringing.',
    metaDescription:
      'Website design for Sydney tradies: plumbers, electricians, builders and landscapers. Fast on mobile, click-to-call, service areas and quote requests. New sites from A$1,500.',
    sub: 'Plumbers, electricians, builders, landscapers: when someone needs a tradie they search on their phone and call the first one that looks reliable. I build sites that make that call easy.',
    problems: [
      'Customers search “near me” on their phone and your site is slow or hard to read',
      'No clear phone number or call button on mobile',
      'Visitors cannot see which suburbs you cover',
      'No photos of your work, so you look like everyone else',
      'You rely on Facebook or a directory listing and have no site of your own',
    ],
    includes: [
      'tap-to-call button',
      'service areas by suburb',
      'quote request form',
      'gallery of your work',
      'licence details shown clearly',
    ],
    faq: [
      {
        q: 'Do I need a website if I get work through Facebook or directories?',
        a: 'Directories take a cut and compete you against everyone else. Your own site is somewhere you control, and it can show up when people search for your trade and suburb.',
      },
      {
        q: 'Can I update photos of new jobs myself?',
        a: 'That is the plan. I will show you how during handover, or you can add a care plan and send me the photos.',
      },
      {
        q: 'Will it work on my phone?',
        a: 'It is designed for phones first, since that is where most tradie searches happen.',
      },
    ],
  },
  {
    slug: 'website-design-for-health-and-wellness',
    who: 'Sydney health and wellness practices',
    titleWho: 'Sydney Health & Wellness',
    whoShort: 'health and wellness practices',
    examples: 'dentists, physios, psychologists, massage therapists',
    cardBlurb: 'Dentists, physios, psychologists and therapists: a calm, clear site that builds trust.',
    metaDescription:
      'Website design for Sydney health and wellness practices: dentists, physios, psychologists and therapists. Clear services, practitioner profiles and easy booking. New sites from A$1,500.',
    sub: 'Dentists, physios, psychologists, therapists: people choose a practice they trust. A clear, calm site that explains what you do, who you are and how to book makes that decision easy.',
    problems: [
      'Patients cannot easily see your services, fees or who they would be seeing',
      'Booking is hidden or confusing',
      'The site looks dated and does not reflect the care you give',
      'Contact forms ask for more than they should',
      'Hours, location and parking are hard to find',
    ],
    includes: [
      'practitioner profile pages',
      'clear service pages',
      'link to your booking system',
      'location, hours and map',
      'contact form that does not ask for health details',
    ],
    faq: [
      {
        q: 'Can you connect my existing booking system?',
        a: 'In most cases I can link or embed it so patients can book from your site. Tell me which one you use and I will confirm in the quote.',
      },
      {
        q: 'What about patient privacy?',
        a: 'I keep forms simple and avoid collecting health information through the website. Anything sensitive should stay in your practice software.',
      },
      {
        q: 'Do you handle AHPRA advertising rules?',
        a: 'You are responsible for the claims you publish. I will build the site so it is easy to keep your wording factual and compliant, and you can have your professional body check the final copy.',
      },
    ],
  },
  {
    slug: 'website-design-for-cafes-and-restaurants',
    who: 'Sydney cafes and restaurants',
    titleWho: 'Sydney Cafes & Restaurants',
    whoShort: 'cafes and restaurants',
    examples: 'cafes, restaurants, bars, bakeries',
    cardBlurb: 'Cafes, restaurants and bakeries: menu, hours and location where people actually look.',
    metaDescription:
      'Website design for Sydney cafes and restaurants. Menu, hours, location and bookings that work on a phone. New sites from A$1,500.',
    sub: 'Cafes, restaurants, bars, bakeries: people check your menu, hours and location on their phone before they walk in. I build sites that put that information up front and look as good as your food.',
    problems: [
      'Your menu is a blurry PDF or a photo',
      'Opening hours on your site and on Google do not match',
      'Hard to find the address, parking or how to book a table',
      'Pages are slow to load on mobile data',
      'No easy way to share events, specials or catering enquiries',
    ],
    includes: [
      'mobile-friendly menu you can edit',
      'hours, address and map',
      'link to bookings or online ordering',
      'events and specials section',
      'catering enquiry form',
    ],
    faq: [
      {
        q: 'Can I change the menu myself?',
        a: 'Yes. I will set the menu up so that updating items and prices is simple, and show you how during handover.',
      },
      {
        q: 'Can you link to my booking or ordering platform?',
        a: 'Yes. Tell me which platform you use and I will link or embed it where it makes sense.',
      },
      {
        q: 'What about my Google listing?',
        a: 'The site and your Google Business Profile should say the same thing. I will point out anything that does not match.',
      },
    ],
  },
  {
    slug: 'website-design-for-professional-services',
    who: 'Sydney professional services',
    titleWho: 'Sydney Professional Services',
    whoShort: 'professional services',
    examples: 'accountants, lawyers, consultants, real estate',
    cardBlurb: 'Accountants, lawyers, consultants and agents: a credible site that turns visits into enquiries.',
    metaDescription:
      'Website design for Sydney professional services: accountants, lawyers, consultants and real estate. Credible, clear and built to generate enquiries. New sites from A$1,500.',
    sub: 'Accountants, lawyers, consultants, agents: clients decide on trust. A credible, clear site that explains your services and makes it easy to get in touch.',
    problems: [
      'The site looks generic and does not set you apart',
      'It is hard to tell what you actually do and for whom',
      'No clear next step, so visitors leave without enquiring',
      'Team and credentials are buried or missing',
      'Content is outdated and rarely touched',
    ],
    includes: [
      'clear service pages',
      'team and credentials',
      'enquiry or booking form',
      'space for articles or resources',
      'Google-ready setup',
    ],
    faq: [
      {
        q: 'Can you help with what the site should say?',
        a: 'Yes. I can help shape the message and tidy your copy. Tell me what you need and I will include it in the quote.',
      },
      {
        q: 'Can you migrate my existing content?',
        a: 'Yes. If you already have a site, I will map existing pages to the new ones and redirect them so you keep the rankings you have.',
      },
      {
        q: 'Who looks after it afterwards?',
        a: 'You can do it yourself, or add a monthly care plan so updates and small changes are handled for you.',
      },
    ],
  },
];

export const AU_INDUSTRIES: AuService[] = industries.map(build);
