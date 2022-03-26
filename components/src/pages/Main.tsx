import React from 'react';
import SearchPanel from '../component/Search/SearchPanel';

class Main extends React.Component {
  render() {
    return (
      <div>
        <h1>Main Page</h1>
        <div className="search-panel">
          <SearchPanel />
        </div>
      </div>
    );
  }
}

export default Main;
