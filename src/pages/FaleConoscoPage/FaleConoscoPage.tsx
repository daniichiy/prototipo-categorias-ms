import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LayoutContainer } from '@/components/LayoutContainer';
import { Breadcrumb } from '@/components/Breadcrumb';
import { CONTACT_CHANNELS } from './data';
import styles from './FaleConoscoPage.module.css';

export function FaleConoscoPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, []);

  return (
    <main id="main" className={styles.page}>
      <LayoutContainer className={styles.inner}>
        <Breadcrumb
          items={[{ label: 'Início', to: '/' }, { label: 'Fale Conosco' }]}
        />

        <header className={styles.heading}>
          <h1 className={styles.title}>Fale Conosco</h1>
          <p className={styles.subtitle}>
            As informações são organizadas para facilitar o entendimento. Elas
            podem ser classificadas da seguinte forma.
          </p>
        </header>

        <ul className={styles.grid}>
          {CONTACT_CHANNELS.map((channel) => (
            <li key={channel.title} className={styles.cell}>
              <article className={styles.card}>
                <span className={`material-icons ${styles.icon}`} aria-hidden="true">
                  {channel.icon}
                </span>
                <div className={styles.body}>
                  <h2 className={styles.cardTitle}>{channel.title}</h2>
                  <p className={styles.cardText}>{channel.description}</p>
                  {channel.to ? (
                    <Link to={channel.to} className={styles.cardLink}>
                      {channel.linkLabel}
                    </Link>
                  ) : (
                    <a
                      href={channel.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.cardLink}
                    >
                      {channel.linkLabel}
                    </a>
                  )}
                </div>
              </article>
            </li>
          ))}
        </ul>
      </LayoutContainer>
    </main>
  );
}
