import React, {useState, ReactElement} from "react";
import {UserProps} from "../src-solution-react/User";

const useHighlightColor =
    (): {color: string, toggleColor: () => void} => {
  const [highlighted, setHighlighted] = useState(false);
  const color = highlighted ? "#FF0000" : "#FFFFFF";
  return {color, toggleColor:
          (): void => {setHighlighted(!highlighted)}};
};

const UserWithHighlightViaCustomHook =
  ({user}: UserProps): ReactElement => {
  const {color, toggleColor} = useHighlightColor();
  return (
    <div onClick={toggleColor} style={{cursor: "pointer"}}>
      <label>First name: </label>
      <span style={{backgroundColor: color}}>{user.firstName}</span><br/>
      <label>Last name: </label>
      <span>{user.lastName}</span><br/>
    </div>
  );
};

export default UserWithHighlightViaCustomHook;
