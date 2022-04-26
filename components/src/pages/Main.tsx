import { useCallback, useContext, useState } from 'react';
import SearchPanel from '../component/Search/SearchPanel';
import CardApi from '../component/Card/CardApi';
import Modal from '../component/Modal/Modal';
import { IDataApi } from '../types';
import Portal from '../component/Portal/Portal';
import ErrorMessage from '../component/ErrorMessage/ErrorMessage';
import Spinner from '../component/Spinner/Spinner';
import Context from '../Context/Context';

const Main = () => {
  const { state, dispatch } = useContext(Context);
  const setModalActive = useCallback(() => {
    dispatch({
      type: 'activemodal',
      payload: true,
    });
  }, [dispatch]);
  const handleClick = useCallback(
    (id: number) => {
      const findCard = state.cards.find((el) => el.id === id) as IDataApi;
      setSelectedCard(findCard);
      setModalActive();
    },
    [state.cards, setModalActive]
  );

  const [isLoaded, setLoaded] = useState(false);
  //const [items, setItems] = useState<IDataApi[]>([]);
  const [error, setError] = useState(false);
  // const [activeModal, setActiveModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState<IDataApi | null>(null);
  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = isLoaded ? <Spinner /> : null;

  const listOfCards = (state.cards as Array<IDataApi>).map((item) => {
    return <CardApi key={item.id} {...item} handleClick={handleClick}></CardApi>;
  });

  /* async function getAllItems() {
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
            }
            setItems(findData);
            setLoaded(false);
          });
        }, 1000);
      })
      .catch(onError);
  } */
  /* 
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
    } */

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
            activeModal={state.activeModal}
            setActive={setModalActive}
            selectedCard={selectedCard}
          />
        </Portal>
      </div>
    </div>
  );
};

export default Main;
