import React, {CSSProperties, ReactElement, ReactNode} from "react";

const redBorder: CSSProperties = {
  border: "1px solid red",
  width: "30em",
  padding: "5px",
  clear: "both",
};

type ComponentWrapperProps = {
    children: ReactNode
}

const ComponentWrapper = ({children}: ComponentWrapperProps): ReactElement =>
  <div style={redBorder}>
    {children}
  </div>;

export default ComponentWrapper;
