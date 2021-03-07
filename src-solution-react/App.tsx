import React, {Component, ReactElement} from "react";

import HelloWorld from "./HelloWorldFunctionalComponent";
import User from "./UserWithHighlight";
import UserList from "./UserListWithHighlight";
import UserCreationViaInternalState from "./UserCreationViaInternalState";
import { IUser } from "./types";

const users: IUser[] = [
    {firstName: "Nicole", lastName: "Rauch"},
    {firstName: "Peter", lastName: "Müller"},
    {firstName: "Fritz", lastName: "Walter"}
];

export class App extends Component {

  render(): ReactElement {

    return (
      <div>
        <HelloWorld />
        <User user={users[0]} />
        <UserList users={users} />
        <UserCreationViaInternalState submitUser={ (): void => { /**/ } } />
      </div>
    );
  }
}

export default App
