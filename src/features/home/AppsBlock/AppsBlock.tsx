import { LayoutContainer } from '@/components/LayoutContainer';
import styles from './AppsBlock.module.css';

const APPS: { label: string; tone: 'blue' | 'navy' | 'green' | 'gold' | 'red' }[] = [
  { label: 'MS Digital', tone: 'navy' },
  { label: 'Meu Detran', tone: 'blue' },
  { label: 'Educa MS', tone: 'green' },
  { label: 'Saúde MS', tone: 'blue' },
  { label: 'Telessaúde', tone: 'gold' },
  { label: 'MSGás', tone: 'navy' },
  { label: 'SANESUL', tone: 'green' },
  { label: 'Painel Aluno', tone: 'gold' },
  { label: 'IPVA Fácil', tone: 'red' },
  { label: 'PMMS Conecta', tone: 'navy' },
  { label: 'PCMS Cidadão', tone: 'red' },
  { label: 'AGRAER Campo', tone: 'green' },
];

export function AppsBlock() {
  return (
    <section id="apps" className={styles.section} aria-labelledby="apps-title">
      <LayoutContainer>
        <header className={styles.heading}>
          <h2 id="apps-title" className={styles.title}>APPS DO GOVERNO</h2>
          <p className={styles.subtitle}>Conheça os aplicativos recomendados.</p>
        </header>

        <ul className={styles.grid}>
          {APPS.map((app) => (
            <li key={app.label} className={styles.cell}>
              <button type="button" className={`${styles.tile} ${styles[`tone-${app.tone}`]}`}>
                <span className={styles.tileMark} aria-hidden="true">
                  {app.label.split(' ').map((w) => w[0]).join('').slice(0, 2)}
                </span>
                <span className={styles.tileLabel}>{app.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </LayoutContainer>
    </section>
  );
}
