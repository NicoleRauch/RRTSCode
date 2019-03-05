import * as Events from "./actions";

const INITIAL_STATE = {
  users: [
    {firstName: "Nicole", lastName: "Rauch"},
    {firstName: "Peter", lastName: "Müller"},
    {firstName: "Fritz", lastName: "Walter"}
  ]
};


export default function (state = INITIAL_STATE, action = {}) {
  return {
    users: users(state.users, action)
  };
}

function users(currentUsers, action) {
  switch (action.type) {
    case Events.USER_ADDED:
      return currentUsers.concat(action.payload);
    case Events.USERS_SET:
      return action.payload;
  }
  return currentUsers;
}
