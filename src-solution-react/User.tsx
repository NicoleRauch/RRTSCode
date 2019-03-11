import React from "react";
import {IUser} from "./types";

const User = ({firstName, lastName}: IUser): JSX.Element => (
  <div>
    <label>First name: </label><span>{firstName}</span><br/>
    <label>Last name: </label><span>{lastName}</span><br/>
  </div>
);

export default User;
