import { useEffect, useMemo, useState } from 'react';
import { LayoutContainer } from '@/components/LayoutContainer';
import { Breadcrumb } from '@/components/Breadcrumb';
import { WhatsAppIcon } from '@/components/BrandIcons';
import { ORGANIZATIONS, ORG_INDEX_URL, type OrgContact } from './data';
import styles from './SecretariasOrgaosPage.module.css';

/** Remove acentos e caixa para busca tolerante */
function normalize(value: string) {
  return value
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase();
}

function contactHref(contact: OrgContact, value: string) {
  const digits = value.replace(/\D/g, '');
  switch (contact.kind) {
    case 'email':
      return `mailto:${value}`;
    case 'whatsapp':
      return `https://wa.me/55${digits}`;
    case 'phone':
      return `tel:${digits}`;
    default:
      return contact.href;
  }
}

function ContactIcon({ kind }: { kind: OrgContact['kind'] }) {
  if (kind === 'whatsapp') {
    return <WhatsAppIcon size={18} className={styles.icon} />;
  }
  const ligature = kind === 'email' ? 'mail' : kind === 'link' ? 'launch' : 'phone';
  return (
    <span className={`material-icons ${styles.icon}`} aria-hidden="true">
      {ligature}
    </span>
  );
}

function ContactRow({ contact }: { contact: OrgContact }) {
  return (
    <div className={styles.contact}>
      <ContactIcon kind={contact.kind} />
      <div className={styles.contactBody}>
        <span className={styles.contactLabel}>{contact.label}</span>
        {contact.kind === 'link' ? (
          contact.href ? (
            <a
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactLink}
            >
              Acessar
            </a>
          ) : (
            <span className={styles.pending}>Link a definir</span>
          )
        ) : (
          <span className={styles.values}>
            {contact.values.map((value) => (
              <a
                key={value}
                href={contactHref(contact, value)}
                className={
                  contact.kind === 'email' ? styles.contactLink : styles.chip
                }
                {...(contact.kind === 'whatsapp'
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
              >
                {value}
              </a>
            ))}
          </span>
        )}
      </div>
    </div>
  );
}

export function SecretariasOrgaosPage() {
  const [query, setQuery] = useState('');
  const [openOrg, setOpenOrg] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, []);

  const organizations = useMemo(() => {
    const term = normalize(query.trim());
    if (!term) return ORGANIZATIONS;
    return ORGANIZATIONS.filter(
      (org) =>
        normalize(org.name).includes(term) || normalize(org.acronym).includes(term),
    );
  }, [query]);

  return (
    <main id="main" className={styles.page}>
      <LayoutContainer className={styles.inner}>
        <Breadcrumb
          items={[
            { label: 'Início', to: '/' },
            { label: 'Fale Conosco', to: '/fale-conosco' },
            { label: 'Secretarias e Órgãos' },
          ]}
        />

        <header className={styles.heading}>
          <h1 className={styles.title}>Secretarias e Órgãos</h1>
        </header>

        <div className={styles.toolbar}>
          <div className={styles.search}>
            <label className={styles.srOnly} htmlFor="busca-orgaos">
              Buscar por Secretaria ou Órgão
            </label>
            <input
              id="busca-orgaos"
              type="search"
              className={styles.searchInput}
              placeholder="Buscar por Secretaria ou Órgão"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
            <span className={`material-icons ${styles.searchIcon}`} aria-hidden="true">
              search
            </span>
          </div>
        </div>

        <ul className={styles.list}>
          {organizations.map((org) => {
            const isOpen = openOrg === org.acronym;
            const panelId = `orgao-${normalize(org.acronym).replace(/\W+/g, '-')}`;

            return (
              <li key={org.acronym} className={styles.item}>
                <h3>
                  <button
                    type="button"
                    className={`${styles.trigger} ${isOpen ? styles.triggerOpen : ''}`}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenOrg(isOpen ? null : org.acronym)}
                  >
                    <span className={styles.orgName}>
                      {org.name} - {org.acronym}
                    </span>
                    <span className={`material-icons ${styles.chevron}`} aria-hidden="true">
                      {isOpen ? 'expand_less' : 'expand_more'}
                    </span>
                  </button>
                </h3>

                {isOpen && (
                  <div id={panelId} className={styles.panel}>
                    <div className={styles.contacts}>
                      {org.contacts.map((contact) => (
                        <ContactRow key={contact.label} contact={contact} />
                      ))}
                    </div>

                    <a
                      href={ORG_INDEX_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.accessLink}
                    >
                      <span className={`material-icons ${styles.linkIcon}`} aria-hidden="true">
                        launch
                      </span>
                      Acessar Secretaria
                    </a>
                  </div>
                )}
              </li>
            );
          })}

          {organizations.length === 0 && (
            <li className={styles.empty}>
              Nenhuma secretaria ou órgão encontrado para “{query}”.
            </li>
          )}
        </ul>
      </LayoutContainer>
    </main>
  );
}
