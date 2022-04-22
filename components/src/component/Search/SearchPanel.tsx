import React, { ChangeEvent, FormEventHandler, ReactEventHandler, useContext, useEffect, useRef, useState } from 'react';
import Context from '../../Context/Context';
import { MyProps } from '../../types';
import searchData from '../../utils';
import Form from '../Form/Form';
import './search.css';

const SearchPanel = () => {
 const {state, dispatch} = useContext(Context)

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
   dispatch({
     type: 'enter',
     payload: event.target.value
   })
  }
const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) =>{
  e.preventDefault();
  console.log("mbkjndlkvb")
     searchData('character')
      .then((res) => {
        console.log(res)
        dispatch({
          type: 'addcards',
          payload: res.results[5]
        })
        console.log(  res.results
        )
      })
}
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
/* 
const SearchPanel = (props: MyProps) => {
  const [value, setValue] = useState(localStorage.getItem('searchItem') || '');
  const valueRef = useRef(value);
  valueRef.current = value;

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
    localStorage.setItem('searchItem', event.target.value);
  }

  useEffect(() => {
    return () => {
      localStorage.setItem('searchItem', valueRef.current);
    };
  }, []);

  function keyPressHandler(event: React.KeyboardEvent) {
    if (event.key === 'Enter') {
      props.onSearchData(valueRef.current);
    }
  }

  return (
    <input
      type="text"
      className="search-input"
      placeholder="Search..."
      value={value}
      onChange={handleChange}
      onKeyPress={keyPressHandler}
    />
  );
};

export default SearchPanel; */