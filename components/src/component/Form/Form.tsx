import React, { useState } from 'react';
import { FormSubmitProps, TypeFormCard } from '../../types';
import FormCard from './FormCard';
import { SubmitHandler, useForm } from 'react-hook-form';
import './form.css';

const Form = (props: FormSubmitProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
    getValues,
    reset,
  } = useForm();
  const [cards, setCards] = useState<TypeFormCard[]>([]);

  function createNewCard(card: TypeFormCard) {
    setCards([...cards, card]);
  }

  function checkMarried() {
    return getValues().married ? 'YES' : 'NO';
  }

  function getFile() {
    const newSrc = URL.createObjectURL(getValues().picture[0] as Blob);
    getValues().picture[0].src = newSrc;
  }

  const onSubmit: SubmitHandler<TypeFormCard> = (data, event?: React.BaseSyntheticEvent) => {
    event?.preventDefault();
    getFile();
    createNewCard({
      name: getValues().name,
      file: getValues().picture[0].src,
      date: getValues().date,
      position: getValues().position,
      gender: getValues().gender,
      married: checkMarried(),
    });
    reset();
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="form-wrapper">
        <div className="text-field">
          <label className="text-field__label" htmlFor="name">
            Name of employer:
          </label>
          <input
            {...register('name', {
              required: 'Name is require field',
            })}
            type="text"
            defaultValue=""
            placeholder="Name"
            id="name"
          />
          {errors.name && (
            <div role="error-name" className="error">
              {errors.name.message}
            </div>
          )}
          <label className="text-field__label" htmlFor="date">
            Date of birthday:
          </label>
          <input
            {...register('date', {
              required: 'Invalid date',
            })}
            type="date"
            id="date"
          />
          {errors.date && <div className="error">{errors.date.message}</div>}
          <label className="text-field__label" htmlFor="position">
            Choose a position:
          </label>
          <select
            {...register('position', {
              required: 'Position is empty',
            })}
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
        <input
          id="file"
          type="file"
          {...register('picture')}
          className="text-field__label"
          data-testid="file"
        />
        <button type="submit" value="Submit" disabled={!isDirty}>
          Submit
        </button>
      </form>
      <div className="wrapper">
        {(cards as Array<TypeFormCard>).map((item, i: number) => (
          <FormCard key={i} {...item} />
        ))}
      </div>
    </>
  );
};
export default Form;
