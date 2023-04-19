
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import styles from './SearchForm.module.scss';

const SearchForm = () => {

    const [searchString, setSearchString] = useState('');

    const dispatch = useDispatch();

    const searchHandle = (e) => {
        e.preventDefault();
        dispatch({ type: 'UPDATE_SEARCHSTRING', payload: searchString });
    }

    return (
        <form className={styles.searchForm} onSubmit={searchHandle}>
            <TextInput value={searchString} onChange={e => setSearchString(e.target.value)} placeholder="Search..." />
            <Button>
                <span className="fa fa-search" />
            </Button>
        </form>
    );
};

export default SearchForm;