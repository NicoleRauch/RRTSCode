import React from "react";

const redBorder = {
  border: "1px solid red",
  width: "30em",
  padding: "5px",
  clear: "both",
};

const SingleUserParam = ({component}) => (
  <div style={redBorder}>
    {component}
  </div> );

export default SingleUserParam;
