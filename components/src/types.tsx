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

export type MyProps = {
  onSearchData: (value: string) => void,
}

export type MyState = {
  value: string,
}

export type StateIsDraw = {
  isDrawPicture: boolean,
  nameError: boolean,
  dateError: boolean,
  positionError: boolean,
  marriedError: string,
  genderError: boolean,
  fileError: boolean,
  buttonDisabled: boolean,
  cards: TypeFormCard[]
}

export type FormProps = {
  name: string,
  date: Date,
  position: string,
}

export type MyType = Record<string, React.RefObject<HTMLInputElement>>;

export interface IDataForm {
  num?: string,
  name?: string,
  date?: string,
  position?: string,
  married?: string | boolean,
  gender?: string,
  file?: string,
  
}
export type TypeFormCard = {
  num?: string,
  name?: string,
  date?: string,
  position?: string,
  married?: string | boolean,
  gender?: string,
  file?: string,
}
export type FileProps = { refInput?: React.RefObject<HTMLInputElement> };

export type disableType = {
  buttonDisabled: boolean,
}

export interface IDataApi {
  id: number,
  name: string,
  status: string,
  species: string,
  type: string,
  gender: string,
  image: string,
  origin: {
    name: string,
    url: string,
  }
  episode: string,
  location: {
    name: string,
    url: string,
  },
}

export type SelectedProps = {
  handleClick: (id: number | null) => void;
}