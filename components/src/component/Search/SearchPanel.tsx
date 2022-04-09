import React, { ChangeEvent } from 'react';
import './search.css';
import { MyState, MyProps } from '../../types';

class SearchPanel extends React.Component<MyProps, MyState> {
  constructor(props: MyProps) {
    super(props);
    this.state = {
      value: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.componentWillUnmount = this.componentWillUnmount.bind(this);
    this.keyPressHandler = this.keyPressHandler.bind(this);
  }

  async handleChange(event: ChangeEvent<HTMLInputElement>) {
    await this.setState({ value: event.target.value });
    localStorage.setItem('searchItem', this.state.value);
  }

  componentDidMount() {
    this.setState({ value: localStorage.getItem('searchItem') as string });
  }

  componentWillUnmount() {
    localStorage.setItem('searchItem', this.state.value);
  }

  keyPressHandler(event: React.KeyboardEvent) {
    if (event.key === 'Enter') {
      this.props.onSearchData(this.state.value);
    }
  }
  render() {
    return (
      <input
        type="text"
        className="search-input"
        placeholder="Search..."
        value={this.state.value}
        onChange={this.handleChange}
        onKeyPress={this.keyPressHandler}
      />
    );
  }
}

export default SearchPanel;
