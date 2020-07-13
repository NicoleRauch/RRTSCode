import React from "react";
import ReactDOM from "react-dom";

import UserCreation from "./UserCreationWithFormSubmit";
import UserCreationControlled from "./UserCreationControlledComponent";

ReactDOM.render(
  <div>
    <UserCreation />
    <UserCreationControlled submitUser={(/* d */): void => { /* console.log(d) */ } } />
  </div>
  , document.getElementById("start")
);

