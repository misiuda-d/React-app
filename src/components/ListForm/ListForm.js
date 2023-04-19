import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addList, getAllLists } from '../../redux/store';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import styles from './ListForm.module.scss';


const ListForm = props => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const idNumber = useSelector(getAllLists).length + 1;
  const id = idNumber.toString();

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addList({ id, title, description }));
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