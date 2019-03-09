import React from "react";
import {UserType} from "../src-solution-react/types";

const redBorder = {
  border: "1px solid red",
  width: "30em",
  padding: "5px",
  clear: "both" as "both",
};

interface SingleUserMonolithProps { user: UserType }

const SingleUserMonolith = ({user}: SingleUserMonolithProps) => (
  <div style={redBorder}>
    <div>
      <label>First name: </label><span>{user.firstName}</span><br/>
      <label>Last name: </label><span>{user.lastName}</span><br/>
    </div>
  </div> );

export default SingleUserMonolith;
