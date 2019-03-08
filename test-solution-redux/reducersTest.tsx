import React from "react";
import expect from "must";
import reducer, {addUser, USER_ADDED} from "../src-solution-redux-4/reducers";

const user = "some user payload";

describe('reducers', function () {

  describe('Actions', function () {
    it('creates a USER_ADDED action', function () {
      expect(addUser(user)).to.eql({type: USER_ADDED, payload: user});
    });
  });

  describe('reducer function', function () {
    it('adds a user when there are no users yet', function () {
      const EMPTY_STATE = {users: []};
      const newState = reducer(EMPTY_STATE, addUser(user));
      expect(newState).to.eql({users: [user]});
    });
    it('adds a user when there are already users in the state', function () {
      const NONEMPTY_STATE = {users: ["user_1", "user_2"]};
      const newState = reducer(NONEMPTY_STATE, addUser(user));
      expect(newState).to.eql({users: ["user_1", "user_2", user]});
    });
  });
});
