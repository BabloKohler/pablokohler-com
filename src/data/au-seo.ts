/**
 * Títulos y meta descriptions de las landing de pablokohler.com.au.
 * Reglas: título ≤ 60 caracteres (incluye " | Pablo Kohler"), descripción ≤ 155, la palabra clave principal
 * y "Sydney" al inicio. Si falta una entrada, se usan metaTitle/metaDescription de cada página.
 * Los precios deben coincidir con los de au-services.ts / au-rescue.ts.
 */
export const AU_SEO: Record<string, { title: string; description: string }> = {
  // Servicios
  'website-redesign': {
    title: 'Website Redesign for Sydney Small Business | Pablo Kohler',
    description:
      'Refresh or redesign your Sydney business website: modern, fast, mobile-friendly and built to keep your Google rankings. Refresh from A$1,200.',
  },
  'website-care-plans': {
    title: 'Website Care Plans & Maintenance Sydney | Pablo Kohler',
    description:
      'Monthly website maintenance for Sydney small businesses: updates, backups, security and edits handled for you. Plans from A$120 a month.',
  },
  'free-website-audit': {
    title: 'Free Website Audit for Sydney Businesses | Pablo Kohler',
    description:
      'Free website audit for Sydney small businesses: speed, mobile, SEO basics and security, with a plain-English list of the top fixes.',
  },
  'web-design': {
    title: 'Website Design for Sydney Small Business | Pablo Kohler',
    description:
      'Clean, fast, mobile-friendly websites for Sydney small businesses, set up to be found on Google. New sites from A$1,500.',
  },
  'virtual-assistant': {
    title: 'Virtual Assistant for Sydney Business Owners | Pablo Kohler',
    description:
      'Virtual assistant for Sydney small business owners: inbox, scheduling, data entry and enquiries. A$35 an hour, with hour packs available.',
  },
  // Dolor: ya tengo sitio y no lo controlo
  'website-control-check': {
    title: 'Who Controls Your Website? Free Check | Pablo Kohler',
    description:
      'Not sure who owns your domain, hosting or website? Get a free control check for your Sydney or Australian business within 48 hours.',
  },
  'locked-out-of-my-website': {
    title: 'Locked Out of Your Website? Get Access Back | Pablo Kohler',
    description:
      'Lost the logins to your website or domain? Access Rescue for Sydney businesses: find who holds what and set it up in your name. From A$420.',
  },
  'cant-edit-my-website': {
    title: 'Website Edits Done For You | Sydney | Pablo Kohler',
    description:
      'Can’t edit your website? Email me the change and I update it. Update packs for WordPress, Wix, Squarespace and Shopify. From A$30.',
  },
  'learn-to-edit-your-website': {
    title: 'Learn to Edit Your Own Website | Pablo Kohler',
    description:
      'One-on-one website training for business owners on WordPress, Wix, Squarespace and Shopify. Learn to edit it yourself. From A$115.',
  },
  'website-hacked-or-broken': {
    title: 'Hacked or Broken Website Repair Sydney | Pablo Kohler',
    description:
      'Website hacked, broken after an update or showing “Not secure”? Repair for Sydney small businesses. Quick fixes from A$235.',
  },
  'website-takeover': {
    title: 'Website Takeover for Small Business | Pablo Kohler',
    description:
      'Website built years ago and nobody looks after it? I audit it, move it into accounts in your name and bring it up to date. From A$590.',
  },
  'move-off-wix': {
    title: 'Move Off Wix or Squarespace | Sydney | Pablo Kohler',
    description:
      'Move your website off Wix or Squarespace without losing your Google rankings. Rebuilt on a platform you control. From A$2,200.',
  },
  // Por rubro
  'website-design-for-tradies': {
    title: 'Website Design for Sydney Tradies | Pablo Kohler',
    description:
      'Websites for Sydney plumbers, electricians, builders and landscapers: fast on mobile, tap-to-call and quote requests. New sites from A$1,500.',
  },
  'website-design-for-health-and-wellness': {
    title: 'Website Design for Sydney Health & Wellness | Pablo Kohler',
    description:
      'Websites for Sydney dentists, physios, psychologists and therapists: clear services, practitioner profiles and easy booking. From A$1,500.',
  },
  'website-design-for-cafes-and-restaurants': {
    title: 'Websites for Sydney Cafes & Restaurants | Pablo Kohler',
    description:
      'Menu, hours, location and bookings that work on a phone. Websites for Sydney cafes, restaurants and bakeries. New sites from A$1,500.',
  },
  'website-design-for-professional-services': {
    title: 'Website Design for Sydney Professionals | Pablo Kohler',
    description:
      'Credible, clear websites for Sydney accountants, lawyers, consultants and agents, built to generate enquiries. New sites from A$1,500.',
  },
};

export const AU_HOME_SEO = {
  title: 'Web Designer for Sydney Small Businesses | Pablo Kohler',
  description:
    'Sydney-based web designer: website redesign, new sites, care plans and help for owners who can’t manage their site. Sydney and Australia-wide.',
};
