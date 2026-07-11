export const NAV_LINKS = [
  { label: 'Início', href: '/' },
  { label: 'Tratamentos', href: '/tratamentos' },
  { label: 'Sobre Nós', href: '/sobre-nos' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contato', href: '/contato' },
] as const;

export const SOCIAL_LINKS = {
  whatsapp: 'https://wa.me/+5511974504495',
  facebook: '#',
  instagram: 'perfildabeleza.clinica',
  youtube: '#',
} as const;

export const CLINIC_INFO = {
  name: 'Perfil da Beleza',
  subtitle: 'Clínica de Estética',
  phone: '+55 (11) 97450-4495',
  address: 'Av. Satélite, 679 São Mateus - SP',
  email: 'contato@perfildabeleza.com.br',
} as const;

export const FOOTER_SERVICES = [
  'Tratamentos Faciais',
  'Tratamentos Corporais',
  'Tratamentos Capilares',
] as const;
