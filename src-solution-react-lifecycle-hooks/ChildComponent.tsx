/* eslint react-hooks/exhaustive-deps: 0 */
import React, {ReactElement, useEffect, useMemo} from "react";

type ChildComponentProps = {
  checked: boolean
}

const ChildComponent = ({checked}: ChildComponentProps): ReactElement => {

  console.log("Child Component function.");  // eslint-disable-line no-console

  useEffect(() => {
    console.log("Child Component effect without dependencies.");  // eslint-disable-line no-console
  }, []);

  useEffect(() => {
    console.log("Child Component effect with dependency on state: checked = ", checked);  // eslint-disable-line no-console
  }, [checked]);

  useMemo(() => {
    console.log("Child Component memo without dependencies.");  // eslint-disable-line no-console
  }, []);

  useMemo(() => {
    console.log("Child Component memo with dependencies.");  // eslint-disable-line no-console
  }, [checked]);

  return <p>{checked ? "Checked" : "Unchecked"}</p>;
};

export default ChildComponent;
