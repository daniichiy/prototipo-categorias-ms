import { useState, type FormEvent } from 'react';
import styles from './SearchBar.module.css';

export function SearchBar() {
  const [query, setQuery] = useState('');

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!query.trim()) return;
    window.location.hash = `q=${encodeURIComponent(query.trim())}`;
  }

  return (
    <section className={styles.section} aria-label="Buscar serviço">
      <div className={styles.inner}>
        <form className={styles.form} role="search" onSubmit={handleSubmit}>
          <label htmlFor="search-input" className={styles.label}>
            Buscar carta de serviço
          </label>
          <div className={styles.field}>
            <span className={`material-icons ${styles.icon}`} aria-hidden="true">search</span>
            <input
              id="search-input"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ex: CNH, Matrícula escolar..."
              className={styles.input}
              autoComplete="off"
            />
            <button type="submit" className={styles.submit}>
              <span>Buscar serviço</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
