import React, {Component, ReactElement} from "react";
import { hot } from "react-hot-loader";

import HelloWorld from "./HelloWorldFunctionalComponent";
import User from "./UserWithHighlight";
import UserList from "./UserListWithHighlight";
import UserCreationViaInternalState from "./UserCreationViaInternalState";

const users = [
    {firstName: "Nicole", lastName: "Rauch"},
    {firstName: "Peter", lastName: "Müller"},
    {firstName: "Fritz", lastName: "Walter"}
];

export class App extends Component {

  render(): ReactElement {

    return (
      <div>
        <HelloWorld />
        <User {...users[0]} />
        <UserList users={users} />
        <UserCreationViaInternalState submitUser={ (): void => { /**/ } } />
      </div>
    );
  }
}

export default hot(module)(App)
