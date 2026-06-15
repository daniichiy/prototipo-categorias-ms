import type { ServiceDetail } from '@/data/featuredServices';
import styles from './MoreInfoSection.module.css';
import type { SectionKey } from '../../types';
import { Accordion } from '../Accordion';

interface Props {
  otherInfo: NonNullable<ServiceDetail['otherInfo']>;
  open: boolean;
  onToggle: (id: SectionKey) => void;
}

export function MoreInfoSection({ otherInfo, open, onToggle }: Props) {
  return (
    <Accordion id="saibaMais" title="Saiba mais" open={open} onToggle={onToggle}>
      <dl className={styles.infoList}>
        {otherInfo.map((info) => (
          <div key={info.title} className={styles.infoItem}>
            <dt className={styles.infoTerm}>{info.title}</dt>
            <dd className={styles.infoDef}>{info.content}</dd>
          </div>
        ))}
      </dl>
    </Accordion>
  );
}
