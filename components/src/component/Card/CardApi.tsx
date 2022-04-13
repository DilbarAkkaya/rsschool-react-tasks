import React, { useState } from 'react';
import { IDataApi } from '../../types';
import './card.css';

interface cardApiProps extends IDataApi {
  handleClick: (id: number) => void;
}


const CardApi =(props: cardApiProps) => {
  function handleCard() {
    props.handleClick(props.id);
  }
      return (
      <div className="card" onClick={handleCard}>
        <h2 className="card-title">{props.name}</h2>
        <img src={props.image} alt="toy" className="card-img" />
        <div className="card-descr">
          <p>
            Status:
            <span>{props.status}</span>
          </p>
          <p>
            Species:
            <span>{props.species}</span>
          </p>
          <p>
            Gender:
            <span>{props.gender}</span>
          </p>
        </div>
      </div>
    );
  }
/* 
class CardApi extends React.Component<cardApiProps> {
  constructor(props: cardApiProps) {
    super(props);
    this.handleCard = this.handleCard.bind(this);
  }
  handleCard() {
    this.props.handleClick(this.props.id);
  }
  render() {
    return (
      <div className="card" onClick={this.handleCard}>
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
            Gender:
            <span>{this.props.gender}</span>
          </p>
        </div>
      </div>
    );
  }
} */

export default CardApi;
