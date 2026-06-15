import styles from './Accordion.module.css';

interface AccordionProps<Id extends string> {
  id: Id;
  title: string;
  open: boolean;
  onToggle: (id: Id) => void;
  children: React.ReactNode;
}

export function Accordion<Id extends string>({
  id,
  title,
  open,
  onToggle,
  children,
}: AccordionProps<Id>) {
  return (
    <div className={`${styles.accordion} ${open ? styles.accordionOpen : ''}`}>
      <button
        type="button"
        className={styles.accordionHeader}
        aria-expanded={open}
        onClick={() => onToggle(id)}
      >
        <span className={styles.accordionTitle}>{title}</span>
        <span
          className={`material-icons ${styles.accordionIcon} ${open ? styles.accordionIconOpen : ''}`}
          aria-hidden="true"
        >
          expand_more
        </span>
      </button>
      <div className={styles.accordionBody} aria-hidden={!open}>
        <div className={styles.accordionBodyInner}>{children}</div>
      </div>
    </div>
  );
}
