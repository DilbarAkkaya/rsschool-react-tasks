import React from 'react';
import { FormProps } from '../../types';

class Form extends React.Component {
  input: React.RefObject<HTMLInputElement>;
  constructor(props: FormProps) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.input = React.createRef();
  }

  handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    alert('fffff' + this.input.current?.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Имя:
          <input type="text" ref={this.input} />
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
