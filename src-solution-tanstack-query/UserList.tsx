import {useQuery} from "@tanstack/react-query";
import React, {ReactElement} from "react";

import User from "../src-solution-redux-1/User";
import {fetchUsers} from "./backendCalls";


const UserList = (): ReactElement => {
  const {data: users} = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
    initialData: []
  });

  console.log("users: ", users);

  return <ul>
    {users.map(user => <li key={"userlist_" + user.firstName + user.lastName}><User user={user}/></li>)}
  </ul>;
};

export default UserList;
