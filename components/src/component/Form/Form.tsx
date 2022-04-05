import React from 'react';
import { MyType, StateIsDraw } from '../../types';
import FileInput from './FileInput';
import './form.css';
import FormCard from './FormCard';

class Form extends React.Component<MyType, StateIsDraw> {
  inputName: React.RefObject<HTMLInputElement>;
  inputDate: React.RefObject<HTMLInputElement>;
  selectPosition: React.RefObject<HTMLSelectElement>;
  checkboxMarried: React.RefObject<HTMLInputElement>;
  radioMan: React.RefObject<HTMLInputElement>;
  radioWoman: React.RefObject<HTMLInputElement>;
  fileInput: React.RefObject<HTMLInputElement>;
  formRef: React.RefObject<HTMLFormElement>;

  constructor(props: MyType) {
    super(props);
    this.state = {
      isDrawPicture: false,
      nameError: false,
      dateError: false,
      marriedError: '',
      positionError: false,
      genderError: false,
      fileError: false,
      buttonDisabled: true,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validate = this.validate.bind(this);
    this.inputName = React.createRef();
    this.inputDate = React.createRef();
    this.selectPosition = React.createRef();
    this.checkboxMarried = React.createRef();
    this.radioMan = React.createRef();
    this.radioWoman = React.createRef();
    this.fileInput = React.createRef();
    this.formRef = React.createRef();
  }

  validate() {
    !this.inputName.current?.value.length
      ? this.setState({ nameError: true })
      : this.setState({ nameError: false });
    !this.inputDate.current?.value.length
      ? this.setState({ dateError: true })
      : this.setState({ dateError: false });
    !this.selectPosition.current?.value.length
      ? this.setState({ positionError: true })
      : this.setState({ positionError: false });
    if (
      this.inputName.current?.value.length &&
      this.inputDate.current?.value.length &&
      this.selectPosition.current?.value.length
    ) {
      this.setState({ buttonDisabled: !this.state.buttonDisabled });
    }
  }

  /*   enableButton() {
    if (
      this.inputName.current?.value.length &&
      this.inputDate.current?.value.length &&
      this.selectPosition.current?.value &&
      this.checkboxMarried.current?.value &&
      (this.radioMan.current?.value || this.radioWoman.current?.value) &&
      this.fileInput.current?.value
    ) {
      this.setState({ buttonDisabled: !this.state.buttonDisabled });
    }
  } */
  handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    this.setState({ isDrawPicture: true });
    //this.formRef.current?.reset();
  }

  selectGender() {
    return this.radioMan.current?.checked
      ? this.radioMan.current?.defaultValue
      : this.radioWoman.current?.defaultValue;
  }

  checkMarried() {
    return this.checkboxMarried.current?.checked ? 'YES' : 'NO';
  }

  render() {
    return (
      <>
        <form ref={this.formRef} onSubmit={this.handleSubmit} className="form-wrapper">
          <div className="text-field">
            <label className="text-field__label" htmlFor="name">
              Name of employer:
            </label>
            <input
              id="name"
              type="text"
              ref={this.inputName}
              defaultValue=""
              placeholder="name"
              onChange={this.validate}
            />
            {this.state.nameError && <div className="error">name is empty</div>}
            <label className="text-field__label" htmlFor="date">
              Date of birthday:
            </label>
            <input
              id="date"
              type="date"
              ref={this.inputDate}
              defaultValue="birthday"
              required
              onChange={this.validate}
            />
            {this.state.dateError && <div className="error">invalid date</div>}
            <label className="text-field__label" htmlFor="position">
              Choose a position:
            </label>
            <select
              ref={this.selectPosition}
              name="position"
              id="position"
              defaultValue=""
              onChange={this.validate}
            >
              <option value=""></option>
              <option value="Frontend">Frontend</option>
              <option value="Backend">Backend</option>
              <option value="Fullstack">Fullstack</option>
              <option value="Analist">Analist</option>
            </select>
            {this.state.positionError && <div className="error">position is empty</div>}
          </div>
          <div className="text-field">
            <label className="text-field__label" htmlFor="marry">
              Married:
            </label>
            <input
              id="marry"
              type="checkbox"
              ref={this.checkboxMarried}
              name="married"
              defaultChecked
              defaultValue={this.checkMarried()}
            />
            <label className="text-field__label">
              Gender:
              <label className="text-field__label" htmlFor="man">
                Man
              </label>
              <input
                id="man"
                type="radio"
                ref={this.radioMan}
                name="gender"
                defaultChecked
                defaultValue={'MALE'}
              />
              <label className="text-field__label" htmlFor="woman">
                Woman
              </label>
              <input
                id="woman"
                type="radio"
                ref={this.radioWoman}
                name="gender"
                defaultValue={'FEMALE'}
              />
            </label>
          </div>
          <FileInput refInput={this.fileInput}>
            {this.state.fileError && <div className="error">choose file</div>}
          </FileInput>
          <input type="submit" value="Submit" disabled={this.state.buttonDisabled} />
        </form>
        {this.state.isDrawPicture && (
          <FormCard
            name={this.inputName.current?.value}
            file={this.fileInput.current?.value}
            date={this.inputDate.current?.value}
            position={this.selectPosition.current?.value}
            married={this.checkMarried()}
            gender={this.selectGender()}
          />
        )}
      </>
    );
  }
}

export default Form;
