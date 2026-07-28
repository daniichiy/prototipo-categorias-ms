import { useEffect } from 'react';
import { LayoutContainer } from '@/components/LayoutContainer';
import { Breadcrumb } from '@/components/Breadcrumb';
import { WhatsAppIcon } from '@/components/BrandIcons';
import { SUPPORT_CONTACTS, SUPPORT_EMAIL, TICKET_LINK } from './data';
import styles from './SuporteSistemasPage.module.css';

export function SuporteSistemasPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, []);

  return (
    <main id="main" className={styles.page}>
      <LayoutContainer className={styles.inner}>
        <Breadcrumb
          items={[
            { label: 'Início', to: '/' },
            { label: 'Fale Conosco', to: '/fale-conosco' },
            { label: 'Suporte a sistemas' },
          ]}
        />

        <header className={styles.heading}>
          <h1 className={styles.title}>Suporte a sistemas</h1>
        </header>

        <section className={styles.card} aria-labelledby="contatos-titulo">
          <h2 id="contatos-titulo" className={styles.cardTitle}>
            Contatos
          </h2>
          <p className={styles.cardText}>
            Confira aqui os principais contatos do suporte a sistemas, incluindo
            e-mail e telefones.
          </p>

          <ul className={styles.list}>
            {SUPPORT_CONTACTS.map((contact) => (
              <li key={contact.label} className={styles.row}>
                {contact.brandIcon === 'whatsapp' ? (
                  <WhatsAppIcon className={styles.icon} />
                ) : (
                  <span className={`material-icons ${styles.icon}`} aria-hidden="true">
                    {contact.icon}
                  </span>
                )}
                <div className={styles.rowBody}>
                  <span className={styles.label}>{contact.label}</span>
                  <a
                    href={contact.href}
                    className={styles.chip}
                    {...(contact.external
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
                  >
                    {contact.value}
                    {contact.external && (
                      <span className={`material-icons ${styles.chipIcon}`} aria-hidden="true">
                        launch
                      </span>
                    )}
                  </a>
                </div>
              </li>
            ))}
          </ul>

          <div className={styles.divider} />

          <div className={styles.row}>
            <span className={`material-icons ${styles.icon}`} aria-hidden="true">
              {SUPPORT_EMAIL.icon}
            </span>
            <div className={styles.rowBody}>
              <span className={styles.label}>{SUPPORT_EMAIL.label}</span>
              <a href={SUPPORT_EMAIL.href} className={styles.emailLink}>
                {SUPPORT_EMAIL.value}
                <span className={`material-icons ${styles.chipIcon}`} aria-hidden="true">
                  launch
                </span>
              </a>
            </div>
          </div>

          <div className={styles.divider} />

          <a
            href={TICKET_LINK.href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ticketLink}
          >
            <span className={`material-icons ${styles.chipIcon}`} aria-hidden="true">
              launch
            </span>
            {TICKET_LINK.label}
          </a>
        </section>
      </LayoutContainer>
    </main>
  );
}
