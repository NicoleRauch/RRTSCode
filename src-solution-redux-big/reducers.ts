import {combineReducers} from "redux";

import {DataType, ProductType, IUser} from "./types";
import {createReducer, ActionT} from "./createReducer";

export enum ActionTypes {
    USER_ADDED = "USER_ADDED",
    PRODUCT_ADDED = "PRODUCT_ADDED",
    DATA_SET = "DATA_SET",
    DATA_REMOVED = "DATA_REMOVED"
}

export interface UserAddAction extends ActionT {
    type: ActionTypes.USER_ADDED,
    user: IUser
}

export const addUser = (user: IUser): UserAddAction => ({
    type: ActionTypes.USER_ADDED,
    user
});


const INITIAL_STATE_USERS: IUser[] = [];
const users = createReducer(INITIAL_STATE_USERS, {
  [ActionTypes.USER_ADDED]: (currentUsers: IUser[], action: UserAddAction) => currentUsers.concat(action.user)
});

export interface ProductAddAction extends ActionT {
    type: ActionTypes.PRODUCT_ADDED
    product: ProductType
}

export const addProduct = (product: ProductType): ProductAddAction => ({
    type: ActionTypes.PRODUCT_ADDED,
    product
});


const INITIAL_STATE_PRODUCTS: ProductType[] = [];

const products = createReducer(INITIAL_STATE_PRODUCTS, {
  [ActionTypes.PRODUCT_ADDED]: (currentProducts: ProductType[], action: ProductAddAction) => currentProducts.concat(action.product)
});

export interface DataSetAction extends ActionT {
    type: ActionTypes.DATA_SET,
    data: DataType
}

export const setData = (data: DataType): DataSetAction => ({
    type: ActionTypes.DATA_SET,
    data
})


export interface DataRemoveAction extends ActionT {
    type: ActionTypes.DATA_REMOVED
}

export const removeData = (): DataRemoveAction => ({
    type: ActionTypes.DATA_REMOVED
})


const INITIAL_STATE_OTHER_DATA: DataType | null = null;

const otherData = createReducer(INITIAL_STATE_OTHER_DATA, {
  [ActionTypes.DATA_SET]: (data:DataType, _:DataSetAction) => data,
  [ActionTypes.DATA_REMOVED]: (_: DataType, __: DataRemoveAction) => null
});

export default combineReducers({
  users,
  products,
  otherData
});

