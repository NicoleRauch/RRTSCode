import {combineReducers} from "redux";

import {IUserList} from "./types";
import {createReducer} from "../src-solution-redux-big/createReducer";
import {ActionTypes, UserAddAction, UsersSetAction} from "./actions";

const INITIAL_STATE = {
  users: []
};

const users = createReducer(INITIAL_STATE.users, {
  [ActionTypes.USER_ADDED]: (currentUsers: IUserList, action: UserAddAction) => currentUsers.concat(action.user),
  [ActionTypes.USERS_SET]: (_: IUserList, action: UsersSetAction) => action.users
});

export default combineReducers({
    users,
});
