import {Action} from "redux";
import {UserType} from "../src-solution-react/types";


const INITIAL_STATE = {
  users: [
    {firstName: "Nicole", lastName: "Rauch"},
    {firstName: "Peter", lastName: "Müller"},
    {firstName: "Fritz", lastName: "Walter"}
  ]
};

export enum UserActions {
    USER_ADDED = "USER_ADDED"
}

export interface UserAddAction extends Action {
    type: UserActions.USER_ADDED,
    payload: UserType
}

export function addUser(user: UserType) {
    return {
        type: UserActions.USER_ADDED,
        payload: user
    };
}

function users(currentUsers = INITIAL_STATE.users, action: Action) {
  switch (action.type) {
    case UserActions.USER_ADDED:
      return currentUsers.concat((action as UserAddAction).payload);
  }
  return currentUsers;
}

export default function (state = INITIAL_STATE, action: Action = {type: "Dummy"}) {
  return {
    users: users(state.users, action)
  };
}
