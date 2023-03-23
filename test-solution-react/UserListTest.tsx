/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";

import React from "react";
import {screen, render} from "@testing-library/react";

import UserList from "../src-solution-react/UserList";

describe('UserList', () => {
  it('displays the names that are passed to it', () => {
const {container} = render(<UserList users={[
  {firstName:"Petra", lastName:"Meier"},
  {firstName:"Peter", lastName:"Miller"}]} />);

expect(screen.getByText("Petra")).toBeVisible();
expect(screen.getByText("Meier")).toBeVisible();
expect(container).toHaveTextContent("First name: PeterLast name: Miller");
  });
});
