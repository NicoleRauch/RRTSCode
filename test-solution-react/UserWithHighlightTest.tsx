/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";

import React from "react";
import {fireEvent, render, screen} from "@testing-library/react";

import User from "../src-solution-react-2/UserWithHighlight";

describe('UserWithHighlight', () => {

  describe('state leads to correct highlighting', () => {
    it('does not highlight the user name when it has not been clicked', () => {
      render(<User user={{firstName:"Paul", lastName:"Meier"}}/>);

      expect(screen.getByTestId("firstname")).toHaveStyle({"background-color": "#FFFFFF"});
    });

    it('highlights the user name when the highlighted state is set to true', () => {
      render(<User user={{firstName:"Paul", lastName:"Meier"}}/>);
      fireEvent.click(screen.getByTestId("firstname"));

      expect(screen.getByTestId("firstname")).toHaveStyle({"background-color": "#FF0000"});
    });
  });
});
