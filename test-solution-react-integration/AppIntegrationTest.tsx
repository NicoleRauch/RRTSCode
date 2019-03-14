import React from "react";
import expect from "must";
import {mount} from "enzyme";
import sinon from "sinon";

import {AppComponent} from "../src-solution-redux-4/App";
import {UserActions} from "../src-solution-redux-4/reducers";

describe('App', () => {
  it('displays its user list', () => {
    const app = mount(<AppComponent users={[{firstName:"Petra", lastName:"Meier"}, {firstName:"Peter", lastName:"Miller"}]} dispatch={() => {/**/}} />);

    const nameParts = app.find("span");
    expect(nameParts.map(c => c.text())).to.eql(["Petra", "Meier", "Peter", "Miller"]);
  });

  it('invokes the dispatcher with a USER_ADDED action', () => {
    const dispatcher = sinon.spy();
    const app = mount(<AppComponent users={[]} dispatch={dispatcher} />);

    const button = app.find("button");
    button.simulate("click");

    expect(dispatcher.getCall(0).args[0]).to.eql({type: UserActions.USER_ADDED, payload: {firstName: "", lastName: ""}});
  });
});
