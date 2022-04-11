import React from 'react';
import { IDataApi, SelectedProps } from '../../types';
import './card.css';

interface cardApiProps extends IDataApi {
  handleClick: (id: number) => void;
}
class CardApi extends React.Component<cardApiProps> {
  constructor(props: cardApiProps) {
    super(props);

    this.handleCard = this.handleCard.bind(this)
  }

handleCard(){
  console.log('ok5555')
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
