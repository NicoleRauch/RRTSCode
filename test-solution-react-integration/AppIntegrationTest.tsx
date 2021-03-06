import React from "react";
import {mount} from "enzyme";

import {AppComponent} from "../src-solution-redux-2/App";
import {UserActions} from "../src-solution-redux-2/reducers";

describe('App', () => {
  it('displays its user list', () => {
    const app = mount(<AppComponent users={[{firstName:"Petra", lastName:"Meier"}, {firstName:"Peter", lastName:"Miller"}]} dispatch={jest.fn()} />);

    const nameParts = app.find("span");
    expect(nameParts.map(c => c.text())).toEqual(["Petra", "Meier", "Peter", "Miller"]);
  });

  it('invokes the dispatcher with a USER_ADDED action', () => {
    const dispatcher = jest.fn();
    const app = mount(<AppComponent users={[]} dispatch={dispatcher} />);

    const button = app.find("button");
    button.simulate("click");

    expect(dispatcher).toHaveBeenCalledWith({type: UserActions.USER_ADDED, user: {firstName: "", lastName: ""}});
  });
});
