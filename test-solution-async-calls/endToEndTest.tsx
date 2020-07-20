import React from "react";

import sinon, {SinonFakeServer, SinonFakeXMLHttpRequestStatic} from "sinon";
import {mount, ReactWrapper} from "enzyme";
import {applyMiddleware, createStore, Store} from "redux";
import {Provider, ProviderProps} from "react-redux";
import thunkMiddleware from "redux-thunk";

import reducer from "../src-solution-async-calls/reducers";
import App from "../src-solution-async-calls/App";

const users = [
  {firstName: "Nicole", lastName: "Rauch"},
  {firstName: "Fritz", lastName: "Müller"},
  {firstName: "Klaus", lastName: "Walter"}
];

declare const global: {XMLHttpRequest : SinonFakeXMLHttpRequestStatic};

describe("Username end2end test", () => {
  let server : SinonFakeServer;
  let store : Store;
  let component: ReactWrapper<ProviderProps, Record<string, unknown>, Provider>;

  beforeEach(() => {
    global.XMLHttpRequest = sinon.FakeXMLHttpRequest;
    server = sinon.fakeServer.create({respondImmediately: true});

    store = createStore(reducer,
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

    component = mount<Provider, ProviderProps, Record<string, unknown>>(<Provider store={store}>
        <App/>
      </Provider>
    );

    // you can interact with the UI here

    expect(component.find("span").map(u => u.text())).toEqual(["Nicole","Rauch","Fritz","Müller","Klaus","Walter"]);
  });
});
