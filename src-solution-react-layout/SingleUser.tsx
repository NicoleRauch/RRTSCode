import React from "react";
import User from "./User";
import {IUser} from "../src-solution-react/types";

const redBorder = {
  border: "1px solid red",
  width: "30em",
  padding: "5px",
  clear: "both" as "both",
};

interface SingleUserProps {
  user: IUser

}

const SingleUser = ({user}: SingleUserProps) => (
  <div style={redBorder}>
    <User {...user} />
  </div> );

export default SingleUser;
