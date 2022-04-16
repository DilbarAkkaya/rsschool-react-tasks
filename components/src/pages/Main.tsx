import React, { useEffect, useState } from 'react';
import SearchPanel from '../component/Search/SearchPanel';
import CardApi from '../component/Card/CardApi';
import Modal from '../component/Modal/Modal';
import { IDataApi } from '../types';
import searchData from '../utils';
import Portal from '../component/Portal/Portal';
import ErrorMessage from '../component/ErrorMessage/ErrorMessage';
import Spinner from '../component/Spinner/Spinner';

const Main = () => {
  const [isLoaded, setLoaded] = useState(false);
  const [items, setItems] = useState<IDataApi[]>([]);
  const [error, setError] = useState(false);
  const [activeModal, setActiveModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState<IDataApi | null>(null);

  async function getAllItems() {
    await searchData('character')
      .then((res) => {
        setLoaded(true);
        const dataResults: IDataApi[] = res.results;
        let findData: IDataApi[] = [];
        setTimeout(() => {
          dataResults.forEach((item) => {
            if (
              item.name
                .toLowerCase()
                .trim()
                .includes(`${localStorage.getItem('searchItem')?.toLowerCase()}`)
            ) {
              findData = [...findData, item];
              console.log('after setItems', findData)
            }
            setItems(findData);
            setLoaded(false)
          });
        }, 1000);
      })
      .catch(onError);
  }

  function onError() {
    setLoaded(false);
    setError(true);
  }

  function setModalActive() {
    setActiveModal(!activeModal);
  }

  function handleClick(id: number) {
    const findCard = items?.find((el) => el.id === id) as IDataApi;
    setSelectedCard(findCard);
    setModalActive();
  }


  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = isLoaded ? <Spinner /> : null;
  const listOfCards = (items as Array<IDataApi>).map((item) => {
    return (
      <CardApi key={item.id} {...item} handleClick={handleClick}></CardApi>
    )
  });
  return (
    <div className="main">
      <h1>Main Page</h1>
      <div className="search-panel">
        <SearchPanel onSearchData={getAllItems} />
      </div>
      {spinner}
      <div className="card-block" id="card-block" data-testid="card">
        {errorMessage}
        {listOfCards}
        <Portal>
          <Modal
            active={activeModal}
            setActive={setModalActive}
            selectedCard={selectedCard}
          />
        </Portal>
      </div>
    </div>
  );
}

export default Main;
