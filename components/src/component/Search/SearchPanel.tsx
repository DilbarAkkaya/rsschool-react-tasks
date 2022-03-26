import React, { ChangeEvent } from 'react';
import './search.css';

class SearchPanel extends React.Component {
  state = {
    value: '',
  };

  handleChange(event: ChangeEvent<HTMLInputElement>) {
    this.setState({ value: event.target.value });
  }

  componentDidMount() {
    this.setState({ value: localStorage.getItem('searchItem') });
  }

  componentWillUnmount() {
    localStorage.setItem('searchItem', this.state.value);
  }

  render() {
    return (
      <input
        type="text"
        className="search-input"
        placeholder="Search..."
        value={this.state.value}
        onChange={(event) => this.handleChange(event)}
      />
    );
  }
}

export default SearchPanel;
