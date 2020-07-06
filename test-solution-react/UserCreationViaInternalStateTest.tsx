import React from "react";

import sinon, {SinonSpy} from "sinon";
import {shallow, ShallowWrapper} from "enzyme";
import UserCreation from "../src-solution-react/UserCreationViaInternalState";

describe('UserCreation', () => {
  let submit: SinonSpy;
  let user: ShallowWrapper;

  beforeEach(() => {
    submit = sinon.spy();
    user = shallow(<UserCreation submitUser={submit}/>);
  });

  it("saves the firstname to the internal state", () => {
    const input = user.find("input").at(0);
    input.simulate("blur", {target: {value: "Paul"}});

    expect(user.state("firstName")).toEqual("Paul");
  });

  it("saves the lastname to the internal state", () => {
    const input = user.find("input").at(1);
    input.simulate("blur", {target: {value: "Meier"}});

    expect(user.state("lastName")).toEqual("Meier");
  });

  it("invokes the callback handler", () => {
    user.setState({firstName: "Paul", lastName: "Meier"});
    const button = user.find("button"); // .first();
    button.simulate("click");

    expect(submit.called).toBeTruthy();
    expect(submit.calledOnce).toBeTruthy();
    expect(submit.getCall(0).args).toEqual([{firstName: "Paul", lastName: "Meier"}]); // array!
  });

  it("blackbox test", () => {
    const inputs = user.find("input");
    inputs.at(0).simulate("blur", {target:{value: "Paul"}});
    inputs.at(1).simulate("blur", {target:{value: "Meier"}});

    const button = user.find("button"); // .first();
    button.simulate("click");

    expect(submit.getCall(0).args)
      .toEqual([{firstName: "Paul", lastName: "Meier"}]);
  });
});
