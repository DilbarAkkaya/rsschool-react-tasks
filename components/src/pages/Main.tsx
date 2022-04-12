import React from 'react';
import SearchPanel from '../component/Search/SearchPanel';
import CardApi from '../component/Card/CardApi';
import Modal from '../component/Modal/Modal';
import { IDataApi } from '../types';
import searchData from '../utils';
import Portal from '../component/Portal/Portal';
import ErrorMessage from '../component/ErrorMessage/ErrorMessage';

interface MainState {
  isLoaded?: boolean;
  items?: Array<IDataApi>;
  error?: boolean;
  activeModal?: boolean;
  selectedCard?: IDataApi | null;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

class Main extends React.Component<MainState, MainState> {
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
    await searchData('character').then((res) => {
      const dataResults: IDataApi[] = res.results;
      const findData: IDataApi[] = [];
      dataResults.forEach((item) => {
        if (
          item.name
            .toLowerCase()
            .trim()
            .includes(`${localStorage.getItem('searchItem')?.toLowerCase()}`)
        ) {
          findData.push(item);
          this.setState({
            isLoaded: true,
            items: findData,
          });
        }
      });
    }).catch(this.onError)
  }

  onError(){
    this.setState({isLoaded: false, error: true})
  }
  setModalActive() {
    this.setState({ activeModal: !this.state.activeModal })
  }

  handleClick(id: number) {
    const findCard = this.state.items?.find(el => el.id === id)

    this.setState({ selectedCard: findCard })
    this.setModalActive();
  }
  render() {
      const errorMessage = this.state.error ? <ErrorMessage /> : null;
      return (
        <div className="main">
          <h1>Main Page</h1>
          <div className="search-panel">
            <SearchPanel onSearchData={this.getAllItems} />
          </div>
          <div className="card-block" id="card-block" data-testid="card">
            {errorMessage}
            {(this.state.items as Array<IDataApi>).map((item) => (
              <CardApi key={item.id} {...item} handleClick={this.handleClick}></CardApi>
            ))}
            <Portal>
              <Modal active={this.state.activeModal} setActive={this.setModalActive} selectedCard={this.state.selectedCard}>
              </Modal>
            </Portal>
          </div>
        </div>
      );
  }
}

export default Main;
