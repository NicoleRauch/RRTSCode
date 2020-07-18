import {Action, Dispatch} from "redux";

export interface IDispatchProps {
    dispatch: Dispatch<Action>
}

export interface IUser {
    firstName: string,
    lastName: string
}

export type UsersState = IUser[];

export interface StoreState {
    users: UsersState
}
