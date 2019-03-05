import React from "react";
import expect from "must";
import { shallow } from "enzyme";

import HelloWorldFunctional from "../src-solution-react/HelloWorldFunctionalComponent";
import HelloWorldClass from "../src-solution-react/HelloWorldClassComponent";

describe('HelloWorldComponent', () => {
  it('checks the result\'s type and contents', () => {
    const functional = shallow(<HelloWorldFunctional />);

    expect(functional.text()).to.be("Hello World!");
    expect(functional.type()).to.be("p");
    expect(functional.name()).to.be("p");

    expect(functional.html()).to.be("<p>Hello World!</p>");

    const clazz = shallow(<HelloWorldClass/>);

    expect(clazz.text()).to.be("Hello World!");

    expect(clazz.type()).to.be("p");

    expect(clazz.name()).to.be("p");

    expect(clazz.html()).to.be("<p>Hello World!</p>");
  });
});
