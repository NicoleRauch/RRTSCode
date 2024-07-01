import {Action} from "redux";
import {ThunkAction, ThunkDispatch} from "redux-thunk";

export type IUser = {
    firstName: string,
    lastName: string
}

export type ProductType = {
    id: string,
    price: number
    // ...
}

export type DataType = {
    otherData: string
}

export type UserState = IUser[];
export type ProductState = ProductType[];
export type OtherDataState = DataType | null;

export type StoreState = {
    users: UserState
    products: ProductState,
    otherData: OtherDataState,
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
