import * as backend from "./ajaxcalls";
import {StoreState} from "../src-solution-redux-big/reducers";
import {UserType} from "../src-solution-redux-big/types";
import {Action, Dispatch} from "redux";

export enum ActionTypes {
    USER_ADDED = "USER_ADDED",
    USERS_SET = "USERS_SET"
}


export interface UserAddAction extends Action {
    type: ActionTypes.USER_ADDED,
    user: UserType
}

export const addUser = (user: UserType): UserAddAction => ({
    type: ActionTypes.USER_ADDED,
    user
});


export const submitUser = (user:UserType) =>
    (dispatch: Dispatch<Action, StoreState>) => {
    backend.postUser(user, returnCode => {
      if(returnCode === 200) {
        dispatch(addUser(user));
      }
    });
  };


export interface UsersSetAction extends Action {
  type: ActionTypes.USERS_SET,
    users: UserType[]

}


export const setUsers = (users: UserType[]):UsersSetAction => ({
    type: ActionTypes.USERS_SET,
    users
});

export const  loadUsers = (dispatch: Dispatch<Action, StoreState>) => {
    backend.fetchUsers((users:UserType[]) => {
        dispatch(setUsers(users));
    });
};
