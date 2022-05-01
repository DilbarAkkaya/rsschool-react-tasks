import { useCallback, useContext, useState } from 'react';
import SearchPanel from '../component/Search/SearchPanel';
import CardApi from '../component/Card/CardApi';
import Modal from '../component/Modal/Modal';
import { IDataApi } from '../types';
import Portal from '../component/Portal/Portal';
import ErrorMessage from '../component/ErrorMessage/ErrorMessage';
import Spinner from '../component/Spinner/Spinner';
import { useSelector, useDispatch} from 'react-redux';
import { RootState } from '../store/store';
import { setActive } from '../store/modalSlice';

const Main = () => {
  const searchCards = useSelector((state: RootState) => state.add.cards);
  const valueSearchInput = useSelector((state: RootState) => state.search.inputSearch);
  const activeModal = useSelector((state: RootState) => state.active.isActive);
  const dispatch = useDispatch();
const setModalActive = useCallback(() => {
  dispatch(setActive(true))
  },[]);
  const handleClick = useCallback(
    (id: number) => {
      const findCard = searchCards.find((el) => el.id === id) as IDataApi;
      setSelectedCard(findCard);
      console.log(findCard)
     setModalActive();
    },
    [searchCards]
  ); 

  const [isLoaded] = useState(false);
  const [error] = useState(false);
  const [selectedCard, setSelectedCard] = useState<IDataApi | null>(null);
  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = isLoaded ? <Spinner /> : null;

  const listOfCards = (searchCards as Array<IDataApi>).filter((item) => item.name.toLowerCase().trim().includes(`${valueSearchInput.toLowerCase()}`)).map((item, index) => {
    return <CardApi key={index} {...item} handleClick={handleClick}></CardApi>;
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
         activeModal={activeModal}
            setActive={setModalActive}
            selectedCard={selectedCard} 
          />
        </Portal>
      </div>
    </div>
  );
};

export default Main;
