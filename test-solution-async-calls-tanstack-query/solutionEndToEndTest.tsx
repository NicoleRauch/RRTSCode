/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import "whatwg-fetch";
import nock from "nock";

import React from "react";
import {fireEvent, render, screen} from "@testing-library/react";

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
      ).get("/api/users")
      .reply(200,
        JSON.stringify(users.concat({firstName: "Hans", lastName: "Dampf"})),
      ).post("/api/user",
        JSON.stringify({firstName: "Hans", lastName: "Dampf"})
        )
      .reply(200,
        "User successfully added.",
        {"Content-Type": "application/json"}
      );

    const {container} = render(<App/>);

    await screen.findByText("Nicole")

    // you can interact with the UI here
    fireEvent.blur(screen.getByTestId("firstname"), {target: {value: "Hans"}});
    fireEvent.blur(screen.getByTestId("lastname"), {target: {value: "Dampf"}});
    fireEvent.click(screen.getByRole("button"));

    await screen.findByText("Dampf")

    users.map(u => [u.firstName, u.lastName]).flat().forEach(name =>
      expect(container).toHaveTextContent(name)
    );

    scope.done();
  });
});
