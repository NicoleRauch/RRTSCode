import {Action} from "redux";
import {ThunkAction, ThunkDispatch} from "redux-thunk";

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

export type UserState = IUser[];
export type ProductState = ProductType[];
export type OtherDataState = DataType | null;

export interface StoreState {
    users: UserState
    products: ProductState,
    otherData: OtherDataState,
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

export interface IDispatchProps {
    dispatch: TDispatch
}
