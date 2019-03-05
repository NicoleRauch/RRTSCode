import React from "react";
import User from "./User";

export default ({users}) => (
  <ul>
    { users.map( user =>
      <li key={"userlist_" + user.firstName + user.lastName}>
        <User {...user} />
      </li> ) }
  </ul>
);
