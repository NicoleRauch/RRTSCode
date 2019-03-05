import React from "react";

const redBorder = {
  border: "1px solid red",
  width: "30em",
  padding: "5px",
  clear: "both",
};

const SingleUserWrapper = ({children}) => (
  <div style={redBorder}>
    {children}
  </div> );

export default SingleUserWrapper;
