import './App.css';
import Header from './component/Header/Header';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import AboutUs from './pages/AboutUs';
import NotFound from './pages/404';

function App() {
  const PATH_MAIN = '/',
    PATH_ABOUT = '/aboutus',
    PATH_404 = '404',
    PATH_OTHER = '*';
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path={PATH_MAIN} element={<Main />} />
        <Route path={PATH_ABOUT} element={<AboutUs />} />
        <Route path={PATH_404} element={<NotFound />} />
        <Route path={PATH_OTHER} element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
