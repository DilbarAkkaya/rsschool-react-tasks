export interface IDataOfToys {
  num?: string,
  name: string,
  count: string,
  year: string,
  shape: string,
  color: string,
  size: string,
  favorite: boolean
}

export interface IStorage {
  [key: string]: string
}
export type MyProps = { value?: string };
export type MyState = { value: string };
export type StateIsDraw = { isDrawPicture: boolean };
export type FormProps = {
  name: string,
  date: Date,
  position: string,
}
export type MyType = Record<string, React.RefObject<HTMLInputElement>>;
export interface IDataForm {
  num?: string,
  name: string,
  date: string,
  position: string,
  married: string,
  gender: string,
  file: string,
}