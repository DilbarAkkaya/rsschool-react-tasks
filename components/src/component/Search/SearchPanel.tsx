import React, { ChangeEvent, useContext } from 'react';
import Context from '../../Context/Context';
import { ApiTypes } from '../../types';
import searchData from '../../utils';
import { useDispatch } from 'react-redux';
import './search.css';
import { setSearchName } from '../../store/searchSlice';
import { addCards } from '../../store/cardSlice';
import { useSelector } from 'react-redux';

const SearchPanel = () => {
  const valueSearchInput = useSelector((state) => (state as any).search.inputSearch)
  const dispatch = useDispatch();
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchName(event.target.value))
  };
  const getAllItems = () => {
    searchData('character').then((res: ApiTypes) => {
      res.results.forEach((item) => {
        if (item.name.toLowerCase().trim().includes(`${valueSearchInput.toLowerCase()}`)) {
          dispatch(addCards(item));
        }
      });
    });
  };
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    getAllItems();
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
