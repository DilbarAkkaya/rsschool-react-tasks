import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import { HashRouter } from 'react-router-dom';
import {Provider } from 'react-redux';
import {store} from '../store/store';


test('AboutUs', () => {
  render(
    <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,)
  const linkElement = screen.getByText(/About Us/i);
  expect(linkElement).toBeInTheDocument();
});