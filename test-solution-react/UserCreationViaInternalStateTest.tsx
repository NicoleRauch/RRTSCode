import React from "react";
import {shallow, ShallowWrapper} from "enzyme";

import UserCreation, {UserCreationProps, UserCreationState} from "../src-solution-react/UserCreationViaInternalState";


describe('UserCreation', () => {
  let submit: jest.Mock;
  let user: ShallowWrapper<UserCreationProps, UserCreationState, UserCreation>;

  beforeEach(() => {
    submit = jest.fn();
    user = shallow<UserCreation, UserCreationProps, UserCreationState>(<UserCreation submitUser={submit}/>);
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

    expect(submit).toHaveBeenCalled();
    expect(submit).toHaveBeenCalledTimes(1);
    expect(submit).toHaveBeenCalledWith({firstName: "Paul", lastName: "Meier"});
  });

  it("blackbox test", () => {
    const inputs = user.find("input");
    inputs.at(0).simulate("blur", {target:{value: "Paul"}});
    inputs.at(1).simulate("blur", {target:{value: "Meier"}});

    const button = user.find("button"); // .first();
    button.simulate("click");

    expect(submit).toHaveBeenNthCalledWith(1, {firstName: "Paul", lastName: "Meier"});
  });
});
