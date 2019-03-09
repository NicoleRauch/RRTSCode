import React from "react";

import User from "./UserWithHighlight";
import {UserType} from "./types";

interface UserListProps { users: Array<UserType> }

export default ({users}:UserListProps) => (
  <ul>
    {users.map(user =>
      <li key={"userlist_" + user.firstName + user.lastName}>
        <User {...user} />
      </li>)}
  </ul>);
