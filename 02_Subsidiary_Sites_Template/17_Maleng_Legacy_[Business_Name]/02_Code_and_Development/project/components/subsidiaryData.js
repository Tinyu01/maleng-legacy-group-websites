export const CLUSTERS = [
  {
    key: 'infrastructure',
    name: 'Infrastructure & Built Environment',
    items: [
      { label: 'Construction', subdomain: 'construction' },
      { label: 'Property', subdomain: 'property' },
      { label: 'Energy', subdomain: 'energy' },
    ],
  },
  {
    key: 'professional',
    name: 'Professional & Capital Services',
    items: [
      { label: 'Tech', subdomain: 'tech' },
      { label: 'Media', subdomain: 'media' },
      { label: 'Corporate', subdomain: 'corporate' },
      { label: 'Training', subdomain: 'training' },
      { label: 'Capital', subdomain: 'capital' },
    ],
  },
  {
    key: 'operations',
    name: 'Protection & Operations',
    items: [
      { label: 'Security', subdomain: 'security' },
      { label: 'Logistics', subdomain: 'logistics' },
      { label: 'Facility', subdomain: 'facility' },
      { label: 'Carwash', subdomain: 'carwash' },
      { label: 'Assets', subdomain: 'assets' },
    ],
  },
  {
    key: 'agri',
    name: 'Agri-Consumer & Lifestyle',
    items: [
      { label: 'Agri', subdomain: 'agri' },
      { label: 'Catering', subdomain: 'catering' },
      { label: 'Events', subdomain: 'events' },
      { label: 'Retail', subdomain: 'retail' },
    ],
  },
];

export const SUBSIDIARY_META = {
  agri: { name: 'Agri — Mopani Farms & Poultry', cluster: 'Agri-Consumer & Lifestyle' },
  assets: { name: 'Assets / The Vault', cluster: 'Protection & Operations' },
  capital: { name: 'Capital & Investments', cluster: 'Professional & Capital Services' },
  carwash: { name: 'Carwash & Grill', cluster: 'Protection & Operations' },
  catering: { name: 'Catering & Mopani Protein™', cluster: 'Agri-Consumer & Lifestyle' },
  construction: { name: 'Construction & Infrastructure', cluster: 'Infrastructure & Built Environment' },
  corporate: { name: 'Corporate Services', cluster: 'Professional & Capital Services' },
  energy: { name: 'Energy Solutions', cluster: 'Infrastructure & Built Environment' },
  events: { name: 'Event Management', cluster: 'Agri-Consumer & Lifestyle' },
  facility: { name: 'Facility Management', cluster: 'Protection & Operations' },
  logistics: { name: 'Logistics & Transport', cluster: 'Protection & Operations' },
  media: { name: 'Media & Signage', cluster: 'Professional & Capital Services' },
  property: { name: 'Property Development', cluster: 'Infrastructure & Built Environment' },
  retail: { name: 'Retail & Distribution', cluster: 'Agri-Consumer & Lifestyle' },
  security: { name: 'Security Services', cluster: 'Protection & Operations' },
  tech: { name: 'Tech & Consulting', cluster: 'Professional & Capital Services' },
  training: { name: 'Training Institute', cluster: 'Professional & Capital Services' },
};

export const getSubdomainFromHostname = (hostname) => {
  if (!hostname) return 'tech';
  const parts = hostname.toLowerCase().split('.');
  if (parts.length >= 3) return parts[0];
  return 'tech';
};

export const getSubdomainMeta = (subdomain) => {
  return SUBSIDIARY_META[subdomain] || SUBSIDIARY_META.tech;
};

export const toSubdomainUrl = (subdomain) => `https://${subdomain}.malenglegacy.co.za`;
