import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./UserMenu.module.css";

const USER = {
  name: "Daniele",
  photo: "https://cataas.com/cat?width=120&height=120",
};

export function UserMenu() {
  const [open, setOpen] = useState(false);
  const [photoFailed, setPhotoFailed] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    function handlePointer(event: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    function handleKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", handlePointer);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handlePointer);
      document.removeEventListener("keydown", handleKey);
    };
  }, [open]);

  return (
    <div className={styles.root} ref={rootRef}>
      <button
        type="button"
        className={styles.trigger}
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={`Perfil de ${USER.name}`}
      >
        <span className={styles.avatar}>
          {photoFailed ? (
            <span className={styles.initials} aria-hidden="true">
              {USER.name.charAt(0)}
            </span>
          ) : (
            <img
              src={USER.photo}
              alt=""
              className={styles.avatarImg}
              onError={() => setPhotoFailed(true)}
            />
          )}
        </span>
        <span className={styles.name}>{USER.name}</span>
        <span className={`material-icons ${styles.chevron}`} aria-hidden="true">
          expand_more
        </span>
      </button>

      {open && (
        <div className={styles.menu} role="menu" aria-label="Menu do usuário">
          <Link
            to="/painel"
            className={styles.menuItem}
            role="menuitem"
            onClick={() => setOpen(false)}
          >
            <span className="material-icons" aria-hidden="true">
              space_dashboard
            </span>
            <span>Meu Painel</span>
          </Link>

          <Link
            to="/painel2"
            className={styles.menuItem}
            role="menuitem"
            onClick={() => setOpen(false)}
          >
            <span className="material-icons" aria-hidden="true">
              space_dashboard
            </span>
            <span>Meu Painel 2</span>
          </Link>

          <Link
            to="/perfis"
            className={styles.menuItem}
            role="menuitem"
            onClick={() => setOpen(false)}
          >
            <span className="material-icons" aria-hidden="true">
              groups
            </span>
            <span>Perfis do cidadão</span>
          </Link>

          <button
            type="button"
            className={styles.menuItem}
            role="menuitem"
            onClick={() => setOpen(false)}
          >
            <span className="material-icons" aria-hidden="true">
              logout
            </span>
            <span>Sair</span>
          </button>
        </div>
      )}
    </div>
  );
}
