import React, {useReducer} from "react";

import UserList from "../src-solution-redux-1/UserList";
import UserCreation from "../src-solution-redux-1/UserCreation";
import {IUser} from "../src-solution-react/types";
import {addUser, INITIAL_STATE, usersReducer} from "./reducer";
import {Action, UsersState} from "./types";

const App = () => {
  const [users, dispatch] = useReducer<(s: UsersState, a: Action) => UsersState>(usersReducer, INITIAL_STATE);

  return <div>
    <UserList users={users}/>
    <UserCreation submitUser={(user: IUser): void => dispatch(addUser(user))}/>
  </div>;
}

export default App;
