import React, {useState} from "react";
import {IUser} from "../src-solution-react/types";

export type UserWithHighlightProps = {
  user: IUser
}

const UserWithHighlight = ({user}: UserWithHighlightProps) => {

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
