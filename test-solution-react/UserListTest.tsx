/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";

import React from "react";
import {render} from "@testing-library/react";

import UserList from "../src-solution-react/UserList";

describe('UserList', () => {
  it('displays the name that is passed to it', () => {
const {container} = render(<UserList users={[
  {firstName:"Petra", lastName:"Meier"},
  {firstName:"Peter", lastName:"Miller"}]} />);

expect(container).toHaveTextContent("Petra");
expect(container).toHaveTextContent("Meier");
expect(container).toHaveTextContent("First name: PeterLast name: Miller");
  });
});
