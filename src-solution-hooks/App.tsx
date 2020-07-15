import React, {Component} from "react";

import User from "./UserWithHook";
import CustomHookUser from "./UserWithCustomHook";
import {IUser} from "../src-solution-react/types";

const users: IUser[] = [
    {firstName: "Nicole", lastName: "Rauch"},
    {firstName: "Peter", lastName: "Müller"},
    {firstName: "Fritz", lastName: "Walter"}
];

export default class App extends Component {

  render(): ReactElement {

    return (
      <div>
        <User {...users[0]} />
        <CustomHookUser {...users[1]} />
      </div>
    );
  }
}
