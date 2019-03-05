import React from "react";
import User from "./User";

const redBorder = {
  border: "1px solid red",
  width: "30em",
  padding: "5px",
  clear: "both",
};

const SingleUser = ({user}) => (
  <div style={redBorder}>
    <User {...user} />
  </div> );

export default SingleUser;
