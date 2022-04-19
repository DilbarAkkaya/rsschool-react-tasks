import React from "react";
import Form from "./Form";
import {fireEvent, getByDisplayValue, getByTestId, screen, render} from '@testing-library/react';
import { act } from "react-dom/test-utils";
import { SubmitHandler } from "react-hook-form";
import userEvent from "@testing-library/user-event";

describe('Form', ()=> {
  describe("with valid inputs of form", ()=> {
    it('calls', async ()=> {
      const mockOnSubmit = jest.fn()
      const {getByLabelText, getByRole} = render(<Form onSubmit={mockOnSubmit()}/>)
      const file = new File(['(ia)'], 'spanchbob.png',{type: 'image/png'});
      await act(async()=> {
        fireEvent.change(getByLabelText("Name of employer:"), {target: {value: "Fio"}})
        fireEvent.change(getByLabelText("Date of birthday:"), {target: {value: "12.04.1980"}})
        fireEvent.change(getByLabelText("Choose a position:"), {target: {value: "Test"}})
      })
      await act(async ()=> {
        userEvent.upload(screen.getByTestId("file"), file);
      })
      await act(async ()=> {
        fireEvent.submit(getByRole("button"));
      })
      expect(mockOnSubmit).toHaveBeenCalled();
      expect(((await screen.getByTestId('file')) as HTMLInputElement).files).toHaveLength(1);
    })
  })
describe("events", ()=>{
  it("checkbox click", ()=> {
    const handleChange = jest.fn();
    const { container} = render(
      <input type="checkbox" onChange={handleChange} />
    );
    const checkbox = container.firstChild;
    expect(checkbox).not.toBeChecked();
    fireEvent.click(checkbox as HTMLInputElement);
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(checkbox).toBeChecked();
  })
})})

describe("Form submit button", () => {
  it("should have a submit button", async () => {
    await act(async () => {
      render(<Form />)
    });
    expect(screen.getByText("Submit")).toBeInTheDocument();
  });
});
