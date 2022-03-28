import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import { BrowserRouter } from 'react-router-dom';

test('AboutUs', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>);
    
  const linkElement = screen.getByText(/About Us/i);
  expect(linkElement).toBeInTheDocument();
});