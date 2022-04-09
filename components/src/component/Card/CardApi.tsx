import React from 'react';
import { IDataApi } from '../../types';
import './card.css';

class CardApi extends React.Component<IDataApi> {
  constructor(props: IDataApi) {
    super(props);
  }
  render() {
    return (
      <div className="card">
        <h2 className="card-title">{this.props.name}</h2>
        <img src={this.props.image} alt="toy" className="card-img" />
        <div className="card-descr">
          <p className="count">
            Status: <span>{this.props.status}</span>
          </p>
          <p className="year">
            Species: <span>{this.props.species}</span>
          </p>
          <p className="shape">
            Type: <span>{this.props.type}</span>
          </p>
          <p className="color">
            Gender: <span>{this.props.gender}</span>
          </p>
          <p className="size">
            Episode: <span>{this.props.episode}</span>
          </p>
        </div>
      </div>
    );
  }
}

export default CardApi;
