import React, {Component, ReactElement} from "react";

import {IUser} from "../src-solution-react/types";
import {UserProps} from "./User";

type UserListProps = {
    users: IUser[],
    EntryComp: ((props: UserProps) => ReactElement) |
        (new (p: UserProps) => Component<UserProps>)
}

const UserList = ({users, EntryComp}: UserListProps): ReactElement =>
  <ul>
    { users.map( user => <li key={"userlist_" + user.firstName
      + user.lastName}><EntryComp user={user}/></li> ) }
  </ul>;

export default UserList;
