import React from 'react';
import { IDataForm } from '../../types';

class FormCard extends React.Component<IDataForm> {
  constructor(props: IDataForm) {
    super(props);
  }

  render() {
    const { name, file, date, position, married, gender } = this.props;
    return (
      <div className="card center">
        <h2 className="card-title">Name of employer {name}</h2>
        <img src={file} alt="employer" className="card-img" />
        <div className="card-descr">
          <p className="count">
            Date of birthday: <span>{date}</span>
          </p>
          <p className="year">
            Position: <span>{position}</span>
          </p>
          <p className="shape">
            Married: <span>{married}</span>
          </p>
          <p className="color">
            Gender: <span>{gender}</span>
          </p>
        </div>
      </div>
    );
  }
}

export default FormCard;
