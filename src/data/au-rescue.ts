/**
 * Landing pages para dueños de negocios que YA tienen un sitio pero no lo controlan o no saben manejarlo
 * (pablokohler.com.au, solo build AU, inglés). Misma plantilla que au-services.ts.
 * Precios en AUD, ubicados en el extremo bajo del mercado australiano (ver notas en cada plan).
 * Plataformas que se cubren: WordPress, Wix, Squarespace y Shopify.
 * IMPORTANTE: no se da asesoría legal; los textos sobre propiedad de dominios .au están redactados con cautela
 * (el dueño es el "registrante" en auDA; .com.au exige presencia australiana, p. ej. ABN).
 * NO agregar testimonios ni cifras de clientes sin respaldo real.
 */
import type { AuService } from './au-services';

const PLATFORMS = 'WordPress, Wix, Squarespace and Shopify';

export const AU_RESCUE: AuService[] = [
  // 1) Imán de captación del nicho
  {
    slug: 'website-control-check',
    group: 'rescue',
    cardTitle: 'Free website control check',
    cardBlurb: 'Find out who actually controls your domain, hosting and website. Free, in 48 hours, no passwords needed.',
    cardFrom: 'free',
    metaTitle: 'Free Website Control Check | Who Owns Your Domain? | Pablo Kohler',
    metaDescription:
      'Not sure who controls your website, domain or hosting? Get a free control check for your Sydney or Australian business: registrant, hosting, platform and expiry dates, in 48 hours.',
    eyebrow: 'Free website control check',
    h1: 'Who actually controls',
    h1Accent: 'your website?',
    sub: 'Send me your website address. Within 48 hours I will tell you who is listed as the owner of your domain, where the site is hosted, what it is built on, when things expire and what to fix first. Free, and no passwords needed.',
    cta: 'Get my free control check',
    problemsTitle: 'Signs you should check',
    problems: [
      'A developer or agency built it years ago and you have never seen the logins',
      'You are not sure whose name the domain is registered in',
      'You cannot remember when the domain or hosting renews',
      'Nobody has updated the site in a long time',
      'Your business email depends on a domain you do not control',
    ],
    stepsTitle: 'How it works',
    steps: [
      { title: 'Send your address', desc: 'Fill in the short form below. It takes a minute.' },
      { title: 'I check public records', desc: 'Domain registration (where it is public), DNS, hosting, the security certificate, the platform and how fast it loads.' },
      { title: 'You get a plain-English report', desc: 'Within 48 hours, with who holds what, what expires when, and a short list of what to fix first.' },
    ],
    plansTitle: 'What it costs',
    plans: [
      {
        name: 'Free control check',
        price: 'A$0',
        blurb: 'No obligation. If you want help with what I find, I will quote separately.',
        features: [
          'Who is listed as domain registrant (where public)',
          'Domain and security certificate expiry dates',
          'Where the site is hosted and what it is built on',
          'A short list of what to fix first',
        ],
        featured: true,
      },
    ],
    plansNote:
      'I only use public information, so no passwords or logins are needed. Some domain extensions hide the owner’s details; when that happens I will tell you how to confirm it with your registrar.',
    faq: [
      {
        q: 'Do you need access to my website?',
        a: 'No. I look at it the way a visitor or a search engine would, plus public domain and DNS records. If you later want me to fix anything, we set up access safely.',
      },
      {
        q: 'What if the domain owner’s details are hidden?',
        a: 'Some domain extensions hide them. I will still show you the registrar and hosting I can see, and explain how to confirm the owner through the registrar.',
      },
      {
        q: 'What happens after the report?',
        a: 'It is yours to keep. If you want help, the report shows the next step, whether that is getting your accounts back, taking over the site, or setting up edits and care.',
      },
    ],
    formTitle: 'Which website should I check?',
    formSub: 'Send me the address and I will come back with your report within 48 hours.',
    formService: 'Website control check',
    askWebsite: true,
    submitLabel: 'Send me my control check',
  },

  // 2) Dolor más fuerte: perdieron el acceso
  {
    slug: 'locked-out-of-my-website',
    group: 'rescue',
    cardTitle: 'Locked out of your website?',
    cardBlurb: 'Your developer disappeared or nobody has the logins. I help you get your domain and website back in your name.',
    cardFrom: 'from A$420',
    metaTitle: 'Locked Out of Your Website? Access Rescue | Sydney | Pablo Kohler',
    metaDescription:
      'Lost the logins to your website or domain? Your developer stopped replying? Access Rescue for Sydney and Australian small businesses: find who holds what and get everything set up in your name. From A$420.',
    eyebrow: 'Access Rescue',
    h1: 'Locked out of your own',
    h1Accent: 'website?',
    sub: 'Your developer disappeared, the agency does not reply, or nobody has the logins. I work out who holds your domain and hosting, help you get them back, and set everything up in your name.',
    cta: 'Start with a free control check',
    problemsTitle: 'Sound familiar?',
    problems: [
      'The developer or agency stopped replying',
      'You do not have the logins for the website, hosting or domain',
      'The domain might be registered in someone else’s name',
      'You are paying for hosting but do not know who to ask about it',
      'You cannot update your own site, or your business email is at risk',
    ],
    stepsTitle: 'How it works',
    steps: [
      { title: 'Free control check', desc: 'I find out who is listed as owner of the domain and who hosts the site.' },
      { title: 'Plan', desc: 'A clear list of who holds what, what we need from each person, and your written authorisation for me to act on your behalf.' },
      { title: 'Recover and move', desc: 'I help with the requests to your developer and registrar, then set the site, domain and backups up in accounts that belong to you.' },
      { title: 'Handover', desc: 'Your logins in a password manager, a backup, and a short guide so you are never locked out again.' },
    ],
    plansTitle: 'Pricing',
    plans: [
      {
        name: 'Access Rescue',
        price: 'A$420',
        unit: 'from',
        blurb: 'One fixed fee to find out who holds what and get you back in control.',
        features: [
          'Find who holds your domain, hosting and site',
          'Help with the requests to your developer and registrar',
          'Domain, hosting and backups set up in your name',
          'Plain-English handover and password manager setup',
        ],
        featured: true,
      },
    ],
    plansNote:
      'Prices in AUD. Registrar fees, such as a change of registrant, are charged separately by the registrar and vary. I do not give legal advice. If a developer refuses to cooperate I will explain your options, such as a complaint to auDA or speaking to a lawyer.',
    faq: [
      {
        q: 'Can you get my domain back?',
        a: 'It depends on whose name is on the registration and whether they cooperate. The first step is finding that out. I will tell you honestly what is possible and cannot guarantee an outcome.',
      },
      {
        q: 'Do you need my passwords?',
        a: 'I will never ask you to email passwords. We set up access safely, and I only work on accounts with your written authorisation.',
      },
      {
        q: 'How long does it take?',
        a: 'Often a few days once the right people respond. Domain ownership changes go through your registrar, and timelines depend on them and on the paperwork.',
      },
      {
        q: 'Does it matter if my domain is a .com.au?',
        a: 'Yes. A .com.au domain must be held by an entity with an Australian presence, such as a business with an ABN. I check this as part of the plan.',
      },
    ],
    formTitle: 'Tell me what happened',
    formSub: 'A few lines are enough: who built the site, what you can still log in to, and what you need.',
    formService: 'Access Rescue',
    askWebsite: true,
    submitLabel: 'Ask for help',
  },

  // 3) No puedo editar: packs de ediciones
  {
    slug: 'cant-edit-my-website',
    group: 'rescue',
    cardTitle: 'Can’t edit your website?',
    cardBlurb: 'Send me the change by email and I update your site. Packs of small edits from A$30.',
    cardFrom: 'from A$30 / edit',
    metaTitle: 'Website Edits Done For You | Update Packs | Sydney | Pablo Kohler',
    metaDescription: `Can't edit your own website? Email me the change and I update it. Update packs for Sydney and Australian small businesses on ${PLATFORMS}. From A$30 per edit.`,
    eyebrow: 'Update packs',
    h1: 'Can’t edit your website?',
    h1Accent: 'Just email me the change.',
    sub: `New opening hours, a price change, a new photo, a team member. For businesses on ${PLATFORMS}: send me the change and I update the site. No logins to figure out, no waiting weeks.`,
    cta: 'Choose an update pack',
    problemsTitle: 'Sound familiar?',
    problems: [
      'Every small change means chasing someone',
      'You are afraid of breaking something',
      'Opening hours and prices are out of date',
      'The person who built the site is not available',
      'You do not have time to learn the platform',
    ],
    stepsTitle: 'How it works',
    steps: [
      { title: 'Pick a pack', desc: 'Buy the number of edits that fits you. Larger jobs are quoted separately.' },
      { title: 'Email your changes', desc: 'Send the text, photos or links. Plain language is fine.' },
      { title: 'I update the site', desc: 'I make the change and confirm when it is live.' },
    ],
    plansTitle: 'Update packs',
    plans: [
      {
        name: 'Single edit',
        price: 'A$30',
        unit: 'per edit',
        blurb: 'For the odd change.',
        features: ['Text, a photo, hours, a price or a link', 'About 15 minutes of work', 'Confirmed when live'],
      },
      {
        name: '5-edit pack',
        price: 'A$140',
        unit: 'A$28 each',
        blurb: 'The most popular for regular small changes.',
        features: ['5 small edits to use as you need', 'Lower price per edit', 'Email requests, quick confirmation'],
        featured: true,
      },
      {
        name: '10-edit pack',
        price: 'A$260',
        unit: 'A$26 each',
        blurb: 'Best value if your site changes often.',
        features: ['10 small edits to use as you need', 'Lowest price per edit', 'Email requests, quick confirmation'],
      },
    ],
    plansNote:
      'Prices in AUD. One edit is a small change of about 15 minutes. New pages, redesigns and new features are quoted separately. If you need changes every month, a Care Plan is better value.',
    faq: [
      {
        q: 'What counts as one edit?',
        a: 'A small, self-contained change: updating text, swapping a photo, changing hours or a price, fixing a link. If something is bigger, I will tell you before I start.',
      },
      {
        q: 'Which platforms do you work with?',
        a: `${PLATFORMS}.`,
      },
      {
        q: 'Do you need my login?',
        a: 'I need access to edit the site. I never ask you to email passwords: we set it up safely, and if you have lost access, Access Rescue can help.',
      },
    ],
    formTitle: 'Tell me about your site',
    formSub: 'Send the website address and the kind of changes you usually need. I will recommend a pack.',
    formService: 'Update packs',
    askWebsite: true,
    submitLabel: 'Ask about update packs',
  },

  // 4) Quiero aprender: sesión 1:1
  {
    slug: 'learn-to-edit-your-website',
    group: 'rescue',
    cardTitle: 'Learn to edit your website',
    cardBlurb: 'A friendly 60-minute session on your real site, so you can make simple changes yourself.',
    cardFrom: 'from A$115',
    metaTitle: 'Learn to Edit Your Own Website | 1:1 Training | Pablo Kohler',
    metaDescription: `One-on-one website training for Sydney and Australian business owners on ${PLATFORMS}. Learn to change text, photos, hours and prices yourself. From A$115.`,
    eyebrow: 'Website training',
    h1: 'Learn to edit your own',
    h1Accent: 'website.',
    sub: 'One friendly 60-minute session on your real site. I show you how to change text, photos, hours and prices yourself, and you can ask anything. Online, and tailored to your site, not a generic tutorial.',
    cta: 'Book a session',
    problemsTitle: 'Who it is for',
    problems: [
      `Your site is on ${PLATFORMS} and nobody ever showed you how it works`,
      'Online tutorials are generic and do not match your site',
      'You would rather make simple changes yourself',
      'You are not sure what is safe to touch',
      'You want to stop depending on someone else for small updates',
    ],
    stepsTitle: 'How it works',
    steps: [
      { title: 'Book and send your address', desc: 'Tell me which platform you use and what you most want to change.' },
      { title: 'I look at your site first', desc: 'So the session is about your pages, not a generic demo.' },
      { title: '60-minute live session', desc: 'You make real edits with me guiding you, and ask anything.' },
      { title: 'Your own videos (optional)', desc: 'I record 3 short videos of your most common tasks, on your own site, so you can repeat them later.' },
    ],
    plansTitle: 'Pricing',
    plans: [
      {
        name: 'Live session',
        price: 'A$115',
        unit: '60 minutes',
        blurb: 'Learn by doing, on your own site.',
        features: ['60 minutes online, one on one', 'I review your site beforehand', 'You make real edits with my help'],
      },
      {
        name: 'Session + 3 videos',
        price: 'A$175',
        unit: 'recommended',
        blurb: 'So you never forget how.',
        features: ['Everything in the live session', '3 short videos made on your own site', 'A one-page how-to cheat sheet'],
        featured: true,
      },
    ],
    plansNote: 'Prices in AUD. You will need an admin login for your site, or I can help you get one with Access Rescue.',
    faq: [
      {
        q: 'I am not technical. Is this for me?',
        a: 'Yes. That is exactly who it is for. We go at your pace and focus on the few things you actually need to change.',
      },
      {
        q: 'What if I get stuck later?',
        a: 'You can book a short follow-up, or switch to an update pack and email me the changes.',
      },
      {
        q: 'Which platforms?',
        a: `${PLATFORMS}.`,
      },
    ],
    formTitle: 'Book your session',
    formSub: 'Tell me your platform and what you want to learn. I will reply with times.',
    formService: 'Website training',
    askWebsite: true,
    submitLabel: 'Request a session',
  },

  // 5) Urgente: roto / hackeado / "no seguro"
  {
    slug: 'website-hacked-or-broken',
    group: 'rescue',
    cardTitle: 'Website hacked or broken?',
    cardBlurb: 'Strange redirects, a “Not secure” warning, or broken after an update. I find the cause and fix it.',
    cardFrom: 'from A$235',
    metaTitle: 'Hacked or Broken Website Repair | Sydney | Pablo Kohler',
    metaDescription:
      'Website hacked, broken after an update, or showing "Not secure"? Repair for Sydney and Australian small businesses. Quick fixes from A$235, hacked-site cleanup from A$1,250.',
    eyebrow: 'Website repair',
    h1: 'Website hacked, broken or',
    h1Accent: 'showing “Not secure”?',
    sub: 'Redirecting to strange pages, a warning from Google, a white screen after an update, or an expired security certificate. I find the cause, fix it and tell you how to stop it happening again.',
    cta: 'Describe the problem',
    problemsTitle: 'Common problems',
    problems: [
      'The site redirects to spam or shows strange content',
      'Your browser says “Not secure” or the certificate expired',
      'An update to a plugin or theme broke the site',
      'Your host suspended the site',
      'The site is down and nobody answers',
    ],
    stepsTitle: 'How it works',
    steps: [
      { title: 'Tell me what you see', desc: 'Describe it and send the address. Screenshots help.' },
      { title: 'Diagnosis and fixed quote', desc: 'I find the cause and give you a price before I start the repair.' },
      { title: 'Fix', desc: 'Clean, restore or repair, then harden the site.' },
      { title: 'Report and prevention', desc: 'What happened, what I did, and how to avoid a repeat, including backups and updates.' },
    ],
    plansTitle: 'Pricing',
    plans: [
      {
        name: 'Quick fix',
        price: 'A$235',
        unit: 'from',
        blurb: 'For a contained problem.',
        features: ['Broken page after an update', 'Expired or misconfigured security certificate', 'Common errors and settings problems'],
      },
      {
        name: 'Hacked site cleanup',
        price: 'A$1,250',
        unit: 'from',
        blurb: 'For a compromised site.',
        features: ['Find and remove malware and spam', 'Restore clean files and content', 'Close the way in and harden the site', 'A written report of what happened'],
        featured: true,
      },
    ],
    plansNote:
      'Prices in AUD. Fixed quote after a quick diagnosis. Complex cases, such as long-running infections or online shops that handle payments, are quoted individually. Hosted platforms like Wix and Squarespace manage security themselves, so problems there are usually about settings, the domain or access.',
    faq: [
      {
        q: 'Can you remove the Google warning?',
        a: 'After cleaning the site I help you request a review through Google Search Console. How long Google takes is up to Google.',
      },
      {
        q: 'Will I lose my content?',
        a: 'I take a copy before changing anything, and restore from a clean backup when there is one.',
      },
      {
        q: 'Is it urgent?',
        a: 'Tell me in the form, or book a call from the button at the top. I will reply as soon as I can.',
      },
    ],
    formTitle: 'What is happening?',
    formSub: 'The address and a few lines about what you see are enough to start.',
    formService: 'Website repair',
    askWebsite: true,
    submitLabel: 'Ask for a repair quote',
  },

  // 6) Sitio huérfano: me hago cargo
  {
    slug: 'website-takeover',
    group: 'rescue',
    cardTitle: 'Website with no one looking after it',
    cardBlurb: 'Built years ago and left alone? I take it over, bring it up to date and put everything in your name.',
    cardFrom: 'from A$590',
    metaTitle: 'Website Takeover for Small Business | Sydney | Pablo Kohler',
    metaDescription:
      'Website built years ago and nobody looks after it? I audit it, move it into accounts in your name, update it, set up backups and hand it over. Sydney and Australia, from A$590.',
    eyebrow: 'Website takeover',
    h1: 'Your website has no one',
    h1Accent: 'looking after it.',
    sub: 'Many small business sites were built years ago and left alone. I audit yours, move it into accounts in your name, bring it up to date, set up backups and hand you a simple guide.',
    cta: 'Start with a free control check',
    problemsTitle: 'Sound familiar?',
    problems: [
      'The site was built by a freelancer or agency who has moved on',
      'Plugins, themes or software are out of date',
      'Nobody knows where it is hosted or when it renews',
      'There are no backups',
      'It is slow and it looks dated',
    ],
    stepsTitle: 'How it works',
    steps: [
      { title: 'Free control check', desc: 'I find out who holds the domain and hosting, what the site runs on and what is out of date.' },
      { title: 'Takeover plan and quote', desc: 'A written plan and a fixed price before I touch anything.' },
      { title: 'Takeover', desc: 'Accounts in your name where possible, a backup first, then updates and security basics.' },
      { title: 'Handover', desc: 'A simple guide, your logins in a password manager and the option of a care plan.' },
    ],
    plansTitle: 'Pricing',
    plans: [
      {
        name: 'Website Takeover',
        price: 'A$590',
        unit: 'from',
        blurb: 'Bring an abandoned site back under your control.',
        features: [
          'Audit of the site, hosting and domain',
          'Move to accounts in your name (where possible)',
          'Backup first, then updates and security basics',
          'Handover guide and password manager setup',
        ],
        featured: true,
      },
    ],
    plansNote:
      'Prices in AUD. Final quote after a free control check, depending on the platform and its condition. Hosting and domain renewals are separate. Once it is in order, a Care Plan from A$120 per month keeps it that way.',
    faq: [
      {
        q: 'Do I need a redesign?',
        a: 'Not necessarily. First we get the site secure, updated and in your hands. If it also needs a new look, we can talk about a refresh or redesign afterwards.',
      },
      {
        q: 'Will anything break?',
        a: 'I take a backup before changing anything, and I update step by step so problems are caught early.',
      },
      {
        q: 'Can you work with the original developer?',
        a: 'Yes, if they are reachable and willing. If they are not, Access Rescue covers getting access.',
      },
    ],
    formTitle: 'Tell me about your site',
    formSub: 'Send the address and what you know about who built it. I will come back with a plan.',
    formService: 'Website takeover',
    askWebsite: true,
    submitLabel: 'Ask about a takeover',
  },

  // 7) Atados a una plataforma
  {
    slug: 'move-off-wix',
    group: 'rescue',
    cardTitle: 'Move off Wix or Squarespace',
    cardBlurb: 'Outgrown your site builder? I rebuild on a platform you control and keep your Google rankings.',
    cardFrom: 'from A$2,200',
    metaTitle: 'Move Off Wix or Squarespace | Sydney & Australia | Pablo Kohler',
    metaDescription:
      'Want to move your website off Wix or Squarespace without losing your Google rankings? Rebuild on a platform you control, with redirects and easy editing. Sydney and Australia, from A$2,200.',
    eyebrow: 'Move off Wix or Squarespace',
    h1: 'Move off Wix or Squarespace',
    h1Accent: 'without losing your rankings.',
    sub: 'Outgrown your site builder? I rebuild your site on a platform you control, redirect your old addresses so you keep your rankings, and give you a simple way to edit it yourself. It is what I did for She Loves Pink in Sydney.',
    cta: 'Start with a free control check',
    problemsTitle: 'Why people move',
    problems: [
      'You pay every month for features you barely use',
      'The platform limits what you can do',
      'It is hard to take your site with you or own the setup',
      'The site is slow or hard to rank on Google',
      'You want to own your content and your accounts',
    ],
    stepsTitle: 'How it works',
    steps: [
      { title: 'Free control check', desc: 'I review your current site, what is worth keeping and what your domain and hosting situation is.' },
      { title: 'Plan and quote', desc: 'Pages, features and price in writing, including a map from your old addresses to the new ones.' },
      { title: 'Rebuild with redirects', desc: 'A new site on a platform you control, with redirects so your existing rankings are protected.' },
      { title: 'Launch and handover', desc: 'A walkthrough so you can edit it yourself, or an update pack if you prefer to email me changes.' },
    ],
    plansTitle: 'Pricing',
    plans: [
      {
        name: 'Move off Wix or Squarespace',
        price: 'A$2,200',
        unit: 'from',
        blurb: 'A rebuild you own, with your rankings protected.',
        features: [
          'Up to 8 pages rebuilt on a platform you control',
          '301 redirects from your old addresses',
          'Mobile and speed tuned',
          'Training on how to edit it',
        ],
        featured: true,
      },
    ],
    plansNote:
      'Prices in AUD. Larger sites, online shops and bookings are quoted individually. Keep your current plan active until the new site is live so the redirects keep working.',
    faq: [
      {
        q: 'Will I lose my Google rankings?',
        a: 'The aim is to keep them: old addresses redirect to the new pages and I check the basics before and after launch. Nobody can guarantee rankings.',
      },
      {
        q: 'Which platform will you build on?',
        a: 'It depends on what you need and how you want to edit it. I recommend one after the control check. Whichever it is, you will own the accounts.',
      },
      {
        q: 'Can I still edit it myself?',
        a: 'Yes. You will get training, or you can use an update pack and email me the changes.',
      },
    ],
    formTitle: 'Tell me about your site',
    formSub: 'Send the address and what is frustrating you about the current platform.',
    formService: 'Move off Wix or Squarespace',
    askWebsite: true,
    submitLabel: 'Ask about moving my site',
  },
];
