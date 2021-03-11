import {Action} from "redux";
import {ThunkAction, ThunkDispatch} from "redux-thunk";

import * as t from "io-ts";

const IOUser = t.type({
    firstName: t.string,
    lastName: t.string
});

export type IUser = t.TypeOf<typeof IOUser>;

export const IOUserList = t.array(IOUser);

export type IUserList = t.TypeOf<typeof IOUserList>;

export type UserState = IUserList;

export type StoreState = {
    users: UserState
}

export type TAction = ThunkAction<
    void,
    StoreState,
    unknown,
    Action<string>
    >;

export type TDispatch = ThunkDispatch<
    StoreState,
    void,
    Action<string>
    >;

export type IDispatchProps = {
    dispatch: TDispatch
}
