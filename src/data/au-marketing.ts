/**
 * Landing pages de marketing (SEO local, Google Ads, Meta Ads) para pablokohler.com.au (solo build AU, inglés).
 * Misma plantilla que au-services.ts. Precios en AUD; el presupuesto de anuncios va aparte y se paga directo a Google/Meta.
 * Google Ads A$200 por campaña es un precio real; el resto son propuestas que hay que validar antes de publicar.
 * Ubicación: "Tasmania and Australia" (decisión del dueño). NO agregar testimonios ni cifras de clientes sin respaldo real.
 */
import type { AuService } from './au-services';

export const AU_MARKETING: AuService[] = [
  {
    slug: 'local-seo',
    group: 'marketing',
    cardTitle: 'Local SEO',
    cardBlurb: 'Get found on Google by customers near you. Page fixes, Google Business Profile and measurement, in accounts you own.',
    cardFrom: 'from A$450',
    metaTitle: 'Local SEO for Tasmanian & Australian Small Business | Pablo Kohler',
    metaDescription:
      'Local SEO for small businesses in Tasmania and across Australia: Google Business Profile, page fixes, local landing pages and Search Console. From A$450.',
    eyebrow: 'Local SEO',
    h1: 'Local SEO for',
    h1Accent: 'Tasmanian small businesses.',
    sub: 'Be easier to find when people nearby search for what you do. A clear plan, fixed prices in writing, and the accounts are yours, so nothing is held hostage.',
    cta: 'Get a free SEO check',
    problemsTitle: 'Sound familiar?',
    problems: [
      'Your business does not show up when you search for it on Google',
      'Competitors with a worse service rank above you',
      'Your Google Business Profile is missing, out of date or not in your name',
      'You do not know which pages bring in enquiries',
      'Someone sold you SEO and you cannot tell what they actually did',
    ],
    stepsTitle: 'How it works',
    steps: [
      { title: 'Free check', desc: 'I look at your site and at how your business shows up on Google today, and tell you what is holding it back.' },
      { title: 'Plan in writing', desc: 'What I will do, what it costs and what I need from you, before anything starts.' },
      { title: 'Fix and build', desc: 'Page titles, headings, local pages and your Google Business Profile, with Analytics and Search Console installed.' },
      { title: 'Report', desc: 'A short update in plain English on what changed and what comes next.' },
    ],
    plansTitle: 'Two ways to start',
    plans: [
      {
        name: 'Local SEO starter',
        price: 'A$450',
        unit: 'from',
        blurb: 'A solid base, done once and done properly.',
        features: [
          'A review of how Google sees your site',
          'Google Business Profile set up or tidied',
          'Page titles, headings and local keywords fixed',
          'Up to 3 new or improved pages',
          'Google Analytics and Search Console installed',
        ],
        featured: true,
      },
      {
        name: 'Monthly SEO',
        price: 'A$250',
        unit: 'per month',
        blurb: 'Keep improving, month after month.',
        features: [
          'New or improved pages each month',
          'Search Console checks and fixes',
          'A short plain-English report',
          'Month to month, no lock-in',
        ],
      },
    ],
    plansNote:
      'Prices in AUD. Results depend on competition and on how long your site has been around, so I do not promise rankings. I will tell you honestly what is realistic before you spend anything.',
    faq: [
      {
        q: 'How long until SEO works?',
        a: 'Usually months, not days, and it depends on how many businesses compete for the same searches. I cannot guarantee rankings. I can make sure your site is set up properly and that you can measure what is happening.',
      },
      {
        q: 'Do you build a page for every suburb or town?',
        a: 'Only where it makes sense. Each page needs something useful to say, or it does not help. I built a landing page for each of 44 suburbs for Bondi Painters, with Google Analytics and Search Console set up to measure what works.',
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
    formTitle: 'Start with a free SEO check',
    formSub: 'Send your website address and a few words about what you sell and where. I will come back with an honest check and a plan.',
    formService: 'Local SEO',
    askWebsite: true,
    submitLabel: 'Request my free check',
  },
  {
    slug: 'google-ads',
    group: 'marketing',
    cardTitle: 'Google Ads',
    cardBlurb: 'Get calls and enquiries sooner. A search campaign set up in your own Google Ads account.',
    cardFrom: 'from A$200',
    metaTitle: 'Google Ads Management Tasmania & Australia | Pablo Kohler',
    metaDescription:
      'Google Ads for small businesses in Tasmania and across Australia: campaigns set up in your own account, with tracked calls and enquiries. From A$200 a campaign.',
    eyebrow: 'Google Ads',
    h1: 'Google Ads for',
    h1Accent: 'Tasmanian small businesses.',
    sub: 'Appear when people search for what you sell, and pay when they click. Campaigns set up in your own account, with tracking so you can see calls and enquiries.',
    cta: 'Get a free ads check',
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
      { title: 'Free check', desc: 'I look at your site and your market, and tell you honestly whether ads are a good fit for your business.' },
      { title: 'Plan and budget', desc: 'Keywords, areas, a realistic starting budget and what I will track, in writing.' },
      { title: 'Set up and launch', desc: 'The campaign goes live in your own account, with conversion tracking in place.' },
      { title: 'Report and adjust', desc: 'A short update in plain English, and changes where something is not working.' },
    ],
    plansTitle: 'Two ways to work together',
    plans: [
      {
        name: 'Google Ads campaign',
        price: 'A$200',
        unit: 'per campaign',
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
        price: 'A$150',
        unit: 'per month',
        blurb: 'Someone keeping an eye on it.',
        features: [
          'Ongoing keyword and budget checks',
          'Changes when something is not working',
          'A short plain-English report',
          'Ad budget not included',
        ],
      },
    ],
    plansNote:
      'Prices in AUD. The ad budget is separate and paid straight to Google from your account. I do not promise a number of enquiries: it depends on your market and your website.',
    faq: [
      {
        q: 'How much should I spend on ads?',
        a: 'It depends on how many people search for what you sell and what a click costs in your market. I give you a realistic starting budget in the plan. You can start small and adjust.',
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
    formTitle: 'Start with a free ads check',
    formSub: 'Send your website address and a few words about what you sell and where. I will come back with an honest check and a plan.',
    formService: 'Google Ads',
    askWebsite: true,
    submitLabel: 'Request my free check',
  },
  {
    slug: 'social-media-ads',
    group: 'marketing',
    cardTitle: 'Social media & Meta Ads',
    cardBlurb: 'Facebook and Instagram set up properly, with ads that bring in enquiries. Accounts in your name.',
    cardFrom: 'from A$150',
    metaTitle: 'Social Media Ads & Meta Ads Tasmania | Pablo Kohler',
    metaDescription:
      'Facebook and Instagram setup and Meta Ads for small businesses in Tasmania and across Australia. Accounts in your name, tracked enquiries. From A$150.',
    eyebrow: 'Social media & Meta Ads',
    h1: 'Social media ads for',
    h1Accent: 'Tasmanian small businesses.',
    sub: 'Your Facebook and Instagram accounts set up properly and, if you want, ads that reach people by area and interest. Accounts in your name and plain-English reports.',
    cta: 'Get a free social check',
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
      { title: 'Free check', desc: 'I look at your accounts and your site, and tell you honestly whether ads are a good fit for your business.' },
      { title: 'Plan in writing', desc: 'What I will set up, what it costs and what I need from you, before anything starts.' },
      { title: 'Set up and launch', desc: 'Accounts in your name, tracking installed on your site, and the first campaign live.' },
      { title: 'Report', desc: 'A short update in plain English on what happened and what to change.' },
    ],
    plansTitle: 'Set up, design and ads',
    plans: [
      {
        name: 'Social setup',
        price: 'A$150',
        unit: 'from',
        blurb: 'Facebook and Instagram, set up the right way.',
        features: [
          'Facebook page and Instagram profile set up or tidied',
          'Business accounts in your name',
          'Tracking on your website, so you can see what ads bring in',
          'Handover and password manager setup',
        ],
      },
      {
        name: 'Post and ad designs',
        price: 'A$50',
        unit: 'from',
        blurb: 'Graphics for your posts and ads.',
        features: ['Designs from your own photos and logo', 'Sized for Facebook and Instagram', 'Editable files you keep'],
      },
      {
        name: 'Meta Ads campaign',
        price: 'A$200',
        unit: 'per campaign',
        blurb: 'A campaign, set up and ready to run.',
        features: [
          'Audience, location and ad text',
          'Tracking, so you can see enquiries',
          'The ad account is in your name',
          'The ad budget is separate and paid straight to Meta',
        ],
        featured: true,
      },
      {
        name: 'Ads management',
        price: 'A$150',
        unit: 'per month',
        blurb: 'Someone keeping an eye on it.',
        features: [
          'Ongoing audience and budget checks',
          'Changes when something is not working',
          'A short plain-English report',
          'Ad budget not included',
        ],
      },
    ],
    plansNote:
      'Prices in AUD. The ad budget is separate and paid straight to Meta. This covers setup and paid ads, not day-to-day posting. Results depend on your market, so I do not promise a number of enquiries.',
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
        a: 'It depends on what you sell and who your customers are. The free check includes an honest answer, and if I think ads are not a good fit, I will say so.',
      },
      {
        q: 'Who owns the accounts?',
        a: 'You do. If we stop working together, your pages, ad accounts and audiences stay with you.',
      },
    ],
    formTitle: 'Start with a free social check',
    formSub: 'Send your website or Facebook page and a few words about what you sell and where. I will come back with an honest check and a plan.',
    formService: 'Social media and Meta Ads',
    askWebsite: true,
    submitLabel: 'Request my free check',
  },
];
