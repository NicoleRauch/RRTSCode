import {Action, combineReducers} from "redux";
import {DataType, ProductType, IUser} from "./types";
import {createReducer} from "./createReducer";

export interface StoreState {
    users: IUser[]
    products: ProductType[],
    otherData: DataType | null,
}

export enum ActionTypes {
    USER_ADDED = "USER_ADDED",
    PRODUCT_ADDED = "PRODUCT_ADDED",
    DATA_SET = "DATA_SET",
    DATA_REMOVED = "DATA_REMOVED"
}

export interface UserAddAction extends Action {
    type: ActionTypes.USER_ADDED,
    user: IUser
}

export function addUser(user: IUser): UserAddAction {
    return {
        type: ActionTypes.USER_ADDED,
        user
    };
}

const INITIAL_STATE_USERS: IUser[] = [];
const users = createReducer(INITIAL_STATE_USERS, {
  [ActionTypes.USER_ADDED]: (currentUsers: IUser[], action: UserAddAction) => currentUsers.concat(action.user)
});

export interface ProductAddAction extends Action {
    type: ActionTypes.PRODUCT_ADDED
    product: ProductType
}

export function addProduct(product: ProductType): ProductAddAction {
    return {
        type: ActionTypes.PRODUCT_ADDED,
        product
    }
}

const INITIAL_STATE_PRODUCTS: ProductType[] = [];

const products = createReducer(INITIAL_STATE_PRODUCTS, {
  [ActionTypes.PRODUCT_ADDED]: (currentProducts: ProductType[], action: ProductAddAction) => currentProducts.concat(action.product)
});

export interface DataSetAction extends Action {
    type: ActionTypes.DATA_SET,
    data: DataType
}

export function setData(data: DataType): DataSetAction {
    return {
        type: ActionTypes.DATA_SET,
        data
    }
}

export interface DataRemoveAction extends Action {
    type: ActionTypes.DATA_REMOVED
}

export function removeData(): DataRemoveAction {
    return {
        type: ActionTypes.DATA_REMOVED
    }
}

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

