
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchString, updateSearchString } from '../../redux/searchStringRedux';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import styles from './SearchForm.module.scss';

const SearchForm = () => {

    const actualSearchString = useSelector(getSearchString);
    const [searchString, setSearchString] = useState(actualSearchString);
    const dispatch = useDispatch();

    const searchHandle = (e) => {
        e.preventDefault();
        dispatch(updateSearchString(searchString ));
    }

    return (
        <form className={styles.searchForm} onSubmit={searchHandle}>
            <TextInput value={searchString} onChange={e => setSearchString(e.target.value)}
                placeholder="Search..." />
            <Button>
                <span className="fa fa-search" />
            </Button>
        </form>
    );
};

export default SearchForm;