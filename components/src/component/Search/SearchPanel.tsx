import React, { ChangeEvent } from 'react';
import './search.css';
import { MyState, MyProps } from '../../types';
//import { Md5 } from 'ts-md5';

class SearchPanel extends React.Component<MyProps, MyState> {
  constructor(props: MyProps) {
    super(props);
    this.state = {
      value: '',
      isLoaded: false,
      items: [],
      error: undefined,
    };
    this.handleChange = this.handleChange.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.componentWillUnmount = this.componentWillUnmount.bind(this);
    this.searchData = this.searchData.bind(this);
    this.keyPressHandler = this.keyPressHandler.bind(this);
  }

  handleChange(event: ChangeEvent<HTMLInputElement>) {
    this.setState({ value: event.target.value });
    localStorage.setItem('searchItem', this.state.value);
  }

  componentDidMount() {
    this.setState({ value: localStorage.getItem('searchItem') as string });
  }

  componentWillUnmount() {
    localStorage.setItem('searchItem', this.state.value);
  }

  searchData() {
    /* const marvelApiStart = 'https://gateway.marvel.com:443/v1/public/characters?apikey=';
    const marvelPublicKey = 'a87f33c97fe5b731013fc345d75f2fb1';
    const marvelPrivateKey = '17eded4aa10b461a6e10e2f5f1c9b30da675358a';
    const name = 'thor';
    const ts = new Date().getTime();
    const hashInstance = Md5.hashStr(ts + marvelPrivateKey + marvelPublicKey);
    const requestUrl =
      marvelApiStart +
      marvelPublicKey +
      '&ts=' +
      ts +
      '&hash=' +
      hashInstance +
      '&nameStartsWith=' +
      name;
    console.log('5555'); */
    fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
      .then((response) => response.json())
      .then((result) => {
        this.setState({
          isLoaded: true,
          items: result.drinks,
        });
        console.log('запрос успешен');
      }),
      (error: Error) => {
        this.setState({
          isLoaded: true,
          error,
        });
      };
  }

  keyPressHandler() {
    console.log('Нажата клавиша энтер');
    this.searchData();
  }
  render() {
    return (
      <input
        type="text"
        className="search-input"
        placeholder="Search..."
        value={this.state.value}
        onChange={this.handleChange}
        onKeyDown={this.keyPressHandler}
      />
    );
  }
}

export default SearchPanel;
