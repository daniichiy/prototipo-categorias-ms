export type ServiceModality = 'Digital' | 'Agendável' | 'Presencial';
export type ServiceAudience = 'Cidadão' | 'Servidor' | 'Empresa' | 'Gestão Pública';

export interface ServiceCard {
  id: string;
  title: string;
  url: string;
  agency: string;
  agencyCode: string;
  modalities?: ServiceModality[];
  audiences?: ServiceAudience[];
}

export interface Subcategory {
  id: string;
  name: string;
  count: number;
  cards: ServiceCard[];
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  count: number;
  subcategories: Subcategory[];
}
