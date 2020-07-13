import React from "react";

import { shallow } from "enzyme";

import User from "../src-solution-react/User";


describe('User', () => {
  it('displays the name that is passed to it', () => {
const user =
  shallow(<User firstName="Petra" lastName="Meier" />);

const nameParts = user.find("span");

expect(nameParts.length).toEqual(2);

expect(nameParts.at(0).text()).toEqual("Petra");
expect(nameParts.at(1).text()).toEqual("Meier");

expect(nameParts.map(c => c.text()))
  .toEqual(["Petra", "Meier"]);

  });
});
