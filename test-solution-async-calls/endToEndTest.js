import "jsdom-global/register";
import React from "react";
import expect from "must";
import sinon from "sinon";
import {mount} from "enzyme";
import {applyMiddleware, createStore} from "redux";
import {Provider} from "react-redux";
import thunkMiddleware from "redux-thunk";

import reducers from "../src-solution-async-calls/reducers";
import App from "../src-solution-async-calls/App";
import UserList from "../src-solution-redux-1/UserList";

const users = [
  {firstName: "Nicole", lastName: "Rauch"},
  {firstName: "Peter", lastName: "Müller"},
  {firstName: "Fritz", lastName: "Walter"}
];

describe("Username end2end test", function () {

  beforeEach(function () {
    global.XMLHttpRequest = sinon.FakeXMLHttpRequest;
    this.server = sinon.fakeServer.create({respondImmediately: true});

    this.store = createStore(reducers,
      applyMiddleware(thunkMiddleware)
    );
  });

  afterEach(function () {
    this.server.restore();
  });

  it("displays all loaded users", function () {
    this.server.respondWith("GET", "/api/users",
      [200, {"Content-Type": "application/json"}, JSON.stringify(users)]
    );
    this.server.respondWith("POST", "/api/user",
      [200, {"Content-Type": "application/json"}, "User successfully added."]
    );

    // In case you need to find out which API is called, enable this:
    // this.server.respondWith(response => { console.log(response.url); response.respond(); });

    this.component = mount(<Provider store={this.store}>
        <App/>
      </Provider>
    );

    // you can interact with the UI here

    expect(this.component.find("span").map(u => u.text())).to.eql(["Nicole","Rauch","Peter","Müller","Fritz","Walter"]);
  });
});
