import React from 'react';
import SearchPanel from '../component/Search/SearchPanel';
import Card from '../component/Card/Card';
import data from '../data';

class Main extends React.Component {
  render() {
    return (
      <div className="main">
        <h1>Main Page</h1>
        <div className="search-panel">
          <SearchPanel />
        </div>
        <div className="card-block" id="card-block">
          {data.map((item) => (
            <Card key={item.num} {...item}></Card>
          ))}
        </div>
      </div>
    );
  }
}

export default Main;

