import React, { useState } from 'react';
import SearchPanel from '../component/Search/SearchPanel';
import CardApi from '../component/Card/CardApi';
import Modal from '../component/Modal/Modal';
import { IDataApi } from '../types';
import searchData from '../utils';
import Portal from '../component/Portal/Portal';
import ErrorMessage from '../component/ErrorMessage/ErrorMessage';
import Spinner from '../component/Spinner/Spinner';

interface MainState {
  isLoaded?: boolean;
  items?: Array<IDataApi>;
  error?: boolean;
  activeModal?: boolean;
  selectedCard?: IDataApi | null;
  onClick?: React.MouseEventHandler<HTMLElement>;
}


const Main =() => {
 const [isLoaded, setIsLoaded] = useState(false);
 const [items, setItems] = useState<IDataApi[]>([]);
 const [error, setError] = useState(false);
 const [activeModal, setActiveModal] = useState(false);
 const [selectedCard, setSelectedCard] = useState<IDataApi|null>(null);

async function getAllItems() {
    await searchData('character')
      .then((res) => {
        setIsLoaded(true)
        const dataResults: IDataApi[] = res.results;
        const findData: IDataApi[] = [];
        setTimeout(() => {
          dataResults.forEach((item) => {
            if (
              item.name
                .toLowerCase()
                .trim()
                .includes(`${localStorage.getItem('searchItem')?.toLowerCase()}`)
            ) {
              findData.push(item);
              setIsLoaded(false),
              setItems(findData);
             // console.log("state", findData[0])
            }
          });
        }, 1000);
      })
      .catch(onError);
  }

  function onError() {
    setIsLoaded(false), 
    setError(true);
  }

  function setModalActive() {
   setActiveModal(!activeModal);
  }

  function handleClick(id: number) {
    const findCard = items?.find((el) => el.id === id) as IDataApi;
    setSelectedCard(findCard);
    console.log("o", findCard)
    setModalActive();
  }
    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = isLoaded ? <Spinner /> : null;

    return (
      <div className="main">
        <h1>Main Page</h1>
        <div className="search-panel">
          <SearchPanel onSearchData={getAllItems} />
        </div>
        {spinner}
        <div className="card-block" id="card-block" data-testid="card">
          {errorMessage}
          {(items as Array<IDataApi>).map((item) => (
          //  console.log("okkkkk", items),
            <CardApi key={item.id} {...item} handleClick={handleClick}></CardApi>
          ))}
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

/* class Main extends React.Component<MainState, MainState> {
  constructor(props: MainState) {
    super(props);
    this.state = {
      isLoaded: false,
      items: [],
      error: false,
      activeModal: false,
      selectedCard: null,
    };
    this.getAllItems = this.getAllItems.bind(this);
    this.setModalActive = this.setModalActive.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.onError = this.onError.bind(this);
  }

  async getAllItems() {
    await searchData('character')
      .then((res) => {
        this.setState({ isLoaded: true });
        const dataResults: IDataApi[] = res.results;
        const findData: IDataApi[] = [];
        setTimeout(() => {
          dataResults.forEach((item) => {
            if (
              item.name
                .toLowerCase()
                .trim()
                .includes(`${localStorage.getItem('searchItem')?.toLowerCase()}`)
            ) {
              findData.push(item);
              this.setState({ isLoaded: false, items: findData });
            }
          });
        }, 1000);
      })
      .catch(this.onError);
  }

  onError() {
    this.setState({ isLoaded: false, error: true });
  }

  setModalActive() {
    this.setState({ activeModal: !this.state.activeModal });
  }

  handleClick(id: number) {
    const findCard = this.state.items?.find((el) => el.id === id);

    this.setState({ selectedCard: findCard });
    this.setModalActive();
  }

  render() {
    const errorMessage = this.state.error ? <ErrorMessage /> : null;
    const spinner = this.state.isLoaded ? <Spinner /> : null;
    return (
      <div className="main">
        <h1>Main Page</h1>
        <div className="search-panel">
          <SearchPanel onSearchData={this.getAllItems} />
        </div>
        {spinner}
        <div className="card-block" id="card-block" data-testid="card">
          {errorMessage}
          {(this.state.items as Array<IDataApi>).map((item) => (
            <CardApi key={item.id} {...item} handleClick={this.handleClick}></CardApi>
          ))}
          <Portal>
            <Modal
              active={this.state.activeModal}
              setActive={this.setModalActive}
              selectedCard={this.state.selectedCard}
            />
          </Portal>
        </div>
      </div>
    );
  }
}

export default Main;
 */