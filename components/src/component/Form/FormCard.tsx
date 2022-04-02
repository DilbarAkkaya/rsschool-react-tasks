import React from "react";
import { IDataForm } from "../../types";

class FormCard extends React.Component<IDataForm> {
  constructor(props: IDataForm) {
    super(props);
  }
  render() {
    return (
      <div className="card" data-testid="card">
        <h2 className="card-title">Name of employer {this.props.name}</h2>
        <img
          src={require(`../../assets/employers/${this.props.file}.png`)}
          alt="employer"
          className="card-img"
        />
        <div className="card-descr">
          <p className="count">
            Date of birthday: <span>{this.props.date}</span>
          </p>
          <p className="year">
            Position: <span>{this.props.position}</span>
          </p>
          <p className="shape">
            Married: <span>{this.props.married}</span>
          </p>
          <p className="color">
            Gender: <span>{this.props.gender}</span>
          </p>
        </div>
      </div>
    );
  }
}

export default FormCard;
