import * as backend from "./ajaxcalls";
import {IUser, TAction} from "../src-solution-redux-big/types";
import {Action, Dispatch} from "redux";

export enum ActionTypes {
    USER_ADDED = "USER_ADDED",
    USERS_SET = "USERS_SET"
}


export interface UserAddAction extends Action {
    type: ActionTypes.USER_ADDED,
    user: IUser
}

export const addUser = (user: IUser): UserAddAction => ({
    type: ActionTypes.USER_ADDED,
    user
});


export const submitUser = (user:IUser): TAction =>
    (dispatch: Dispatch<Action>) => {
    backend.postUser(user, returnCode => {
      if(returnCode === 200) {
        dispatch(addUser(user));
      }
    });
  };


export interface UsersSetAction extends Action {
  type: ActionTypes.USERS_SET,
    users: IUser[]

}


export const setUsers = (users: IUser[]):UsersSetAction => ({
    type: ActionTypes.USERS_SET,
    users
});

export const  loadUsers = (dispatch: Dispatch<Action>): void => {
    backend.fetchUsers((users:IUser[]) => {
        dispatch(setUsers(users));
    });
};
