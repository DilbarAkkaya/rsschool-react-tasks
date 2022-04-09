import React from 'react';
import SearchPanel from '../component/Search/SearchPanel';
import CardApi from '../component/Card/CardApi';
import { IDataApi } from '../types';
import searchData from '../utils';
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
    console.log('ok2');
    const results = await searchData(`${this.state.items}`);
    console.log('ok3', this);
    Promise.resolve(results).then((res) => {
      console.log('ok4');
      this.setState({
        isLoaded: true,
        items: results.results,
      });
      console.log(res);
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
        </div>
      </div>
    );
  }
}

export default Main;
