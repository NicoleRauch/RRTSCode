import {Action} from "redux";

import {IUser, StoreState, IUsers} from "./types";


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

export type UserAddedAction =
    Action<UserActions.USER_ADDED> & { user: IUser }

export const addUser = (user: IUser): UserAddedAction => ({
        type: UserActions.USER_ADDED,
        user
});

const users = (state: IUsers, action: Action): IUsers  => {
  switch (action.type) {
    case UserActions.USER_ADDED:
      return state.concat((action as UserAddedAction).user);
  }
  return state;
};

export default (state: StoreState = INITIAL_STATE,
       action: Action = {type: "Dummy"}): StoreState =>
    ({users: users(state.users, action)});


/* Definition von Action in redux:
export interface Action<T = any> {
  type: T
}
 */
