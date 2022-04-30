import { useCallback, useContext, useState } from 'react';
import SearchPanel from '../component/Search/SearchPanel';
import CardApi from '../component/Card/CardApi';
import Modal from '../component/Modal/Modal';
import { IDataApi } from '../types';
import Portal from '../component/Portal/Portal';
import ErrorMessage from '../component/ErrorMessage/ErrorMessage';
import Spinner from '../component/Spinner/Spinner';
import { useSelector } from 'react-redux';

const Main = () => {
  const searchCards = useSelector((state) => (state as any).add.cards);
/*  const setModalActive = useCallback(() => {
    dispatch({
      type: 'activemodal',
      payload: true,
    });
  }, [dispatch]); */
  const handleClick = useCallback(
    (id: number) => {
      const findCard = searchCards.find((el: any) => el.id === id) as IDataApi;
      setSelectedCard(findCard);
     // setModalActive();
    },
    [searchCards]
  ); 

  const [isLoaded] = useState(false);
  const [error] = useState(false);
  const [selectedCard, setSelectedCard] = useState<IDataApi | null>(null);
  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = isLoaded ? <Spinner /> : null;

  const listOfCards = (searchCards as Array<IDataApi>).map((item) => {
    return <CardApi key={item.id} {...item} handleClick={handleClick}></CardApi>;
  });

  return (
    <div className="main">
      <h1>Main Page</h1>
      <div className="search-panel">
        <SearchPanel />
      </div>
      {spinner}
      <div className="card-block" id="card-block" data-testid="card">
        {listOfCards}
        {errorMessage}
        <Portal>
          <Modal
   /*          activeModal={state.activeModal}
            setActive={setModalActive}
            selectedCard={selectedCard} */
          />
        </Portal>
      </div>
    </div>
  );
};

export default Main;
