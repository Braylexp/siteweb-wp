/**
 * Interfaces para el contenido del sitio web
 * Basadas en la información del PDF de CAOC
 */

export interface GeneralInfo {
  name: string;
  shortName: string;
  tagline: string;
  nit: string;
  legalStatus: string;
}

export interface ContactInfo {
  address: string;
  city: string;
  email: string;
  phone: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon?: string;
}

export interface SiteContent {
  general: GeneralInfo;
  contact: ContactInfo;
  mission: string;
  vision: string;
  objetoSocial: string;
  services: ServiceItem[];
  activities: string[];
  news?: NewsItem[];
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface NavItem {
  path?: string;
  label: string;
  submenu?: NavItem[];
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: string;
  featured_image: string;
  excerpt: string;
  content: string;
  author?: string;
  tags?: string[];
}