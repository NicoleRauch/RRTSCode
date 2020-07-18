import React, { CSSProperties, ReactElement } from "react";

import User from "./User";
import {IUser} from "../src-solution-react/types";

const redBorder: CSSProperties = {
  border: "1px solid red",
  width: "30em",
  padding: "5px",
  clear: "both",
};

interface SingleUserProps {
  user: IUser

}

const SingleUser = ({user}: SingleUserProps): ReactElement =>
  <div style={redBorder}>
    <User user={user} />
  </div>;

export default SingleUser;
