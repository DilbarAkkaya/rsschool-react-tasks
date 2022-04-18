import React, { ChangeEvent, useState } from 'react';
import { MyType, StateIsDraw, TypeFormCard } from '../../types';
import FileInput from './FileInput';
import FormCard from './FormCard';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useMemo, useRef } from 'react';
import './form.css';


const Form = () => {
  const { register, handleSubmit, formState: { errors, isDirty}, getValues, reset } = useForm();
  const [cards, setCards] = useState<TypeFormCard[]>([]);

  function createNewCard(card: TypeFormCard) {
    setCards([...cards, card])
  }

  function checkMarried() {
    return getValues().married ? 'YES' : 'NO';
  }

  function getFile() { 
   const a = URL.createObjectURL(getValues().picture[0] as Blob);
  console.log(a)
   getValues().picture[0].src = a
  }

  const onSubmit = (data: any, event?: React.BaseSyntheticEvent) => {
    event?.preventDefault();
    getFile();
    console.log(data)
    createNewCard({
      name: getValues().name,
      file: getValues().picture[0].src,
      date: getValues().date,
      position: getValues().position,
      gender: getValues().gender,
      married: checkMarried()
    })
   // reset()
  }
  return (

    <>
      <form onSubmit={handleSubmit(onSubmit)} className="form-wrapper">
        <div className="text-field">
          <label className="text-field__label" htmlFor="name">
            Name of employer:
          </label>
          <input
            {...register('name', {
              required: 'Name is require feild',
            })}
            type="text"
            defaultValue=""
            placeholder="Name"
          />
          {errors.name && <div className="error">{errors.name.message}</div>}
          <label className="text-field__label" htmlFor="date">
            Date of birthday:
          </label>
          <input
            {...register('date', {
              required: 'Invalid date',
            })}
            type="date"
            //defaultValue="Birthday"
          />
          {errors.date && <div className="error">{errors.date.message}</div>}
          <label className="text-field__label" htmlFor="position">
            Choose a position:
          </label>
          <select
            {...register('position', {
              required: 'Position is empty'
            }
            )}
            id="position"
            defaultValue=""
          >
            <option value=""></option>
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
            <option value="Fullstack">Fullstack</option>
            <option value="Analist">Analist</option>
          </select>
          {errors.position && <div className="error">{errors.position.message}</div>}
        </div>
        <div className="text-field">
          <label className="text-field__label" htmlFor="marry">
            Married:
          </label>
          <input
            {...register('married')}
            id="marry"
            type="checkbox"
            name="married"
            defaultChecked
           // defaultValue={checkMarried()}
          />
          <label className="text-field__label">
            Gender:
            <label className="text-field__label" htmlFor="man">
              Man
            </label>
            <input
              {...register('gender')}
              id="man"
              type="radio"
              name="gender"
              defaultChecked
              defaultValue={'MALE'}
            />
            <label className="text-field__label" htmlFor="woman">
              Woman
            </label>
            <input
              {...register('gender')}
              id="woman"
              type="radio"
              name="gender"
              defaultValue={'FEMALE'}
            />
          </label>
        </div>
        <label className="text-field__label" htmlFor="file">
          Upload file:
        </label>
        <input id="file" type="file" {...register('picture')} className="text-field__label" />
        <input type="submit" value="Submit" disabled={!isDirty} 
        />
      </form>
      <div className="wrapper">
        {(cards as Array<TypeFormCard>).map((item, i: number)=> (
          <FormCard key={i} {...item}/>
      ))} 
      </div>

    </>
  );
}
export default Form;
/* const Form = () => {
  const [isDrawPicture, setIsDrawPicture] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [dateError, setDateError] = useState(false);
  const [marriedError, setMarriedError] = useState('');
  const [positionError, setPositionError] = useState(false);
  const [genderError, setGenderError] = useState(false);
  const [fileError, setFileError]=useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [cards, setCards] = useState([]);
  const { register, handleSubmit } = useForm();

  function onSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsDrawPicture(true);
    getFile();
    console.log(cards)
     createNewCard(
      console.log('4444444444444')
     // married: checkMarried(),
     // gender: selectGender(),
    ) 
    console.log('ok')
  }
  
  const fileInput = React.createRef();
  console.log(fileInput)
  function getFile() {
    const a = URL.createObjectURL(fileInput.current?.files?.[0] as Blob);
    fileInput.current?.value
      ? (fileInput.current.src = a)
      : setFileError(true);
  }

  function validate() {
    !inputName.current?.value.length
      ? setNameError(true)
      : setNameError(false);
    !inputDate.current?.value.length
      ? setDateError(true)
      : setDateError(false);
    !selectPosition.current?.value.length
      ? setPositionError(true)
      : setPositionError(false);
    if (
      inputName.current?.value.length &&
      inputDate.current?.value.length &&
      selectPosition.current?.value.length
    ) {
      setButtonDisabled(!buttonDisabled);
    }
  }

  function onSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsDrawPicture(true);
    getFile();
    console.log(cards)
    createNewCard({
      name: inputName.current?.value,
      file: fileInput.current?.src,
      date: inputDate.current?.value,
      position: selectPosition.current?.value,
      married: checkMarried(),
      gender: selectGender(),
    })
    console.log('ok')
  }
  function selectGender() {
    return radioMan.current?.checked
      ? radioMan.current?.defaultValue
      : radioWoman.current?.defaultValue;
  }

 function checkMarried() {
    return checkboxMarried.current?.checked ? 'YES' : 'NO';
  }

  function getFile() {
    const a = URL.createObjectURL(fileInput.current?.files?.[0] as Blob);
    fileInput.current?.value
      ? (fileInput.current.src = a)
      : setFileError(true);
  }
function createNewCard(card: TypeFormCard){
  setCards([...cards, card])
} 


    return (
      <>
        <form {...register} onSubmit={handleSubmit(onSubmit)} className="form-wrapper">
          <div className="text-field">
            <label className="text-field__label" htmlFor="name">
              Name of employer:
            </label>
            <input
              id="name"
              type="text"
              {...register('name')}
              defaultValue=""
              placeholder="name"
              onChange={validate}
            />
            {nameError && <div className="error">name is empty</div>}
            <label className="text-field__label" htmlFor="date">
              Date of birthday:
            </label>
            <input
              id="date"
              type="date"
              {...register('date')}
              defaultValue="birthday"
              required
              onChange={validate}
            />
            {dateError && <div className="error">invalid date</div>}
            <label className="text-field__label" htmlFor="position">
              Choose a position:
            </label>
            <select
              {...register('position')}
              name="position"
              id="position"
              defaultValue=""
              onChange={validate}
            >
              <option value=""></option>
              <option value="Frontend">Frontend</option>
              <option value="Backend">Backend</option>
              <option value="Fullstack">Fullstack</option>
              <option value="Analist">Analist</option>
            </select>
            {positionError && <div className="error">position is empty</div>}
          </div>
          <div className="text-field">
            <label className="text-field__label" htmlFor="marry">
              Married:
            </label>
            <input
              id="marry"
              type="checkbox"
              {...register('married')}
              name="married"
              defaultChecked
              defaultValue={checkMarried()}
            />
            <label className="text-field__label">
              Gender:
              <label className="text-field__label" htmlFor="man">
                Man
              </label>
              <input
                id="man"
                type="radio"
                {...register('man')}
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
                {...register('woman')}
                name="gender"
                defaultValue={'FEMALE'}
              />
            </label>
          </div>
          <FileInput refInput={} >
            {fileError && <div className="error">choose file</div>}
          </FileInput>
          <input type="submit" value="Submit" disabled={buttonDisabled} />
        </form>
        <div className="wrapper">
        {isDrawPicture && 
         (cards as Array<TypeFormCard>).map((item, i: number)=> (
            <FormCard key={i} {...item}/>
          )
        )}
        </div>
 
      </>
    );
  }

export default Form; */
/* 
class Form extends React.Component<MyType, StateIsDraw> {
  inputName: React.RefObject<HTMLInputElement>;
  inputDate: React.RefObject<HTMLInputElement>;
  selectPosition: React.RefObject<HTMLSelectElement>;
  checkboxMarried: React.RefObject<HTMLInputElement>;
  radioMan: React.RefObject<HTMLInputElement>;
  radioWoman: React.RefObject<HTMLInputElement>;
  fileInput: React.RefObject<HTMLInputElement>;
  formRef: React.RefObject<HTMLFormElement>;
  cards?: Array<TypeFormCard>;

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
      cards: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validate = this.validate.bind(this);
    this.getFile = this.getFile.bind(this);
    this.createNewCard = this.createNewCard.bind(this);
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

  handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    this.setState({ isDrawPicture: true });
    this.getFile();
    console.log(this.state.cards)
    this.createNewCard({
      name: this.inputName.current?.value,
      file:this.fileInput.current?.src,
      date:this.inputDate.current?.value,
      position:this.selectPosition.current?.value,
      married: this.checkMarried(),
      gender: this.selectGender(),
    })
    console.log('ok')
  }
  selectGender() {
    return this.radioMan.current?.checked
      ? this.radioMan.current?.defaultValue
      : this.radioWoman.current?.defaultValue;
  }

  checkMarried() {
    return this.checkboxMarried.current?.checked ? 'YES' : 'NO';
  }

  getFile() {
    const a = URL.createObjectURL(this.fileInput.current?.files?.[0] as Blob);
    this.fileInput.current?.value
      ? (this.fileInput.current.src = a)
      : this.setState({ fileError: true });
  }
createNewCard(card: TypeFormCard){
  this.setState({cards: [...this.state.cards, card] })
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
        <div className="wrapper">
        {this.state.isDrawPicture && 
         (this.state.cards as Array<TypeFormCard>).map((item, i: number)=> (
            <FormCard key={i} {...item}/>
          )
        )}
        </div>
 
      </>
    );
  }
}

export default Form;
 */