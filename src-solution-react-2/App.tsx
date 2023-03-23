import React from "react";

import HelloWorld from "../src-solution-react/HelloWorldFunctionalComponent";
import User from "./UserWithHighlight";
import CustomHookUser from "./UserWithCustomHook";
import UserList from "./UserListWithHighlight";
import UserCreationViaStateHook from "./UserCreationViaStateHook";
import {IUser} from "../src-solution-react/types";

const users: IUser[] = [
  {firstName: "Nicole", lastName: "Rauch"},
  {firstName: "Peter", lastName: "Müller"},
  {firstName: "Fritz", lastName: "Walter"}
];

const App = () =>
  <div>
    <HelloWorld/>
    <User user={users[0]}/>
    <CustomHookUser user={users[1]}/>
    <UserList users={users}/>
    <UserCreationViaStateHook submitUser={(): void => { /**/
    }}/>
  </div>;

export default App;
