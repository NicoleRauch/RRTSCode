import {Action} from "redux";

import {IUser, StoreState, UsersState} from "./types";


const INITIAL_STATE: StoreState = {
  users: [
    {firstName: "Nicole", lastName: "Rauch"},
    {firstName: "Peter", lastName: "Müller"},
    {firstName: "Fritz", lastName: "Walter"}
  ]
};

export enum UserActions {
    USER_ADDED = "USER_ADDED"
}

export interface UserAddedAction extends Action {
    type: UserActions.USER_ADDED,
    user: IUser
}

export const addUser = (user: IUser): UserAddedAction => {
    return {
        type: UserActions.USER_ADDED,
        user
    };
};

const users = (currentUsers: UsersState, action: Action): UsersState  => {
  switch (action.type) {
    case UserActions.USER_ADDED:
      return currentUsers.concat((action as UserAddedAction).user);
  }
  return currentUsers;
};

export default (state: StoreState = INITIAL_STATE,
       action: Action = {type: "Dummy"}): StoreState =>
    ({users: users(state.users, action)});

