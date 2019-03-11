import React from "react";

import User from "./UserWithHighlight";
import {IUser} from "./types";

interface UserListProps { users: Array<IUser> }

export default ({users}:UserListProps) => (
  <ul>
    {users.map(user =>
      <li key={"userlist_" + user.firstName + user.lastName}>
        <User {...user} />
      </li>)}
  </ul>);
