import React from 'react';
import { IDataApi } from '../../types';
import './card.css';

class CardApi extends React.Component<IDataApi> {
  constructor(props: IDataApi) {
    super(props);
  }
  render() {
    return (
      <div className="card" data-testid="card">
        <h2 className="card-title">{this.props.strDrink}</h2>
        <img src={this.props.strDrinkThumb} alt="toy" className="card-img" />
      </div>
    );
  }
}

export default CardApi;
