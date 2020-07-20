import React, {useState, ReactElement} from "react";
import { IUser } from "../src-solution-redux-4/types";

export type UserWithCustomHookProps = {
    user: IUser
}

const useHighlightColor = (): [string, () => void] => {

    const [highlighted, setHighlighted] = useState(false);

    const color = highlighted ? "#FF0000" : "#FFFFFF";
    return [color, (): void => {setHighlighted(!highlighted)}]
};

const UserWithCustomHook =
    ({user:{firstName, lastName}}: UserWithCustomHookProps): ReactElement => {
    const [color, toggleColor] = useHighlightColor();
    return (
        <div onClick={toggleColor}
             style={{cursor: "pointer"}}>
            <label>First name: </label>
            <span style={{backgroundColor: color}}>{firstName}</span><br/>
            <label>Last name: </label>
            <span>{lastName}</span><br/>
        </div>
    );
};

export default UserWithCustomHook;
