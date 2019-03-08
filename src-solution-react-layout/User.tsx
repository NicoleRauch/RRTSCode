import React from "react";
import {UserType} from "../src-solution-react/types";

const User = ({firstName, lastName}: UserType) => (
  <div>
    <label>First name: </label><span>{firstName}</span><br/>
    <label>Last name: </label><span>{lastName}</span><br/>
  </div> );

export default User;
