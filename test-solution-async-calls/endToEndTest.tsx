import React from "react";

import sinon, {SinonFakeServer, SinonFakeXMLHttpRequestStatic} from "sinon";
import {mount, ReactWrapper} from "enzyme";
import {applyMiddleware, createStore, Store} from "redux";
import {Provider} from "react-redux";
import thunkMiddleware from "redux-thunk";

import reducers from "../src-solution-async-calls/reducers";
import App from "../src-solution-async-calls/App";

const users = [
  {firstName: "Nicole", lastName: "Rauch"},
  {firstName: "Peter", lastName: "Müller"},
  {firstName: "Fritz", lastName: "Walter"}
];

declare const global: {XMLHttpRequest : SinonFakeXMLHttpRequestStatic};

describe("Username end2end test", () => {
  let server : SinonFakeServer;
  let store : Store;
  let component: ReactWrapper;

  beforeEach(() => {
    global.XMLHttpRequest = sinon.FakeXMLHttpRequest;
    server = sinon.fakeServer.create({respondImmediately: true});

    store = createStore(reducers,
      applyMiddleware(thunkMiddleware)
    );
  });

  afterEach(() => {
    server.restore();
  });

  it("displays all loaded users", () => {
    server.respondWith("GET", "/api/users",
      [200, {"Content-Type": "application/json"}, JSON.stringify(users)]
    );
    server.respondWith("POST", "/api/user",
      [200, {"Content-Type": "application/json"}, "User successfully added."]
    );

    // In case you need to find out which API is called, enable this:
    // this.server.respondWith(response => { console.log(response.url); response.respond(); });

    component = mount(<Provider store={store}>
        <App/>
      </Provider>
    );

    // you can interact with the UI here

    expect(component.find("span").map(u => u.text())).toEqual(["Nicole","Rauch","Peter","Müller","Fritz","Walter"]);
  });
});
