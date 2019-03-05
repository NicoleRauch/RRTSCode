import {combineReducers} from "redux";

function createReducer(initialState, handlers) {
  return (state = initialState, action = {}) =>
    handlers.hasOwnProperty(action.type) ?
      handlers[action.type](state, action) :
      state
}

const INITIAL_STATE = {
  users: [],
  products: [],
  otherData: null
};

export const USER_ADDED = "USER_ADDED";
export const PRODUCT_ADDED = "PRODUCT_ADDED";
export const DATA_SET = "DATA_SET";
export const DATA_REMOVED = "DATA_REMOVED";

export function addUser(user) {
  return {
    type: USER_ADDED,
    payload: user
  }
}

const users = createReducer(INITIAL_STATE.users, {
  [USER_ADDED]: (currentUsers, action) => currentUsers.concat(action.payload)
});

const products = createReducer(INITIAL_STATE.products, {
  [PRODUCT_ADDED]: (currentProducts, action) => currentProducts.concat(action.payload)
});

const otherData = createReducer(INITIAL_STATE.otherData, {
  [DATA_SET]: (data, action) => data,
  [DATA_REMOVED]: (data, action) => null
});

export default combineReducers({
  users,
  products,
  otherData
});

