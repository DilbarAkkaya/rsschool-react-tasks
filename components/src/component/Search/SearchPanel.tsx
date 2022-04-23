import React, { ChangeEvent, FormEventHandler, ReactEventHandler, useContext, useEffect, useRef, useState } from 'react';
import Context from '../../Context/Context';
import { MyProps } from '../../types';
import searchData from '../../utils';
import Form from '../Form/Form';
import './search.css';

const SearchPanel = () => {
  const { state, dispatch } = useContext(Context)

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: 'enter',
      payload: event.target.value
    })
  }
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    searchData('character')
      .then((res) => {
        (res.results).forEach((item: any) => {
          if (
            item.name
              .toLowerCase()
              .trim()
              .includes(`${state.inputSearch.toLowerCase()}`)
          )
            dispatch({
              type: 'addcards',
              payload: item
            })
        })
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
      }
    export default SearchPanel;