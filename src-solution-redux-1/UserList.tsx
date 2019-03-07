import React from "react";

import User from "./User";
import {UserType} from "../src-solution-react/types";

interface UserListProps {
    users: Array<UserType>
}

export default ({users}: UserListProps) => (
    <ul>
        {users.map(user => <li key={"userlist_" + user.firstName + user.lastName}><User {...user} /></li>)}
    </ul>
);
