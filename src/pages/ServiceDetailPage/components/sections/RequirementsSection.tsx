import styles from './RequirementsSection.module.css';
import sectionStyles from './Section.module.css';
import type { SectionKey } from '../../types';
import { Accordion } from '../Accordion';

interface Props {
  requirements?: string[];
  open: boolean;
  onToggle: (id: SectionKey) => void;
}

export function RequirementsSection({ requirements, open, onToggle }: Props) {
  return (
    <Accordion id="documentos" title="Documentos necessários" open={open} onToggle={onToggle}>
      {requirements && requirements.length > 0 ? (
        <ul className={styles.docList}>
          {requirements.map((req, i) => (
            <li key={i} className={styles.docItem}>
              {req}
            </li>
          ))}
        </ul>
      ) : (
        <p className={sectionStyles.sectionText}>
          Não há documentos específicos exigidos além dos informados nas instruções do serviço.
        </p>
      )}
    </Accordion>
  );
}
