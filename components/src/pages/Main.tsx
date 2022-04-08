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
    console.log('ok2')
    const results = await searchData('Cocktail');
    console.log('ok3', results);
    Promise.resolve(results).then((res) => {
      console.log('ok4')
      this.setState({
        isLoaded: true,
        items: results.drinks,
      });
      console.log(res);
    })
  }
  /*   searchData(value: string) {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${value}`)
      .then((response) => response.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.drinks,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  } */

  render() {
    return (
      <div className="main">
        <h1>Main Page</h1>
        <div className="search-panel">
          <SearchPanel onSearchData={this.getAllItems} />
        </div>
        <div className="card-block" id="card-block">
          {(this.state.items as Array<IDataApi>).map((item) => (
            <CardApi key={item.idDrink} {...item}></CardApi>
          ))}
        </div>
      </div>
    );
  }
}

export default Main;
