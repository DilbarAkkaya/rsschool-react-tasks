import React from "react";
import { IDataApi } from "../types";
export type Context = {
  state: ReduserState,
  dispatch: React.Dispatch<ActionTypes>
}

export type ReduserState = {
  inputSearch: string,
  cards: IDataApi[]
}


export type ActionTypes  = |  {
  type: 'enter',
  payload: string
} | {
  type: 'addcards',
  payload: IDataApi
}

const Context = React.createContext<Context>({
  state: {
    inputSearch:'',
    cards: []
  },
  dispatch: ()=> {}
});
console.dir(Context)

export default Context;
