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

export interface UserAddAction extends Action {
    type: UserActions.USER_ADDED,
    payload: IUser
}

export const addUser = (user: IUser): UserAddAction => {
    return {
        type: UserActions.USER_ADDED,
        payload: user
    };
};

const users = (currentUsers: UsersState, action: Action): UsersState  => {
  switch (action.type) {
    case UserActions.USER_ADDED:
      return currentUsers.concat((action as UserAddAction).payload);
  }
  return currentUsers;
};

export default (state: StoreState = INITIAL_STATE,
                action: Action = {type: "Dummy"}): StoreState =>
    ({users: users(state.users, action)});

