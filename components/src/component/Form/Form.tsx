import React from 'react';
import { MyType } from '../../types';
import FileInput from './FileInput';
import './form.css';

class Form extends React.Component<MyType> {
  inputName: React.RefObject<HTMLInputElement>;
  inputDate: React.RefObject<HTMLInputElement>;
  selectPosition: React.RefObject<HTMLSelectElement>;
  checkboxMarried: React.RefObject<HTMLInputElement>;
  radioMan: React.RefObject<HTMLInputElement>;
  radioWoman: React.RefObject<HTMLInputElement>;
  constructor(props: MyType) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.inputName = React.createRef();
    this.inputDate = React.createRef();
    this.selectPosition = React.createRef();
    this.checkboxMarried = React.createRef();
    this.radioMan = React.createRef();
    this.radioWoman = React.createRef();
  }

  handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    console.log(
      'INFO ' +
        this.inputName.current?.value +
        this.inputDate.current?.value +
        this.selectPosition.current?.value +
        this.checkboxMarried.current?.checked +
        this.radioMan.current?.checked +
        this.radioWoman.current?.checked
    );
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-wrapper">
        <div className="text-field">
          <label className="text-field__label">
            Name of employer:
            <input type="text" ref={this.inputName} defaultValue="name" />
          </label>
          <label className="text-field__label">
            Date of birthday:
            <input type="date" ref={this.inputDate} defaultValue="birthday" />
          </label>
          <label className="text-field__label">
            Choose a position:
            <select ref={this.selectPosition} name="position" id="position" defaultValue="">
              <option value="" disabled>
                Frontend
              </option>
              <option value="frontend">Frontend</option>
              <option value="backend">Backend</option>
              <option value="fullstack">Fullstack</option>
              <option value="analist">Analist</option>
            </select>
          </label>
        </div>
        <div className="text-field">
          <label className="text-field__label">
            Married:
            <input type="checkbox" ref={this.checkboxMarried} name="married" defaultChecked />
          </label>
          <label className="text-field__label">
            Gender:
            <label className="text-field__label">
              Man
              <input type="radio" ref={this.radioMan} name="gender" defaultChecked />
            </label>
            <label className="text-field__label">
              Woman
              <input type="radio" ref={this.radioWoman} name="gender" />
            </label>
          </label>
        </div>
        <FileInput></FileInput>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Form;
