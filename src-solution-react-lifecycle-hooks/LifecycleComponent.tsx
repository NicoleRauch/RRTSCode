/* eslint react-hooks/exhaustive-deps: 0 */
import React, {ReactElement, useEffect, useMemo, useState} from "react";

import ChildComponent from "./ChildComponent";

const LifecycleComponent = (): ReactElement => {

  console.log("Lifecycle Component function.");  // eslint-disable-line no-console

  const [checked, setChecked] = useState(true);

  useEffect(() => {
    console.log("Effect without dependencies.");  // eslint-disable-line no-console
  }, []);

  useEffect(() => {
    console.log("Effect with dependency on state: checked = ", checked);  // eslint-disable-line no-console
  }, [checked]);

  useMemo(() => {
    console.log("Memo without dependencies.");  // eslint-disable-line no-console
  }, []);

  useMemo(() => {
    console.log("Memo with dependencies.");  // eslint-disable-line no-console
  }, [checked]);

  return (
    <div>
      <ChildComponent checked={checked}/>
      <input type="checkbox"
             checked={checked}
             onChange={(): void => {
               console.log("Set state.");   // eslint-disable-line no-console
               setChecked(!checked);
             }}/>
    </div>
  );
};

export default LifecycleComponent;
