/**
 * Landing pages por rubro para pablokohler.com.au (solo build AU, inglés).
 * Los precios salen de au-services.ts (una sola fuente de verdad).
 * NO agregar testimonios, cifras de clientes ni resultados sin respaldo real.
 */
import { AU_SERVICES, type AuService } from './au-services';

type Plan = AuService['plans'][number];

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
  // Opcionales: las tiendas online no tienen precio fijo ni encajan en "A website for <rubro>".
  cardTitle?: string;
  cardFrom?: string;
  metaTitle?: string;
  h1?: string;
  h1Accent?: string;
  plans?: Plan[];
  plansTitle?: string;
  formTitle?: string;
  region?: 'tasmania';
  eyebrow?: string;
}

function build(i: Industry): AuService {
  return {
    slug: i.slug,
    region: i.region,
    cardTitle: i.cardTitle ?? `Websites for ${i.whoShort}`,
    cardBlurb: i.cardBlurb,
    cardFrom: i.cardFrom ?? 'from A$1,500',
    metaTitle: i.metaTitle ?? `Website Design for ${i.titleWho} | Pablo Kohler`,
    metaDescription: i.metaDescription,
    eyebrow: i.eyebrow ?? `Websites for ${i.whoShort}`,
    h1: i.h1 ?? 'A website for',
    h1Accent: i.h1Accent ?? `${i.who}.`,
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
    plansTitle: i.plansTitle ?? 'Where to start',
    plans: i.plans ?? [newSite, redesign],
    plansNote: `Prices in AUD. ${i.includesTitle ?? 'Typical inclusions'}: ${i.includes.join('; ')}. Anything beyond that is quoted individually.`,
    faq: i.faq,
    formTitle: i.formTitle ?? `Tell me about your ${i.whoShort === 'tradies' ? 'business' : 'practice or business'}`,
    formSub: 'A few lines on what you do and what you need is enough to start.',
    formService: `Website for ${i.whoShort}`,
    askWebsite: false,
    submitLabel: 'Request a free audit or quote',
  };
}

// Tienda online: sin precio fijo, se cotiza después de una auditoría gratis (mismo criterio que el resto del sitio).
const store: Plan = {
  name: 'Online store',
  price: 'Custom quote',
  blurb: 'Products, payments and shipping, built to sell.',
  features: [
    'Product pages with photos and variants',
    'Secure checkout and payments',
    'Shipping and click-and-collect options',
    'Stock and price updates you can do yourself',
    'Google Analytics and Search Console set up',
  ],
  featured: true,
};
const shopAddOn: Plan = {
  name: 'Add an online shop',
  price: 'Custom quote',
  blurb: 'Sell products, prints or gift cards alongside your site.',
  features: ['Product pages and checkout', 'Payments and shipping set up', 'Stock and prices you can update yourself'],
};

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
  // ── Negocios de servicios y tiendas (belleza, tatuajes, boutiques, e-commerce) ──
  {
    slug: 'website-design-for-beauty-salons',
    region: 'tasmania',
    who: 'Tasmanian beauty salons',
    titleWho: 'Tasmanian Beauty Salons',
    whoShort: 'beauty salons',
    examples: 'hair, nails, lashes, skin and massage',
    cardBlurb: 'Hair, nails, lashes and skin: a site that shows your work, lists your prices and gets bookings.',
    metaDescription:
      'Website design for beauty salons in Tasmania and Australia: price list, treatment pages, gallery and booking that work on a phone. From A$1,500.',
    sub: 'Hair, nails, lashes, skin, massage: people choose a salon by how it looks and how easy it is to book. I build sites that show your work, list your prices and make booking one tap.',
    problems: [
      'Your price list lives in an Instagram post or a PDF nobody can read on a phone',
      'Booking is hidden, or clients have to message you to ask for a time',
      'Your best work is on Instagram, but your website does not show it',
      'You cannot change prices or hours without asking someone',
      'You do not show up when people search for your treatments and suburb',
      'Your site is a Wix or Squarespace page you have outgrown',
    ],
    includes: [
      'a page for each treatment',
      'a price list that is easy to update',
      'photo gallery',
      'booking link or form',
      'opening hours and map',
      'an optional online shop for products and gift cards',
    ],
    plans: [AU_SERVICES.find((s) => s.slug === 'web-design')!.plans[0], shopAddOn],
    faq: [
      {
        q: 'Have you built a salon website before?',
        a: 'Yes. I redesigned She Loves Pink, a Sydney salon, moving it off Wix, with a page for each main treatment, analytics and ads. You can read the case study on this site.',
      },
      {
        q: 'Can I update prices and hours myself?',
        a: 'That is the plan. For She Loves Pink I built an admin panel so the salon manages its own prices, hours and services. I will tell you what is realistic for your site in the quote.',
      },
      {
        q: 'Can you connect my booking system?',
        a: 'I can link to or embed the booking tool you already use. If you do not have one, I will suggest options and include it in the quote.',
      },
      {
        q: 'Can I sell products or gift cards online?',
        a: 'Yes. I can add an online shop to your site. It is quoted individually after a free audit.',
      },
    ],
  },
  {
    slug: 'website-design-for-tattoo-studios',
    region: 'tasmania',
    who: 'Tasmanian tattoo studios',
    titleWho: 'Tasmanian Tattoo Studios',
    whoShort: 'tattoo studios',
    examples: 'tattoo and piercing studios and independent artists',
    cardBlurb: 'Studios and artists: a portfolio that shows your style and an enquiry form that brings the right clients.',
    metaDescription:
      'Website design for tattoo studios in Tasmania and Australia: artist portfolios, styles, enquiries, aftercare and local search. From A$1,500.',
    sub: 'Clients choose an artist by style. A fast portfolio, clear styles and an enquiry form that asks for the right details means fewer back-and-forth messages and more of the work you want.',
    problems: [
      'Your portfolio only lives on Instagram, so you do not control it and it is hard to browse',
      'Enquiries arrive as vague messages with no size, placement or reference',
      'Clients cannot see which artist does which style',
      'Aftercare and pricing questions fill your inbox',
      'You do not show up when people search for a tattoo studio near them',
      'Your site is slow because the photos are huge',
    ],
    includes: [
      'artist and style pages',
      'fast photo galleries',
      'an enquiry form that asks for size, placement and style',
      'aftercare and FAQ pages',
      'opening hours, map and Instagram links',
      'an optional shop for prints, merch and gift cards',
    ],
    plans: [AU_SERVICES.find((s) => s.slug === 'web-design')!.plans[0], shopAddOn],
    faq: [
      {
        q: 'Can clients send reference images?',
        a: 'I can set up an enquiry form that asks for the details you need. Whether it accepts file uploads depends on the form tool, so I will confirm that in the quote.',
      },
      {
        q: 'Can I take deposits online?',
        a: 'Possibly: it depends on the payment tool you choose. It is quoted individually.',
      },
      {
        q: 'Do I still need Instagram?',
        a: 'Yes, it is where many clients find you. The site is the place you control: it shows your portfolio properly, answers common questions and can show up in Google searches.',
      },
      {
        q: 'Will it show up when people search for a tattoo studio near them?',
        a: 'I set up the basics: titles, headings, your Google Business Profile and local pages where they help. Nobody can guarantee rankings, but it gives you a fair chance.',
      },
    ],
  },
  {
    slug: 'website-design-for-boutiques',
    region: 'tasmania',
    who: 'Tasmanian boutiques',
    titleWho: 'Tasmanian Boutiques',
    whoShort: 'boutiques',
    examples: 'fashion, gifts, homewares and jewellery',
    cardFrom: 'Custom quote',
    cardBlurb: 'Fashion, gifts and homewares: a shop window online that sells, with payments and shipping set up.',
    metaDescription:
      'Online store and website for boutiques in Tasmania and Australia: product pages, payments, shipping and local search. Custom quote after a free audit.',
    sub: 'Your shop has a loyal local crowd. An online store lets the people who cannot walk in buy from you too, and makes your products easy to find when someone searches for what you sell.',
    problems: [
      'Customers ask on Instagram what is in stock and what things cost',
      'You only sell in store, so you miss everyone who cannot visit',
      'Your products sit on a marketplace that takes a cut and hides your brand',
      'Updating stock and prices takes hours',
      'You tried a DIY store and it feels clunky',
      'Nobody finds you when they search for what you sell',
    ],
    includesTitle: 'Typical inclusions for a boutique store',
    includes: [
      'product pages with photos and variants',
      'secure checkout and payments',
      'shipping and click-and-collect options',
      'stock and price updates you can do yourself',
      'gift cards and discount codes where useful',
      'Google Analytics and Search Console set up',
    ],
    plans: [store, AU_SERVICES.find((s) => s.slug === 'web-design')!.plans[0]],
    faq: [
      {
        q: 'Which platform will you use?',
        a: 'I build online stores on WordPress with WooCommerce, and I can work with what you already use. I will recommend what suits your products and how much you sell, and you own the accounts.',
      },
      {
        q: 'How much does a store cost?',
        a: 'It depends on how many products, shipping rules and payment methods you need. After a free audit you get a fixed quote in writing.',
      },
      {
        q: 'Can I update products and stock myself?',
        a: 'That is the goal. I show you how during handover, or you can add a care plan and send me the changes.',
      },
      {
        q: 'Can you move my products from another platform?',
        a: 'Often yes, depending on what you use. I check this during the audit and include it in the quote.',
      },
    ],
  },
  {
    slug: 'online-store-design',
    region: 'tasmania',
    who: 'Tasmanian small businesses',
    titleWho: 'Tasmanian Small Businesses',
    whoShort: 'online stores',
    examples: 'shops that sell products online',
    cardTitle: 'Online stores',
    eyebrow: 'Online stores',
    cardFrom: 'Custom quote',
    cardBlurb: 'Sell your products from a store you own, not a marketplace that takes a cut.',
    metaTitle: 'Online Store Design Tasmania & Australia | Pablo Kohler',
    metaDescription:
      'WooCommerce online stores for small businesses in Tasmania and across Australia: products, payments, shipping and SEO. Custom quote after a free audit.',
    h1: 'An online store for',
    h1Accent: 'Tasmanian small businesses.',
    sub: 'Sell your products from a store you own, not a marketplace that takes a cut. Products, payments and shipping set up properly, and easy for you to manage.',
    problems: [
      'You sell through a marketplace and pay fees on every sale',
      'Your current store is slow or hard to use on a phone',
      'You cannot update products and stock without help',
      'Customers abandon the checkout',
      'Nobody finds your products on Google',
      'You are not sure who owns your store or your domain',
    ],
    includesTitle: 'Typical inclusions',
    includes: [
      'product pages with photos and variants',
      'secure checkout and payments',
      'shipping rules and options',
      'stock and price management you control',
      'SEO basics for products and categories',
      'Analytics and Search Console set up',
    ],
    plans: [store, AU_SERVICES.find((s) => s.slug === 'web-design')!.plans[0]],
    formTitle: 'Tell me about your shop',
    faq: [
      {
        q: 'Which platform will you use?',
        a: 'I build online stores on WordPress with WooCommerce, and I can work with what you already use. I will recommend what suits your products and how much you sell, and you own the accounts.',
      },
      {
        q: 'Do I own the store?',
        a: 'You do. Domain, hosting and logins end up in accounts in your name, and I set up your logins in a password manager.',
      },
      {
        q: 'Can you run Google Ads for my products?',
        a: 'Yes. I set up Google Ads campaigns in your own account. The ad budget is separate and paid straight to Google.',
      },
      {
        q: 'How much does a store cost?',
        a: 'It depends on how many products, shipping rules and payment methods you need. After a free audit you get a fixed quote in writing.',
      },
    ],
  },
];

export const AU_INDUSTRIES: AuService[] = industries.map(build);
