import {UserType} from "../src-solution-react/types";
import {Action} from "redux";


export interface StoreState {
    users: UserType[]
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
};

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


export default function (state = INITIAL_STATE, _ = {}) {
  return state;
}
