/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";

import React from "react";
import {render} from "@testing-library/react";

import HelloWorldFunctional from "../src-solution-react/HelloWorldFunctionalComponent";
import HelloWorldClass from "../src-solution-react/HelloWorldClassComponent";

describe('HelloWorldComponent', () => {
  it('checks the displayed text (Functional Component)', () => {
    const {container} = render(<HelloWorldFunctional/>);
    expect(container).toHaveTextContent("Hello World");
  });

  it('checks the displayed text (Functional Component)', () => {
    const {container} = render(<HelloWorldClass/>);
    expect(container).toHaveTextContent("Hello World");
  });
});
