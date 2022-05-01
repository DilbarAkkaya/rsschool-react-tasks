import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import axios from 'axios';
import userEvent from '@testing-library/user-event';
import Main from '../pages/Main';
import {Provider } from 'react-redux';
import {store} from '../store/store';

test('Main page', () => {
  render(
    <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,)
    
  const linkElement = screen.getByText(/Main page/i);
  expect(linkElement).toBeInTheDocument();
});

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;
const hits = [
  {
    objectID: "1", title: "Angular"
  },
  {
    objectID: "2", title: "React"
  }
];
describe("App", ()=> {
  it("fetch", async ()=>{
    mockedAxios.get.mockImplementationOnce(() => Promise.resolve({data: {hits}}));
    const {getByRole, findAllByRole} = render (<Main/>);
    userEvent.click(getByRole("textbox"));
    const items = await findAllByRole("listitem");
    expect(items).toHaveLength(6);
  });
});