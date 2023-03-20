/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";

import React from "react";
import {fireEvent, render, screen} from "@testing-library/react";

import {AppComponent} from "../src-solution-redux-2/App";
import {UserActions} from "../src-solution-redux-2/reducers";

describe('App', () => {
  it('displays its user list', () => {
    const {container} = render(<AppComponent users={[{firstName:"Petra", lastName:"Meier"}, {firstName:"Peter", lastName:"Miller"}]} dispatch={jest.fn()} />);

    ["Petra", "Meier", "Peter", "Miller"].forEach(user =>
      expect(container).toHaveTextContent(user)
    );
  });

  it('invokes the dispatcher with a USER_ADDED action', () => {
    const dispatchSpy = jest.fn();
    render(<AppComponent users={[]} dispatch={dispatchSpy} />);

    fireEvent.click(screen.getByRole("button"));

    expect(dispatchSpy).toHaveBeenCalledWith({type: UserActions.USER_ADDED, user: {firstName: "", lastName: ""}});
  });
});
