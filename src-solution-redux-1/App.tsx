import React from "react";

import UserList from "./UserList";
import UserCreation from "./UserCreation";
import {IUser} from "../src-solution-react/types";

const users: IUser[] = [
  {firstName: "Nicole", lastName: "Rauch"},
  {firstName: "Peter", lastName: "Müller"},
  {firstName: "Fritz", lastName: "Walter"}
];

const App = () =>
  <div>
    <UserList users={users}/>
    <UserCreation submitUser={(): void => { /**/
    }}/>
  </div>;

export default App;
