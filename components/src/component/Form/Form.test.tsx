import Form from "./Form";
import { fireEvent, screen, render } from '@testing-library/react';
import { act } from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { store } from "../../store/store";

describe('Form', () => {
  describe("with valid inputs of form", () => {
    it('calls', async () => {
      const { getByLabelText, getByRole } = render(
        <Provider store={store}>
          <Form />
        </Provider>
      )

      const file = new File(['(ia)'], 'spanchbob.png', { type: 'image/png' });
      await act(async () => {
        fireEvent.change(getByLabelText("Name of employer:"), { target: { value: "Fio" } })
        fireEvent.change(getByLabelText("Date of birthday:"), { target: { value: "12.04.1980" } })
        fireEvent.change(getByLabelText("Choose a position:"), { target: { value: "Test" } })
      })
      await act(async () => {
        userEvent.upload(screen.getByTestId("file"), file);
      })
      await act(async () => {
        fireEvent.submit(getByRole("button"));
      })
      expect(((await screen.getByTestId('file')) as HTMLInputElement).files).toHaveLength(1);
    })
  })
  describe("clickSubmit", () => {
    it("ckickbuttonsubmit", () => {
      const handleClick = jest.fn(e => e.preventDefault())
      const { getByText } = render(
        <form onSubmit={handleClick}>
          <button type="submit">Submit</button>
        </form>,
      )
      fireEvent.click(getByText(/submit/i))
      expect(handleClick).toHaveBeenCalledTimes(1)
    })
  })
  describe("events", () => {
    it("checkbox click", () => {
      const handleChange = jest.fn();
      const { container } = render(
        <input type="checkbox" onChange={handleChange} />
      );
      const checkbox = container.firstChild;
      expect(checkbox).not.toBeChecked();
      fireEvent.click(checkbox as HTMLInputElement);
      expect(handleChange).toHaveBeenCalledTimes(1);
      expect(checkbox).toBeChecked();
    })
  })
})

describe("Form submit button", () => {
  it("should have a submit button", async () => {
    await act(async () => {
      render(
      <Provider store={store}>
        <Form />
      </Provider>)
    });
    expect(screen.getByText("Submit")).toBeInTheDocument();
  });
});
