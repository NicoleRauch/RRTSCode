import React from "react";

import { shallow } from "enzyme";

import User from "../src-solution-react/User";
import UserList from "../src-solution-react/UserList";


describe('UserList', () => {
  it('displays the name that is passed to it', () => {
const users = shallow(<UserList users={[
  {firstName:"Petra", lastName:"Meier"},
  {firstName:"Peter", lastName:"Miller"}]} />);

const elems = users.find("li");
expect(elems.length).toEqual(2);

expect(elems.at(0).key()).toEqual("userlist_PetraMeier");
expect(elems.at(1).key()).toEqual("userlist_PeterMiller");

expect(users.children().at(0).key()).toEqual("userlist_PetraMeier");
expect(users.childAt(0).key()).toEqual("userlist_PetraMeier");

const userComps = users.find(User);
expect(userComps.length).toEqual(2);

expect(userComps.at(0).key()).toBeNull();

expect(userComps.at(0).props())
  .toEqual({user :{firstName:"Petra", lastName:"Meier"}});
expect(userComps.at(1).props())
  .toEqual({user :{firstName:"Peter", lastName:"Miller"}});

expect(userComps.at(0).prop("user")).toEqual({firstName:"Petra", lastName:"Meier"});

  });
});
