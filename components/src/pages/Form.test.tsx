import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import { HashRouter} from 'react-router-dom';
import {Provider } from 'react-redux';
import {store} from '../store/store';


test('Form page rendering', () => {
  render(
    <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,)
  const linkElement = screen.getByText(/Form/i);
  expect(linkElement).toBeInTheDocument();
});
