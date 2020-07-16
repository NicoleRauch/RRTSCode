import React, {CSSProperties, ReactElement, ReactNode} from "react";

const redBorder: CSSProperties = {
  border: "1px solid red",
  width: "30em",
  padding: "5px",
  clear: "both",
};

interface SingleUserWrapperProps {
    children: ReactNode
}

const SingleUserWrapper = ({children}: SingleUserWrapperProps): ReactElement =>
  <div style={redBorder}>
    {children}
  </div>;

export default SingleUserWrapper;
