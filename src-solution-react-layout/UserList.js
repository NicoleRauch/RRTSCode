import React from "react";

const UserList = ({users, component}) => (
  <ul>
    { users.map( user => <li key={"userlist_" + user.firstName
      + user.lastName}>{React.cloneElement(component, user)}</li> ) }
  </ul> );

export default UserList;
