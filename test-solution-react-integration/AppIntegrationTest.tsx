import 'jsdom-global/register'

import React from "react";
import expect from "must";
import {mount} from "enzyme";
import sinon from "sinon";

import {AppComponent} from "../src-solution-redux-4/App";
import {USER_ADDED} from "../src-solution-redux-4/reducers";

describe('App', function () {
  it('displays its user list', function () {
    const app = mount(<AppComponent users={[{firstName:"Petra", lastName:"Meier"}, {firstName:"Peter", lastName:"Miller"}]} dispatch={() => {}} />);

    const nameParts = app.find("span");
    expect(nameParts.map(c => c.text())).to.eql(["Petra", "Meier", "Peter", "Miller"]);
  });

  it('invokes the dispatcher with a USER_ADDED action', function () {
    const dispatcher = sinon.spy();
    const app = mount(<AppComponent users={[]} dispatch={dispatcher} />);

    const button = app.find("button");
    button.simulate("click");

    expect(dispatcher.getCall(0).args[0]).to.eql({type: USER_ADDED, payload: {}});
  });
});
