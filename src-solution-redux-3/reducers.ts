import {Action} from "redux";

import {IUser} from "../src-solution-react/types";


export interface StoreState {
    users: IUser[]
}

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

export const addUser =(user: IUser): UserAddAction => {
    return {
    type: UserActions.USER_ADDED,
    payload: user
  };
}


export default (state = INITIAL_STATE, _ = {}): StoreState => {
  return state;
}
