import styles from './Section.module.css';
import type { SectionKey } from '../../types';
import { Accordion } from '../Accordion';

interface Props {
  whoCanUse: string;
  open: boolean;
  onToggle: (id: SectionKey) => void;
}

export function WhoCanUseSection({ whoCanUse, open, onToggle }: Props) {
  return (
    <Accordion id="quem" title="Quem pode utilizar este serviço?" open={open} onToggle={onToggle}>
      <p className={styles.sectionText}>{whoCanUse}</p>
    </Accordion>
  );
}
