import { useCallback, useState } from 'react';

export function useSingleExpand(initial: string | null = null) {
  const [expandedId, setExpandedId] = useState<string | null>(initial);

  const toggle = useCallback((id: string) => {
    setExpandedId((current) => (current === id ? null : id));
  }, []);

  return { expandedId, toggle };
}
