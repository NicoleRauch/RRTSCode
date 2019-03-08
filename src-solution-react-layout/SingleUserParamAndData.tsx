import React from "react";
import {UserType} from "../src-solution-react/types";

const redBorder = {
  border: "1px solid red",
  width: "30em",
  padding: "5px",
  clear: "both" as "both",
};

interface SingleUserParamAndDataProps {
    user: UserType,
    component: JSX.Element
}

const SingleUserParamAndData = ({user, component}: SingleUserParamAndDataProps) => (
  <div style={redBorder}>
    {React.cloneElement(component, user)}
  </div> );

export default SingleUserParamAndData;
