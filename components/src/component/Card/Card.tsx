import React from 'react';
import IDataOfToys from '../../types';

class Card extends React.Component<IDataOfToys> {
  constructor(props: IDataOfToys) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2 className="card-title">{this.props.name}</h2>
        <img src="./assets/toys/{this.props.num}.png" alt="toy" className="card-img" />
        <div className="card-descr">
          <p className="count">
            Количество: <span>{this.props.count}</span>
          </p>
          <p className="year">
            Год покупки: <span>{this.props.year}</span>
          </p>
          <p className="shape">
            Форма: <span>{this.props.shape}</span>
          </p>
          <p className="color">
            Цвет: <span>{this.props.color}</span>
          </p>
          <p className="size">
            Размер: <span>{this.props.size}</span>
          </p>
          <p className="favorite">
            Любимая: <span>{this.props.favorite === true ? 'Да' : 'Нет'}</span>
          </p>
        </div>
      </div>
    );
  }
}

export default Card;
