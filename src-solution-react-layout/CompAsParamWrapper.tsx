import React, { CSSProperties, ReactElement } from "react";

const redBorder: CSSProperties = {
  border: "1px solid red",
  width: "30em",
  padding: "5px",
  clear: "both",
};

type CompAsParamWrapperProps = {
  component: ReactElement
}

const CompAsParamWrapper = ({component}: CompAsParamWrapperProps): ReactElement =>

  <div style={redBorder}>
    {component}
  </div>;

export default CompAsParamWrapper;
