import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addList} from '../../redux/listsRedux';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import styles from './ListForm.module.scss';


const ListForm = props => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addList({ title, description }));
    setTitle('');
    setDescription('');
  };


  return (
    <form className={styles.listForm} onSubmit={handleSubmit}>
      <span>Title:</span>
      <TextInput value={title} onChange={e => setTitle(e.target.value)} placeholder="Type title..." />
      <span>Description:</span>
      <TextInput value={description} onChange={e => setDescription(e.target.value)} placeholder="Type description..." />
      <Button>Add new column</Button>
    </form>
  );
};

export default ListForm;