import { useMemo } from 'react';
import { useCategories } from './useCategories';
import type { Category } from '@/types/category';

interface State {
  data: Category | null;
  loading: boolean;
  error: Error | null;
  notFound: boolean;
}

export function useCategory(id: string | undefined): State {
  const { data, loading, error } = useCategories();

  return useMemo<State>(() => {
    if (loading) return { data: null, loading: true, error: null, notFound: false };
    if (error)   return { data: null, loading: false, error, notFound: false };
    if (!id)     return { data: null, loading: false, error: null, notFound: true };

    const found = data.find((c) => c.id === id) ?? null;
    return {
      data: found,
      loading: false,
      error: null,
      notFound: found === null,
    };
  }, [data, loading, error, id]);
}
