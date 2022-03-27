import React from 'react';
import SearchPanel from '../component/Search/SearchPanel';
import Card from '../component/Card/Card';
import data from '../data';

class Main extends React.Component {
  render() {
    // const {cards} = props;
    return (
      <div>
        <h1>Main Page</h1>
        <div className="search-panel">
          <SearchPanel />
          {data.map((item) => (
            <Card
              key={item.num}
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
