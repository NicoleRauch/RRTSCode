import React, {Component} from "react";

import UserList from "./UserList";
import UserCreation from "./UserCreation";

const users = [
    {firstName: "Nicole", lastName: "Rauch"},
    {firstName: "Peter", lastName: "Müller"},
    {firstName: "Fritz", lastName: "Walter"} ];

export default class extends Component {
  render(): React.ReactElement {
    return (
      <div>
        <UserList users={users} />
        <UserCreation submitUser={ () => { /**/ } } />
      </div>
    );
  }
}
