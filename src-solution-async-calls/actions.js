import * as backend from "./ajaxcalls";

export const USER_ADDED = "USER_ADDED";
export const USERS_SET = "USERS_SET";

export function addUser(user) {
  return {
    type: "USER_ADDED",
    payload: user
  }
}

export function submitUser(user) {
  return dispatch => {
    backend.postUser(user, returnCode => {
      if(returnCode === 200) {
        dispatch(addUser(user));
      }
    });
  };
}

export function setUsers(users) {
  return {
    type: "USERS_SET",
    payload: users
  }
}

export function loadUsers() {
  return dispatch => {
    backend.fetchUsers(users => {
        dispatch(setUsers(users));
    });
  };
}
