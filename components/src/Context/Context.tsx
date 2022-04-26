import React from 'react';
import { IDataApi, TypeFormCard } from '../types';
export type Context = {
  state: ReduserState;
  dispatch: React.Dispatch<ActionTypes>;
};

export type ReduserState = {
  inputSearch: string;
  cards: IDataApi[];
  activeModal: boolean;
  formCard: TypeFormCard[];
};

export type ActionTypes =
  | {
      type: 'enter';
      payload: string;
    }
  | {
      type: 'addcards';
      payload: IDataApi;
    }
  | {
      type: 'activemodal';
      payload: boolean;
    }
  |  {
      type: 'addform';
      payload: TypeFormCard;
    };

const Context = React.createContext<Context>({
  state: {
    inputSearch: '',
    cards: [],
    activeModal: false,
    formCard: [],
  },
  dispatch: () => {},
});

export default Context;
