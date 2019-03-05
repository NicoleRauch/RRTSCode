import React from "react";
import expect from "must";

import { shallow } from "enzyme";
import User from "../src-solution-react/User";


describe('User', function () {
  it('displays the name that is passed to it', function () {
const user =
  shallow(<User firstName="Petra" lastName="Meier" />);

const nameParts = user.find("span");

expect(nameParts.length).to.be(2);

expect(nameParts.at(0).text()).to.be("Petra");
expect(nameParts.at(1).text()).to.be("Meier");

expect(nameParts.map(c => c.text()))
  .to.eql(["Petra", "Meier"]);

  });
});
