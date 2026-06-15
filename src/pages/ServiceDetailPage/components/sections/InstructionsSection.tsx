import type { ServiceDetail } from '@/data/featuredServices';
import styles from './InstructionsSection.module.css';
import type { SectionKey } from '../../types';
import { Accordion } from '../Accordion';

interface Props {
  instructions: ServiceDetail['instructions'];
  open: boolean;
  onToggle: (id: SectionKey) => void;
}

export function InstructionsSection({ instructions, open, onToggle }: Props) {
  return (
    <Accordion id="instrucoes" title="Como fazer" open={open} onToggle={onToggle}>
      <ol className={styles.stepList}>
        {instructions.map((inst) => (
          <li key={inst.step} className={styles.stepItem}>
            <span className={styles.stepNumber}>{inst.step}</span>
            <div className={styles.stepBody}>
              <p className={styles.stepText}>{inst.text}</p>
              {inst.link && (
                <a
                  href={inst.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.stepLink}
                >
                  <span className="material-icons" aria-hidden="true" style={{ fontSize: 14 }}>
                    open_in_new
                  </span>
                  {inst.linkLabel ?? inst.link}
                </a>
              )}
            </div>
          </li>
        ))}
      </ol>
    </Accordion>
  );
}
