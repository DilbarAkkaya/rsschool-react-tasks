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
            <Card
              key={item.num}
              num={item.num}
              name={item.name}
              count={item.count}
              year={item.year}
              shape={item.shape}
              color={item.color}
              size={item.size}
              favorite={item.favorite}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Main;
