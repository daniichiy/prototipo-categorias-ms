import styles from './Section.module.css';
import type { SectionKey } from '../../types';
import { Accordion } from '../Accordion';

interface Props {
  description: string;
  open: boolean;
  onToggle: (id: SectionKey) => void;
}

export function DescriptionSection({ description, open, onToggle }: Props) {
  return (
    <Accordion id="descricao" title="O que é este serviço?" open={open} onToggle={onToggle}>
      <p className={styles.sectionText}>{description}</p>
    </Accordion>
  );
}
