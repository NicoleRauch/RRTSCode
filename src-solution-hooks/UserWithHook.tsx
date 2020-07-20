import React, {useState, ReactElement} from "react";
import { IUser } from "../src-solution-redux-4/types";

export type UserWithHookProps = {
    user: IUser
}

const UserWithHook =
    ({user:{firstName, lastName}}: UserWithHookProps): ReactElement => {

    const [highlighted, setHighlighted] = useState(false);
    const color = highlighted ? "#FF0000" : "#FFFFFF";

    return (
        <div onClick={(): void => {setHighlighted(!highlighted)}}
             style={{cursor: "pointer"}}>
            <label>First name: </label>
            <span style={{backgroundColor: color}}>{firstName}</span><br/>
            <label>Last name: </label>
            <span>{lastName}</span><br/>
        </div>
    );
};

export default UserWithHook;
