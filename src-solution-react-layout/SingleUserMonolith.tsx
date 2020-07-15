import React, { CSSProperties } from "react";

import {IUser} from "../src-solution-react/types";

const redBorder: CSSProperties = {
  border: "1px solid red",
  width: "30em",
  padding: "5px",
  clear: "both",
};

interface SingleUserMonolithProps { user: IUser }

const SingleUserMonolith = ({user}: SingleUserMonolithProps): ReactElement =>
  <div style={redBorder}>
    <div>
      <label>First name: </label><span>{user.firstName}</span><br/>
      <label>Last name: </label><span>{user.lastName}</span><br/>
    </div>
  </div>;

export default SingleUserMonolith;
