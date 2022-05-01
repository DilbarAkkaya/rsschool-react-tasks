import Header from './component/Header/Header';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import AboutUs from './pages/AboutUs';
import NotFound from './pages/404';
import Form from './pages/Form';
import { PATH } from './constants/constants';
import './App.css';

/* const initialState = {
  inputSearch: '',
  cards: [],
  activeModal: false,
  formCard: [],
};

const reducer = (state: ReduserState, action: ActionTypes) => {
  switch (action.type) {
    case 'enter':
      return { ...state, inputSearch: action.payload };
    case 'addcards':
      return { ...state, cards: [...state.cards, action.payload] };
    case 'activemodal':
      return { ...state, activeModal: action.payload };
    case 'addform':
      return { ...state, formCard: [...state.formCard, action.payload] };
    default:
      return state;
  }
}; */

function App() {
  //const [state, dispatch] = useReducer(reducer, initialState);

  return (
   // <Context.Provider value={{ state, dispatch }}>
      <div className="App">
        <Header />
        <Routes>
          <Route path={PATH.MAIN} element={<Main />} />
          <Route path={PATH.FORM} element={<Form />} />
          <Route path={PATH.ABOUT} element={<AboutUs />} />
          <Route path={PATH._404} element={<NotFound />} />
          <Route path={PATH.OTHER} element={<NotFound />} />
        </Routes>
      </div>
  //  </Context.Provider>
  );
}

export default App;
