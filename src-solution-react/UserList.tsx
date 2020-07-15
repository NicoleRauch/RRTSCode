import React, { ReactElement } from "react";

import User from "./User";
import {IUser} from "./types";

interface UserListProps { users: IUser[] }

const UserList = ({users}:UserListProps): ReactElement => 
  <ul>
    {users.map(user =>
      <li key={"userlist_" + user.firstName + user.lastName}>
        <User {...user} />
      </li>)}
  </ul>;

export default UserList
