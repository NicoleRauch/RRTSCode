import React from "react";

const redBorder = {
  border: "1px solid red",
  width: "30em",
  padding: "5px",
  clear: "both",
};

const SingleUserMonolith = ({user}) => (
  <div style={redBorder}>
    <div>
      <label>First name: </label><span>{user.firstName}</span><br/>
      <label>Last name: </label><span>{user.lastName}</span><br/>
    </div>
  </div> );

export default SingleUserMonolith;
