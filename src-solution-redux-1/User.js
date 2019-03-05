import React from "react";


export default ({firstName, lastName}) => (
  <div>
    <label>First name: </label><span>{firstName}</span><br/>
    <label>Last name: </label><span>{lastName}</span><br/>
  </div>
);
