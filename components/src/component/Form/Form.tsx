import React from "react";
import { MyState, FormProps } from "../../types";

class Form extends React.Component {
  constructor(props: FormProps){
    super(props);
    this.state = {
      name: '',
      salary: 0
    }
  }

  render() {
    return (
      <div className="card">
        <h2>Add new employer</h2>
        <form className="form">

        </form>
      </div>
    )
  }
}

export default Form;