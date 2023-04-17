/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";

import React from "react";
import {fireEvent, render, screen} from "@testing-library/react";

import UserCreation from "../src-solution-react-2/UserCreationViaStateHook";

describe('UserCreation', () => {

  it("passes the data to the submit callback", () => {
    const submit = jest.fn();
    render(<UserCreation submitUser={submit}/>);

    const inputs = screen.getAllByRole("textbox");
    fireEvent.blur(inputs[0], {target:{value: "Paul"}})
    fireEvent.blur(inputs[1], {target:{value: "Meier"}})
    fireEvent.click(screen.getByRole("button"));

    expect(submit).toHaveBeenNthCalledWith(1, {firstName: "Paul", lastName: "Meier"});
  });

  it("oder mit getByLabelText", () => {
    const submitSpy = jest.fn();
    render(<UserCreation submitUser={submitSpy}/>);
    fireEvent.blur(screen.getByLabelText("First name:"), {target: {value: "Fritz"}});
    fireEvent.blur(screen.getByLabelText("Last name:"), {target: {value: "Müller"}});
    fireEvent.click(screen.getByRole("button"));

    expect(submitSpy).toHaveBeenCalledWith({"firstName": "Fritz", "lastName": "Müller"})
  });

});
