import React, { ReactElement } from "react";

import User from "./UserWithHighlight";
import {IUser} from "../src-solution-react/types";

type UserListProps = { users: IUser[] }

const UserList = ({users}:UserListProps): ReactElement => 
  <ul>
    {users.map(user =>
      <li key={"userlist_" + user.firstName + user.lastName}>
        <User user={user} />
      </li>)}
  </ul>;

export default UserList;
