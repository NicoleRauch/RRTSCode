import React from "react";
import {useSelector} from "react-redux";

import {IUsers, StoreState} from "../src-solution-redux-2/types";
import UserList from "../src-solution-react/UserList";
import UserCreation from "./UserCreation";

export const App = () => {
  const users = useSelector<StoreState, IUsers>(s => s.users);
  return <div>
    <UserList users={users} />
    <UserCreation />
  </div>;
}

export default App;
