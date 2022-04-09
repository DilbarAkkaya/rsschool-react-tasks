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
          <p>
            Status:
            <span>{this.props.status}</span>
          </p>
          <p>
            Species:
            <span>{this.props.species}</span>
          </p>
          <p>
            Type:
            <span>{this.props.type}</span>
          </p>
          <p>
            Gender:
            <span>{this.props.gender}</span>
          </p>
          <ul>
            Episode:
            <li>{this.props.episode[0]}</li>
            <li>{this.props.episode[1]}</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default CardApi;
