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
}
class Main extends React.Component<MainState, MainState> {
  constructor(props: MainState) {
    super(props);
    this.state = {
      isLoaded: false,
      items: [],
      error: undefined,
    };
    this.getAllItems = this.getAllItems.bind(this);
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

  render() {
    return (
      <div className="main">
        <h1>Main Page</h1>
        <div className="search-panel">
          <SearchPanel onSearchData={this.getAllItems} />
        </div>
        <div className="card-block" id="card-block" data-testid="card">
          {(this.state.items as Array<IDataApi>).map((item) => (
            <CardApi key={item.id} {...item}></CardApi>
          ))}
          <Portal>
            <Modal>
              <h1>About character</h1>
            </Modal>
          </Portal>
        </div>
      </div>
    );
  }
}

export default Main;
