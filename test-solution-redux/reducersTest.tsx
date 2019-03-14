import expect from "must";
import reducer, {addUser, UserActions} from "../src-solution-redux-4/reducers";
import {IUser} from "../src-solution-react/types";



const user: IUser = {firstName: "firstName", lastName: "lastName"};
const stateUserOne: IUser = {firstName: "Peter", lastName: "Klaus"};
const stateUserTwo: IUser = {firstName: "Max", lastName: "Mustermann"}

describe('reducers', () => {

  describe('Actions', () => {
    it('creates a USER_ADDED action', () => {
      expect(addUser(user)).to.eql({type: UserActions.USER_ADDED, payload: user});
    });
  });

  describe('reducer function', () => {
    it('adds a user when there are no users yet', () => {
      const EMPTY_STATE = {users: []};
      const newState = reducer(EMPTY_STATE, addUser(user));
      expect(newState).to.eql({users: [user]});
    });
    it('adds a user when there are already users in the state', () => {
      const NONEMPTY_STATE = {users: [stateUserOne, stateUserTwo]};
      const newState = reducer(NONEMPTY_STATE, addUser(user));
      expect(newState).to.eql({users: [stateUserOne, stateUserTwo, user]});
    });
  });
});
