/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import React from "react";
import {screen, render} from "@testing-library/react";

import HelloWorldFunctional from "../src-solution-react/HelloWorldFunctionalComponent";

describe('HelloWorldComponent', () => {
  it('checks the displayed text', () => {
    const {container} = render(<HelloWorldFunctional/>);
    expect(screen.getByText("Hello World!")).toBeVisible();
    expect(container).toHaveTextContent("World");
  });
});
