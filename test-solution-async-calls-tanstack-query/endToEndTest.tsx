/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import "whatwg-fetch";
import nock from "nock";

import React from "react";
import {render, screen} from "@testing-library/react";

import App from "../src-solution-tanstack-query/App";

const users = [
  {firstName: "Nicole", lastName: "Rauch"},
  {firstName: "Fritz", lastName: "Müller"},
  {firstName: "Klaus", lastName: "Walter"}
];

describe("Username end2end test", () => {

  afterEach(() => {
    nock.cleanAll();
    nock.restore();
  });

  it("displays all loaded users", async () => {
    const scope = nock("http://localhost")
      .get("/api/users")
      .reply(200,
        JSON.stringify(users),
      );
    /*
      .post("/api/user")
      .reply(200,
        "User successfully added.",
        {"Content-Type": "application/json"}
      );
     */

    const {container} = render(<App/>);

    await screen.findByText("Nicole")

    // you can interact with the UI here

    users.map(u => [u.firstName, u.lastName]).flat().forEach(name =>
      expect(container).toHaveTextContent(name)
    );

    scope.isDone();
  });
});
