/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";

import React from "react";
import {fireEvent, render, screen} from "@testing-library/react";

import UserCreation from "../src-solution-react/UserCreationViaInternalState";

describe('UserCreation', () => {

  it("passes the field contents to the submit callback", () => {
    const submit = jest.fn();
    render(<UserCreation submitUser={submit}/>);

    const inputs = screen.getAllByRole("textbox");
    fireEvent.blur(inputs[0], {target:{value: "Paul"}})
    fireEvent.blur(inputs[1], {target:{value: "Meier"}})
    fireEvent.click(screen.getByRole("button"));

    expect(submit).toHaveBeenNthCalledWith(1, {firstName: "Paul", lastName: "Meier"});
  });
});
