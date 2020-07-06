import React from "react";

import { shallow } from "enzyme";

import HelloWorldFunctional from "../src-solution-react/HelloWorldFunctionalComponent";
import HelloWorldClass from "../src-solution-react/HelloWorldClassComponent";

describe('HelloWorldComponent', () => {
  it('checks the result\'s type and contents', () => {
    const functional = shallow(<HelloWorldFunctional />);
    expect(functional.text()).toEqual("Hello World!");
    expect(functional.type()).toEqual("p");
    expect(functional.name()).toEqual("p");

    expect(functional.html()).toEqual("<p>Hello World!</p>");

        const clazz = shallow(<HelloWorldClass/>);

        expect(clazz.text()).toEqual("Hello World!");

        expect(clazz.type()).toEqual("p");

        expect(clazz.name()).toEqual("p");

        expect(clazz.html()).toEqual("<p>Hello World!</p>");
    });
});
