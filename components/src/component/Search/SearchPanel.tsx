import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import { MyProps } from '../../types';
import './search.css';

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

export default SearchPanel;
