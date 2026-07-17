import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Controla o scroll a cada navegação:
 *  - com hash (ex.: /#categorias) rola até o elemento correspondente. Como algumas
 *    páginas montam o conteúdo de forma assíncrona (a home carrega as categorias),
 *    tenta por alguns frames até o elemento existir.
 *  - sem hash, volta ao topo.
 */
export function ScrollToHash() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    const id = decodeURIComponent(hash.slice(1));
    let raf = 0;
    let tries = 0;

    const scrollToTarget = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'auto', block: 'start' });
        return;
      }
      // ~1s (60 frames) de tolerância para o conteúdo assíncrono renderizar.
      if (tries++ < 60) raf = requestAnimationFrame(scrollToTarget);
    };

    scrollToTarget();
    return () => cancelAnimationFrame(raf);
  }, [pathname, hash, key]);

  return null;
}
