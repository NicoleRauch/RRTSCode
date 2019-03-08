import React from "react";
import {UserType} from "../src-solution-react/types";

interface UserListProps {
    users: UserType[],
    component: JSX.Element
}

const UserList = ({users, component}: UserListProps) => (
  <ul>
    { users.map( user => <li key={"userlist_" + user.firstName
      + user.lastName}>{React.cloneElement(component, user)}</li> ) }
  </ul> );

export default UserList;
