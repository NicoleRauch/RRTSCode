import {Action, Dispatch} from "redux";

import * as backend from "./ajaxcalls";
import {IOUserList, IUser, IUserList, TAction} from "./types";
import {RawGETType, validate} from "./validation";
import {fold} from "fp-ts/Option";

export enum ActionTypes {
    USER_ADDED = "USER_ADDED",
    USERS_SET = "USERS_SET"
}


export type UserAddAction = Action<ActionTypes.USER_ADDED> & {
    user: IUser
}

export const addUser = (user: IUser): UserAddAction => ({
    type: ActionTypes.USER_ADDED,
    user
});


export const submitUser = (user: IUser): TAction =>
    (dispatch: Dispatch<Action>): void => {
        backend.postUser(user, returnCode => {
            if (returnCode === 200) {
                dispatch(addUser(user));
            }
        });
    };


export type UsersSetAction = Action<ActionTypes.USERS_SET> & {
    users: IUser[]
}


export const setUsers = (users: IUserList): UsersSetAction => ({
    type: ActionTypes.USERS_SET,
    users
});

export const loadUsers = (): TAction =>
    (dispatch: Dispatch<Action>): void => {
        backend.fetchUsers((usersRaw: RawGETType) => {
            validate<IUserList>(usersRaw, IOUserList, "User List",
                fold(() => {
                // error message or something
                }, (userList: IUserList) => {
                    dispatch(setUsers(userList));
                }));
        });
    };
