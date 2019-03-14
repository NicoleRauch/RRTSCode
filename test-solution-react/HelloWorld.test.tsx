import React from "react";
import expect from "must";
import { shallow } from "enzyme";

import HelloWorldFunctional from "../src-solution-react/HelloWorldFunctionalComponent";
import HelloWorldClass from "../src-solution-react/HelloWorldClassComponent";

describe('HelloWorldComponent', () => {
  it('checks the result\'s type and contents', () => {
    const functional = shallow(<HelloWorldFunctional />);
    expect(functional.text()).to.eql("Hello World!");
    expect(functional.type()).to.eql("p");
    expect(functional.name()).to.eql("p");

    expect(functional.html()).to.eql("<p>Hello World!</p>");

        const clazz = shallow(<HelloWorldClass/>);

        expect(clazz.text()).to.eql("Hello World!");

        expect(clazz.type()).to.eql("p");

        expect(clazz.name()).to.eql("p");

        expect(clazz.html()).to.eql("<p>Hello World!</p>");
    });
});
