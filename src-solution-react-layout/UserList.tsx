import React, {ReactElement} from "react";

import {IUser} from "../src-solution-react/types";
import {UserProps} from "./User";

type UserListProps = {
    users: IUser[],
    Component: (props: UserProps) => ReactElement
}

const UserList = ({users, Component}: UserListProps): ReactElement =>
  <ul>
    { users.map( user => <li key={"userlist_" + user.firstName
      + user.lastName}><Component user={user}/></li> ) }
  </ul>;

export default UserList;
