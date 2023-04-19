import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { removeCard, toggleCardFavorite } from '../../redux/cardsRedux';

const Card = props => {
  const dispatch = useDispatch();
  const id = props.id;

  const handleFavorite = e => {
    e.preventDefault();
    dispatch(toggleCardFavorite(id));
  }

  const handleRemove = e => {
    e.preventDefault();
    dispatch(removeCard(id));
  }
  return (
    <li className={styles.card}>{props.title}
      <div>
        <span onClick={handleFavorite} className={clsx(props.isFavorite ? "fa fa-star" : "fa fa-star-o", props.isFavorite && styles.isFavorite)} />
        <span onClick={handleRemove} className="fa fa-trash" />
      </div>
    </li>
  )
};

export default Card;