import React, { CSSProperties, ReactElement } from "react";

const redBorder: CSSProperties = {
  border: "1px solid red",
  width: "30em",
  padding: "5px",
  clear: "both",
};

interface SingleUserWrapperProps {
    children: JSX.Element | JSX.Element[]
}

const SingleUserWrapper = ({children}: SingleUserWrapperProps): ReactElement =>
  <div style={redBorder}>
    {children}
  </div>;

export default SingleUserWrapper;
