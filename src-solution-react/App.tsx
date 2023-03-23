import React from "react";

import HelloWorld from "./HelloWorldFunctionalComponent";
import User from "./User";
import UserList from "./UserList";
import {IUser} from "./types";

const users: IUser[] = [
  {firstName: "Nicole", lastName: "Rauch"},
  {firstName: "Peter", lastName: "Müller"},
  {firstName: "Fritz", lastName: "Walter"}
];

const App = () =>
  <div>
    <HelloWorld/>
    <User user={users[0]}/>
    <UserList users={users}/>
  </div>;

export default App;
