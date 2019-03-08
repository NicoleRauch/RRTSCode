import {UserType} from "../src-solution-redux-big/types";
import {combineReducers} from "redux";
import {createReducer} from "../src-solution-redux-big/createReducer";
import {ActionTypes, UserAddAction, UsersSetAction} from "./actions";

const INITIAL_STATE = {
  users: [
    {firstName: "Nicole", lastName: "Rauch"},
    {firstName: "Peter", lastName: "Müller"},
    {firstName: "Fritz", lastName: "Walter"}
  ]
};

const users = createReducer(INITIAL_STATE.users, {
  [ActionTypes.USER_ADDED]: (currentUsers: UserType[], action: UserAddAction) => currentUsers.concat(action.user),
    [ActionTypes.USERS_SET]: (_: UserType[], action: UsersSetAction) => action.users
});

export default combineReducers({
    users,
});
