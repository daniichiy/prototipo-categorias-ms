import { useEffect, useState } from 'react';
import { fetchCategories } from '@/services/categoriesService';
import type { Category } from '@/types/category';

interface State {
  data: Category[];
  loading: boolean;
  error: Error | null;
}

export function useCategories(): State {
  const [state, setState] = useState<State>({
    data: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    let cancelled = false;

    fetchCategories()
      .then((data) => {
        if (!cancelled) setState({ data, loading: false, error: null });
      })
      .catch((error: Error) => {
        if (!cancelled) setState({ data: [], loading: false, error });
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return state;
}
