import {Action} from "redux";
import {IUser} from "../src-solution-react/types";


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
    payload: IUser
}

export const addUser = (user: IUser): UserAddAction => {
    return {
        type: UserActions.USER_ADDED,
        payload: user
    };
}

const users = (currentUsers = INITIAL_STATE.users, action: Action): IUser[]  => {
  switch (action.type) {
    case UserActions.USER_ADDED:
      return currentUsers.concat((action as UserAddAction).payload);
  }
  return currentUsers;
}

export default (state = INITIAL_STATE, action: Action = {type: "Dummy"}): {users: IUser[]} => {
  return {
    users: users(state.users, action)
  };
}
