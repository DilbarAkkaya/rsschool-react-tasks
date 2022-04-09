import { render, screen } from '@testing-library/react';
import App from '../../App';
import { BrowserRouter } from 'react-router-dom';

describe('Card', () => {
  it('Container for cards test', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const containerCard = screen.getAllByTestId('card');
    expect(containerCard.length).toBe(20);
  });
});