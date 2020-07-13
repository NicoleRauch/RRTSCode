import React, {useState} from "react";

export interface UserWithHookProps {
    firstName: string,
    lastName: string
}

const UserWithHook =
    ({firstName, lastName}: UserWithHookProps): React.ReactElement => {

    const [highlighted, setHighlighted] = useState(false);
    const color = highlighted ? "#FF0000" : "#FFFFFF";

    return (
        <div onClick={() => {setHighlighted(!highlighted)}}
             style={{cursor: "pointer"}}>
            <label>First name: </label>
            <span style={{backgroundColor: color}}>{firstName}</span><br/>
            <label>Last name: </label>
            <span>{lastName}</span><br/>
        </div>
    );
};

export default UserWithHook;
