import React from "react";

import User from "./User";
import {IUser} from "./types";

const users: IUser[] = [
  {firstName: "Nicole", lastName: "Rauch"},
  {firstName: "Peter", lastName: "Müller"},
  {firstName: "Fritz", lastName: "Walter"}
];

const App = () =>
  <div>
    <User user={users[0]}/>
  </div>;

export default App;
