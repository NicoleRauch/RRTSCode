import React from "react";
import {shallow, ShallowWrapper} from "enzyme";

import User, {UserWithHighlightProps, UserWithHighlightState} from "../src-solution-react/UserWithHighlight";

describe('UserWithHighlight', () => {
  let user:  ShallowWrapper<UserWithHighlightProps, UserWithHighlightState, User>;

  beforeEach(() => {
    user = shallow<User, UserWithHighlightProps, UserWithHighlightState>(<User user={{firstName:"Paul", lastName:"Meier"}}/>);
  });

  describe('state leads to correct highlighting', () => {
    it('does not highlight the user name when the highlighted state is set to false', () => {
      user.setState({highlighted: false});

      const highlighted = user.find({style: {backgroundColor: "#FF0000"}});
      const unhighlighted = user.find({style: {backgroundColor: "#FFFFFF"}});

      expect(highlighted.length).toEqual(0);
      expect(unhighlighted.length).toEqual(1);
      expect(unhighlighted.text()).toEqual("Paul");
    });

    it('highlights the user name when the highlighted state is set to true', () => {
      user.setState({highlighted: true});

      const highlighted = user.find({style: {backgroundColor: "#FF0000"}});
      const unhighlighted = user.find({style: {backgroundColor: "#FFFFFF"}});

      expect(highlighted.length).toEqual(1);
      expect(highlighted.text()).toEqual("Paul");
      expect(unhighlighted.length).toEqual(0);
    });
  });

  describe('clicking adjusts the state', () => {
    it('the highlight state is initially false', () => {
      expect(user.state("highlighted")).toBeFalsy();
    });

    it('changes highlight state to true after click', () => {
      user.setState({highlighted: false});
      user.simulate("click");
      expect(user.state("highlighted")).toBeTruthy();
    });

    it('changes highlight state to false after click', () => {
      user.setState({highlighted: true});
      user.simulate("click");
      expect(user.state("highlighted")).toBeFalsy();
    });
  });
});
