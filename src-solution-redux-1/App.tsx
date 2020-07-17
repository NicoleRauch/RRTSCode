import { hot } from "react-hot-loader/root";
import React, {Component, ReactElement} from "react";

import UserList from "./UserList";
import UserCreation from "./UserCreation";
import {IUser} from "../src-solution-react/types";

const users: IUser[] = [
    {firstName: "Nicole", lastName: "Rauch"},
    {firstName: "Peter", lastName: "Müller"},
    {firstName: "Fritz", lastName: "Walter"} ];

export class App extends Component {
  render(): ReactElement {
    return (
      <div>
        <UserList users={users} />
        <UserCreation submitUser={ (): void => { /**/ } } />
      </div>
    );
  }
}

export default hot(App);
