import { useEffect } from 'react';
import { LayoutContainer } from '@/components/LayoutContainer';
import { Breadcrumb } from '@/components/Breadcrumb';
import { SUPPORT_CONTACTS, SUPPORT_EMAIL, TICKET_LINK } from './data';
import styles from './SuporteSistemasPage.module.css';

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      width="22"
      height="22"
      fill="currentColor"
      className={styles.icon}
    >
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.06 2.88 1.21 3.08c.15.2 2.09 3.2 5.07 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35zM12.05 21.5h-.01a9.4 9.4 0 0 1-4.79-1.31l-.34-.2-3.56.93.95-3.47-.22-.36a9.38 9.38 0 0 1-1.44-5.01c0-5.19 4.23-9.41 9.42-9.41 2.51 0 4.88.98 6.66 2.76a9.35 9.35 0 0 1 2.76 6.66c0 5.19-4.23 9.41-9.43 9.41zM19.83 4.09A11.3 11.3 0 0 0 12.05 1C5.8 1 .72 6.08.72 12.32c0 1.99.52 3.94 1.51 5.65L.63 24l6.18-1.62a11.3 11.3 0 0 0 5.24 1.34h.01c6.24 0 11.32-5.08 11.32-11.32 0-3.03-1.18-5.87-3.32-8.01z" />
    </svg>
  );
}

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
                  <WhatsAppIcon />
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
