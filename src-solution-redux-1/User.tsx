import React from "react";
import {UserType} from "../src-solution-react/types";


export default ({firstName, lastName}: UserType): JSX.Element => (
  <div>
    <label>First name: </label><span>{firstName}</span><br/>
    <label>Last name: </label><span>{lastName}</span><br/>
  </div>
);
