import React, { ChangeEvent, useContext } from 'react';
import Context from '../../Context/Context';
import { ApiTypes, IDataApi } from '../../types';
import searchData from '../../utils';
import { useDispatch } from 'react-redux';
import './search.css';
import { setSearchName } from '../../store/searchSlice';
import { addCards } from '../../store/cardSlice';
import { useSelector } from 'react-redux';
import { clear } from 'console';
import { setClear } from '../../store/clearSlice';

const SearchPanel = () => {
  const valueSearchInput = useSelector((state) => (state as any).search.inputSearch);
  const searchCards = useSelector((state) => (state as any).add.cards);
  const clearedInput = useSelector((state) => (state as any).clear.isClear)
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
