import React, { ChangeEvent } from 'react';
import { ApiTypes } from '../../types';
import searchData from '../../utils';
import { useDispatch } from 'react-redux';
import { setSearchName } from '../../store/searchSlice';
import { addCards } from '../../store/cardSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import './search.css';

const SearchPanel = () => {
  const valueSearchInput = useSelector((state: RootState) => state.search.inputSearch);
  const dispatch = useDispatch();
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchName(event.target.value));
  };
  const getFilteredItems = () => {
    searchData().then((res: ApiTypes) => {
      res.results.forEach((item) => {
        dispatch(addCards(item));
      });
    });
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    getFilteredItems();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="search-input"
        placeholder="Search..."
        value={valueSearchInput}
        onChange={handleChange}
      />
    </form>
  );
};
export default SearchPanel;
