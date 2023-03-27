/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";

import React from "react";
import {fireEvent, render, screen} from "@testing-library/react";

import User from "../src-solution-react-2/UserWithHighlight";

describe('UserWithHighlight', () => {

describe('clicking leads to correct highlighting', () => {
  it('does not highlight user name without click', () => {
    render(<User user={{firstName:"Paul", lastName:"Meier"}}/>);
    expect(screen.getByTestId("firstname")).toHaveStyle({"background-color": "#FFFFFF"});
  });

  it('highlights user name on first click', () => {
    render(<User user={{firstName:"Paul", lastName:"Meier"}}/>);
    fireEvent.click(screen.getByTestId("firstname"));

    expect(screen.getByTestId("firstname")).toHaveStyle({"background-color": "#FF0000"});
  });

  it('unhighlights user name on subsequent click', () => {
    render(<User user={{firstName:"Paul", lastName:"Meier"}}/>);
    fireEvent.click(screen.getByTestId("firstname"));
    fireEvent.click(screen.getByTestId("firstname"));

    expect(screen.getByTestId("firstname")).toHaveStyle({"background-color": "#FFFFFF"});
  });
});
});
