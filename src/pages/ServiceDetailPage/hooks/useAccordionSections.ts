import { useState, useCallback } from 'react';
import { ALL_SECTIONS, type SectionKey } from '../types';

export function useAccordionSections(initial: SectionKey[] = ['descricao']) {
  const [open, setOpen] = useState<Set<SectionKey>>(new Set(initial));

  const toggle = useCallback((key: SectionKey) => {
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  }, []);

  const isOpen = useCallback((key: SectionKey) => open.has(key), [open]);

  const openAll = useCallback(() => setOpen(new Set(ALL_SECTIONS)), []);
  const closeAll = useCallback(() => setOpen(new Set()), []);
  const replace = useCallback((keys: Iterable<SectionKey>) => setOpen(new Set(keys)), []);

  const allExpanded = ALL_SECTIONS.every((k) => open.has(k));

  return { open, isOpen, toggle, openAll, closeAll, replace, allExpanded };
}
