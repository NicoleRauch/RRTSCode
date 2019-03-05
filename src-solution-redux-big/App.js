import React, {Component} from "react";
import { connect } from "react-redux";

import UserList from "../src-solution-redux-1/UserList";
import UserCreation from "../src-solution-redux-1/UserCreation";

import {addUser} from "./reducers";

export class AppComponent extends Component {

  render() {
    return (
      <div>
        <UserList users={this.props.specialUsers} />
        <UserCreation submitUser={ user => { this.props.dispatchUser(user); } } />
      </div>
    );
  }
}

const mapStateToProps = state => ({
    specialUsers: state.users
});

const mapDispatchToProps = dispatch => ({
    dispatchUser: user => dispatch(addUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(AppComponent);
