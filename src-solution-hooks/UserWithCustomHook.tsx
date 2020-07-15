import React, {useState, ReactElement} from "react";

export interface UserWithCustomHookProps {
    firstName: string,
    lastName: string
}

const useHighlightColor = (): [string, () => void] => {

    const [highlighted, setHighlighted] = useState(false);

    const color = highlighted ? "#FF0000" : "#FFFFFF";
    return [color, (): void => {setHighlighted(!highlighted)}]
};

const UserWithCustomHook =
    ({firstName, lastName}: UserWithCustomHookProps): ReactElement => {
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
