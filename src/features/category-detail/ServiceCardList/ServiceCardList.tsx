import type { ServiceCard as ServiceCardType } from '@/types/category';
import { ServiceCard } from '../ServiceCard';
import styles from './ServiceCardList.module.css';

interface Props {
  cards: ServiceCardType[];
}

export function ServiceCardList({ cards }: Props) {
  if (!cards.length) {
    return <p className={styles.empty}>Nenhuma carta cadastrada nesta subcategoria.</p>;
  }
  return (
    <ul className={styles.list}>
      {cards.map((card) => (
        <li key={card.id} className={styles.cell}>
          <ServiceCard card={card} />
        </li>
      ))}
    </ul>
  );
}
