import React from "react";
import { IDataApi } from "../types";
export type Context = {
  state: ReduserState,
  dispatch: React.Dispatch<ActionTypes>
}

export type ReduserState = {
  inputSearch: string,
  cards: IDataApi[],
  activeModal: boolean,
}


export type ActionTypes  = |  {
  type: 'enter',
  payload: string
} | {
  type: 'addcards',
  payload: IDataApi
} | {
  type: 'activemodal',
  payload: boolean
}

const Context = React.createContext<Context>({
  state: {
    inputSearch:'',
    cards: [],
    activeModal: false,
  },
  dispatch: ()=> {}
});
console.dir(Context)

export default Context;
