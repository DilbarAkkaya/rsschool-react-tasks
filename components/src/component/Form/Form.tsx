import React from 'react';
import { FormProps } from '../../types';

class Form extends React.Component {
  inputName: React.RefObject<HTMLInputElement>;
  inputDate: React.RefObject<HTMLInputElement>;
  constructor(props: FormProps) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.inputName = React.createRef();
    this.inputDate = React.createRef();
  }

  handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    alert('Inpormation' + this.inputName.current?.value + this.inputDate.current?.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="card-block">
        <label>
          Employer name:
          <input type="text" ref={this.inputName} />
        </label>
        <label>
          Empolyer birthday:
          <input type="date" ref={this.inputDate} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
  /*     this.state = {
      name: '',
      date: new Date(),
    };
  } */

  /*  onValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }; */

  /* 

  render() {
    return (
      <div className="card">
        <h2>Add new employer</h2>
        <form className="form">
          <input
            type="text"
            className="form-control"
            placeholder="Enter employer's name"
            name="name"
            onChange={this.onValueChange}
          ></input>
          <input
            type="date"
            className="form-control"
            placeholder="Enter employer's birhtday"
            name="date"
            onChange={this.onValueChange}
          ></input>
          <button type="submit" className="">
            Submit
          </button>
        </form>
      </div>
    );
  }
} */
}
export default Form;
