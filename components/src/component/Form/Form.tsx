import React from 'react';
import { MyState, FormProps } from '../../types';

class Form extends React.Component {
  constructor(props: FormProps) {
    super(props);
    this.state = {
      name: '',
      salary: 0,
    };
  }

  render() {
    return (
      <div className="card">
        <h2>Add new employer</h2>
        <form className="form">
          <input type="text" className="form-control" placeholder="Employer's name"></input>
          <button type="submit" className="">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
