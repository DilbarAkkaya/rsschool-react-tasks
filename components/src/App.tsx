import Header from './component/Header/Header';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import AboutUs from './pages/AboutUs';
import NotFound from './pages/404';
import Form from './pages/Form';
import { PATH } from './constants/constants';
import './App.css';

function App() {
  return (
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
  );
}

export default App;
