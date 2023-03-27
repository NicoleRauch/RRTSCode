import React, {useState} from "react";
import {UserProps} from "../src-solution-react/User";

const UserWithHighlight = ({user}: UserProps) => {

  const [highlighted, setHighlighted] = useState(false);

  const highlightColor = highlighted
                         ? "#FF0000" : "#FFFFFF";
  return (
    <div onClick={() => setHighlighted(!highlighted)}
         style={{cursor: "pointer"}}>
      <label>First name: </label>
      <span style={{backgroundColor: highlightColor}} data-testid="firstname">
        {user.firstName}</span><br/>
      <label>Last name: </label>
      <span>{user.lastName}</span><br/>
    </div>
  );
};

export default UserWithHighlight;
