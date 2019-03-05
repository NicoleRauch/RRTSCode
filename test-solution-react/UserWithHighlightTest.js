import React from "react";
import expect from "must";

import {shallow} from "enzyme";
import User from "../src-solution-react/UserWithHighlight";


describe('UserWithHighlight', () => {
  let user;

  beforeEach(() => {
    user = shallow(<User firstName="Paul" lastName="Meier"/>);
  });

  describe('state leads to correct highlighting', () => {
    it('does not highlight the user name when the highlighted state is set to false', () => {
      user.setState({highlighted: false});

      const highlighted = user.find({style: {backgroundColor: "#FF0000"}});
      const unhighlighted = user.find({style: {backgroundColor: "#FFFFFF"}});

      expect(highlighted.length).to.be(0);
      expect(unhighlighted.length).to.be(1);
      expect(unhighlighted.text()).to.be("Paul");
    });

    it('highlights the user name when the highlighted state is set to true', () => {
      user.setState({highlighted: true});

      const highlighted = user.find({style: {backgroundColor: "#FF0000"}});
      const unhighlighted = user.find({style: {backgroundColor: "#FFFFFF"}});

      expect(highlighted.length).to.be(1);
      expect(highlighted.text()).to.be("Paul");
      expect(unhighlighted.length).to.be(0);
    });
  });

  describe('clicking adjusts the state', () => {
    it('the highlight state is initially false', () => {
      expect(user.state("highlighted")).to.be.false();
    });

    it('changes highlight state to true after click', () => {
      user.setState({highlighted: false});
      user.simulate("click");
      expect(user.state("highlighted")).to.be.true();
    });

    it('changes highlight state to false after click', () => {
      user.setState({highlighted: true});
      user.simulate("click");
      expect(user.state("highlighted")).to.be.false();
    });
  });
});
