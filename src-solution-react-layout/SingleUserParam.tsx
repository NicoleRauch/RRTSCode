import React from "react";

const redBorder = {
  border: "1px solid red",
  width: "30em",
  padding: "5px",
  clear: "both" as "both",
};

interface SingleUserParamProps {
  component: JSX.Element
}

const SingleUserParam = ({component}: SingleUserParamProps) => (
  <div style={redBorder}>
    {component}
  </div> );

export default SingleUserParam;
