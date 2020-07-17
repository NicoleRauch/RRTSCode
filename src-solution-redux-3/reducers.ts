import {Action} from "redux";
import {IUser, StoreState} from "../src-solution-redux-2/types";

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

export const addUser =(user: IUser): UserAddAction => {
    return {
    type: UserActions.USER_ADDED,
    payload: user
  };
};


export default (state: StoreState = INITIAL_STATE, _: Action = {type: "Dummy"}): StoreState => {
  return state;
}
