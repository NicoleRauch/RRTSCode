import {Action} from "redux";
import {ThunkAction, ThunkDispatch} from "redux-thunk";

export type IUser = {
    firstName: string,
    lastName: string
}

export type UserState = IUser[];

export type StoreState = {
    users: UserState
}

export type TAction = ThunkAction<
    void,
    StoreState,
    unknown,
    Action
    >;

export type TDispatch = ThunkDispatch<
    StoreState,
    void,
    Action
    >;

export type IDispatchProps = {
    dispatch: TDispatch
}
