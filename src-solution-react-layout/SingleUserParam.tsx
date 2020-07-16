import React, { CSSProperties, ReactElement } from "react";

const redBorder: CSSProperties = {
  border: "1px solid red",
  width: "30em",
  padding: "5px",
  clear: "both",
};

interface SingleUserParamProps {
  component: ReactElement
}

const SingleUserParam = ({component}: SingleUserParamProps): ReactElement =>
  <div style={redBorder}>
    {component}
  </div>;

export default SingleUserParam;
