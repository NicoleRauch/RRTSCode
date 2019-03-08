import React from "react";

const redBorder = {
  border: "1px solid red",
  width: "30em",
  padding: "5px",
  clear: "both" as "both",
};

interface SingleUserWrapperProps {
    children: JSX.Element | JSX.Element[]
}

const SingleUserWrapper = ({children}: SingleUserWrapperProps) => (
  <div style={redBorder}>
    {children}
  </div> );

export default SingleUserWrapper;
