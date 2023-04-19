import { useSelector } from 'react-redux';
import { getFavoriteCards } from '../../redux/cardsRedux';
import PageTitle from '../PageTitle/PageTitle';
import Card from '../Card/Card';
import styles from './Favorite.module.scss';

const Favorite = () => {
  const cards = useSelector(getFavoriteCards);

  if (cards.length === 0)
    return (
      <div className={styles.favorite}>
        <PageTitle>Favorite</PageTitle>
        <p className={styles.subtitle}>No cards yet</p>
      </div>
    )
  return (
    <div className={styles.favorite}>
      <PageTitle>Favorite</PageTitle>
      <article className={styles.column}>
        <ul className={styles.cards}>
          {cards.map(card => <Card key={card.id} isFavorite={card.isFavorite} title={card.title} id={card.id} />)}
        </ul>
      </article >
    </div>
  );
};
export default Favorite;