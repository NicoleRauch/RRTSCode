import React from "react";

const redBorder = {
  border: "1px solid red",
  width: "30em",
  padding: "5px",
  clear: "both",
};

const SingleUserParamAndData = ({user, component}) => (
  <div style={redBorder}>
    {React.cloneElement(component, user)}
  </div> );

export default SingleUserParamAndData;
