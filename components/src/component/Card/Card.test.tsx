import { render, screen } from '@testing-library/react';
import App from '../../App';
import { HashRouter } from 'react-router-dom';
import {Provider } from 'react-redux';
import {store} from '../../store/store';

describe('Card', () => {
  it('Container for cards test', () => {
    render(
      <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
    );
    const containerCard = screen.getAllByTestId('card');
    expect(containerCard.length).toBe(1);
  });
});