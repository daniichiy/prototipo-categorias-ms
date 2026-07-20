import { useEffect, useMemo, useState } from 'react';
import { LayoutContainer } from '@/components/LayoutContainer';
import { Breadcrumb } from '@/components/Breadcrumb';
import { PHONE_GROUPS } from './data';
import styles from './TelefonesUteisPage.module.css';

type SortDirection = 'asc' | 'desc';

/** Remove acentos e caixa para comparação/busca tolerante */
function normalize(value: string) {
  return value
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase();
}

export function TelefonesUteisPage() {
  const [activeGroupId, setActiveGroupId] = useState(PHONE_GROUPS[0].id);
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState<SortDirection>('asc');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, []);

  const activeGroup =
    PHONE_GROUPS.find((group) => group.id === activeGroupId) ?? PHONE_GROUPS[0];

  const entries = useMemo(() => {
    const term = normalize(query.trim());
    const filtered = term
      ? activeGroup.entries.filter(
          (entry) =>
            normalize(entry.service).includes(term) ||
            normalize(entry.note ?? '').includes(term) ||
            entry.phone.includes(term),
        )
      : activeGroup.entries;

    return [...filtered].sort((a, b) => {
      const compared = normalize(a.service).localeCompare(normalize(b.service));
      return sort === 'asc' ? compared : -compared;
    });
  }, [activeGroup, query, sort]);

  function handleGroupChange(id: string) {
    setActiveGroupId(id);
    setQuery('');
    setSort('asc');
  }

  return (
    <main id="main" className={styles.page}>
      <LayoutContainer className={styles.inner}>
        <Breadcrumb
          items={[
            { label: 'Início', to: '/' },
            { label: 'Fale Conosco', to: '/fale-conosco' },
            { label: 'Telefones Úteis' },
          ]}
        />

        <header className={styles.heading}>
          <h1 className={styles.title}>Telefones Úteis</h1>
          <p className={styles.subtitle}>
            Contatos de emergência e de atendimento dos órgãos do Governo de Mato
            Grosso do Sul.
          </p>
        </header>

        <div className={styles.layout}>
          <nav className={styles.sidebar} aria-label="Grupos de telefones">
            <ul className={styles.sidebarList}>
              {PHONE_GROUPS.map((group) => (
                <li key={group.id}>
                  <button
                    type="button"
                    className={`${styles.sidebarItem} ${
                      group.id === activeGroup.id ? styles.sidebarItemActive : ''
                    }`}
                    aria-current={group.id === activeGroup.id ? 'true' : undefined}
                    onClick={() => handleGroupChange(group.id)}
                  >
                    {group.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <section className={styles.content} aria-labelledby="grupo-titulo">
            <div className={styles.contentHeader}>
              <h2 id="grupo-titulo" className={styles.groupTitle}>
                {activeGroup.label}
              </h2>

              <div className={styles.search}>
                <label className={styles.srOnly} htmlFor="busca-telefones">
                  {activeGroup.searchLabel}
                </label>
                <input
                  id="busca-telefones"
                  type="search"
                  className={styles.searchInput}
                  placeholder={activeGroup.searchLabel}
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                />
                <span className={`material-icons ${styles.searchIcon}`} aria-hidden="true">
                  search
                </span>
              </div>
            </div>

            <div className={styles.tableWrapper}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th scope="col" aria-sort={sort === 'asc' ? 'ascending' : 'descending'}>
                      <button
                        type="button"
                        className={styles.sortButton}
                        onClick={() => setSort(sort === 'asc' ? 'desc' : 'asc')}
                      >
                        Serviço
                        <span className={`material-icons ${styles.sortIcon}`} aria-hidden="true">
                          {sort === 'asc' ? 'arrow_upward' : 'arrow_downward'}
                        </span>
                      </button>
                    </th>
                    <th scope="col" className={styles.phoneHeader}>
                      Telefone
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {entries.map((entry) => (
                    <tr key={`${entry.service}-${entry.phone}`}>
                      <td>
                        <span className={styles.service}>{entry.service}</span>
                        {entry.note && <span className={styles.note}>{entry.note}</span>}
                      </td>
                      <td className={styles.phoneCell}>
                        <a
                          href={`tel:${entry.phone.replace(/\D/g, '')}`}
                          className={styles.phoneLink}
                        >
                          {entry.phone}
                        </a>
                      </td>
                    </tr>
                  ))}
                  {entries.length === 0 && (
                    <tr>
                      <td colSpan={2} className={styles.empty}>
                        Nenhum telefone encontrado para “{query}”.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </LayoutContainer>
    </main>
  );
}
