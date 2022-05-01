import React, { ChangeEvent } from 'react';
import { ApiTypes } from '../../types';
import searchData from '../../utils';
import { useDispatch } from 'react-redux';
import './search.css';
import { setSearchName } from '../../store/searchSlice';
import { addCards } from '../../store/cardSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const SearchPanel = () => {
  const valueSearchInput = useSelector((state: RootState) => state.search.inputSearch);
  const searchCards = useSelector((state: RootState) => state.add.cards);
  const clearedInput = useSelector((state: RootState) => state.active.isActive);
  const dispatch = useDispatch();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchName(event.target.value))

  };
  const getFilteredItems = () => {
    searchData().then((res: ApiTypes) => {
      res.results.forEach((item) => {

          dispatch(addCards(item))
    //   return item.name.toLowerCase().trim().includes(`${valueSearchInput.toLowerCase()}`)
      });
 
    });
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    getFilteredItems()
  //  dispatch(addCards(getFilteredItems()))
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
