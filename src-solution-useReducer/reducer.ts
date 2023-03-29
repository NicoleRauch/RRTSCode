import {Action, IUser, UsersState} from "./types";


export const INITIAL_STATE: UsersState = [
  {firstName: "Nicole", lastName: "Rauch"},
  {firstName: "Peter", lastName: "Müller"},
  {firstName: "Fritz", lastName: "Walter"}
];

export type UserAddedAction =
  { type: "USER_ADDED", user: IUser }

export const addUser = (user: IUser): UserAddedAction =>
  ({type: "USER_ADDED", user});

export const usersReducer = (state: UsersState, action: Action): UsersState => {
  switch (action.type) {
    case "USER_ADDED":
      return state.concat((action as UserAddedAction).user);
  }
  return state;
};
