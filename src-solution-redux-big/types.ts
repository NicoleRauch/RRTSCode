import {Action, Dispatch} from "redux";

export interface IDispatchProps {
    dispatch: Dispatch<Action>
}



export interface UserType {
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
