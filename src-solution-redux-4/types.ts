import {Action, Dispatch} from "redux";
import {StoreState} from "../src-solution-redux-big/reducers";

export interface IDispatchProps {
    dispatch: Dispatch<Action, StoreState>
}


export interface IUser {
    firstName: string,
    lastName: string
}
