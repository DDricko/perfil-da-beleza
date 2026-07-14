export interface Treatment {
  id: string;
  title: string;
  description: string;
  iconName: string;
  slug: string;
}

export interface TreatmentCategory {
  id: string;
  label: string;
  accent: 'purple' | 'gold' | 'rose' | 'teal';
  image: string;
  description: string;
  items: string[];
}
