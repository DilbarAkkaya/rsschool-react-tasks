import React, { ChangeEvent, useContext } from 'react';
import Context from '../../Context/Context';
import { ApiTypes } from '../../types';
import searchData from '../../utils';
import './search.css';

const SearchPanel = () => {
  const { state, dispatch } = useContext(Context);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: 'enter',
      payload: event.target.value,
    });
  };
  const getAllItems = () => {
    searchData('character').then((res: ApiTypes) => {
      res.results.forEach((item) => {
        if (item.name.toLowerCase().trim().includes(`${state.inputSearch.toLowerCase()}`)) {
          dispatch({
            type: 'addcards',
            payload: item,
          });
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
        value={state.inputSearch}
        onChange={handleChange}
      />
    </form>
  );
};
export default SearchPanel;
