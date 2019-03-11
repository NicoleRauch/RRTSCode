import {Action, Dispatch} from "redux";
import {StoreState} from "./reducers";

export interface IDispatchProps {
    dispatch: Dispatch<Action, StoreState>
}



export interface IUser {
    firstName: string,
    lastName: string
}

export interface ProductType {
    id: string,
    price: number
    // ...
}

export interface DataType {
    otherData: string
}
