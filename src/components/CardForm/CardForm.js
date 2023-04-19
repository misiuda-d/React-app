
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import styles from './CardForm.module.scss';

const CardForm = props => {
  const [title, setTitle] = useState('');
  const columnId = props.columnId;
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
   dispatch({ type: 'ADD_CARD', payload: { columnId: columnId, title: title } });
    setTitle('');
  };

  return (
    <form className={styles.cardForm} onSubmit={handleSubmit}>
      <TextInput value={title} onChange={e => setTitle(e.target.value)} />
      <Button>Add card</Button>
    </form>
  );
};

export default CardForm;