/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";

import React, {ReactElement} from "react";
import {render, screen} from "@testing-library/react";
import {IUser} from "../src-solution-react/types";

import User from "../src-solution-react/User";


describe('User', () => {
  it('displays the name that is passed to it', () => {
const {container} =
  render(<User user={{firstName:"Petra", lastName:"Meier"}} />);

expect(container).toHaveTextContent("Petra");
expect(container).toHaveTextContent("Meier");
  });

  it('we can find elements based on test-id', () => {
    type UserProps = {
      user: IUser
    }

    const User2 = ({user: {firstName, lastName}}: UserProps): ReactElement =>
        <div>
          <label>First name: </label><span data-testid="firstname">{firstName}</span><br/>
          <label>Last name: </label><span data-testid="lastname">{lastName}</span><br/>
        </div>;

  render(<User2 user={{firstName:"Petra", lastName:"Meier"}} />);

expect(screen.getByTestId("firstname")).toHaveTextContent("Petra");
expect(screen.getByTestId("lastname")).toHaveTextContent("Meier");
  });
});
