import React from 'react';
import SearchPanel from '../component/Search/SearchPanel';
import CardApi from '../component/Card/CardApi';
import Modal from '../component/Modal/Modal';
import { IDataApi } from '../types';
import searchData from '../utils';
import Portal from '../component/Portal/Portal';
interface MainState {
  isLoaded?: boolean;
  items?: Array<IDataApi>;
  error?: Error | undefined | string;
  activeModal: boolean;
}
class Main extends React.Component<MainState, MainState> {
  constructor(props: MainState) {
    super(props);
    this.state = {
      isLoaded: false,
      items: [],
      error: undefined,
      activeModal: false,
    };
    this.getAllItems = this.getAllItems.bind(this);
    this.setModalActive = this.setModalActive.bind(this);
  }

  async getAllItems() {
    const results = await searchData('character');
    Promise.resolve(results).then((res) => {
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
          console.log('ok5', item);
          this.setState({
            isLoaded: true,
            items: findData,
          });
        } else {
          this.setState({
            isLoaded: false,
            items: findData,
          });
        }
      });
    });
  }

  setModalActive() {
    console.log("ok10")
    this.setState({activeModal: !this.state.activeModal})
  }
  render() {
    return (
      <div className="main">
        <h1>Main Page</h1>
        <div className="search-panel">
          <button  onClick={this.setModalActive}>clickme</button>
          <SearchPanel onSearchData={this.getAllItems} />
        </div>
        <div className="card-block" id="card-block" data-testid="card">
          {(this.state.items as Array<IDataApi>).map((item) => (
            <CardApi key={item.id} {...item}></CardApi>
          ))}
          <Portal>
            <Modal active={this.state.activeModal} setActive={this.setModalActive}>
              <h1>About character</h1>
            </Modal>
          </Portal>
        </div>
      </div>
    );
  }
}

export default Main;
