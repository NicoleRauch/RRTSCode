import React from "react";

import User from "./UserWithHighlight";
import {IUser} from "./types";

interface UserListProps { users: IUser[] }

const UserList = ({users}:UserListProps): React.ReactElement => 
  <ul>
    {users.map(user =>
      <li key={"userlist_" + user.firstName + user.lastName}>
        <User {...user} />
      </li>)}
  </ul>;

export default UserList;
