import React from "react";

const User = ({firstName, lastName}) => (
    <div>
        <label>First name: </label><span>{firstName}</span><br/>
        <label>Last name: </label><span>{lastName}</span><br/>
    </div>
);

export default User;
