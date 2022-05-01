import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './App';
import { store } from './store/store';
import { Provider } from 'react-redux';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);
