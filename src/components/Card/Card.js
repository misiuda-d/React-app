import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite } from '../../redux/store';

const Card = props => {
  const dispatch = useDispatch();
  const id = props.id;

  const handleFavorite = e => {
    e.preventDefault();
    dispatch(toggleCardFavorite(id));
  }
  return (
    <li className={styles.card}>{props.title}
      <span onClick={handleFavorite} className={clsx(props.isFavorite ? "fa fa-star" : "fa fa-star-o", props.isFavorite && styles.isFavorite)} />
    </li>
  )
};

export default Card;