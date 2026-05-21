export interface Subcategory {
  id: string;
  name: string;
  count: number;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  count: number;
  subcategories: Subcategory[];
}
