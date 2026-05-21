import data from '@/data/categories.json';
import type { Category } from '@/types/category';

export async function fetchCategories(): Promise<Category[]> {
  return data as Category[];
}
