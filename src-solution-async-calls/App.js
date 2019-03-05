import React, {Component} from "react";
import { connect } from "react-redux";

import UserList from "../src-solution-redux-1/UserList";
import UserCreation from "../src-solution-redux-1/UserCreation";

import {submitUser, loadUsers} from "./actions";

export class AppComponent extends Component {

  constructor({dispatch}){
    super();
    dispatch(loadUsers());
  }

  render() {
    return (
      <div>
        <UserList users={this.props.users} />
<UserCreation submitUser={
  user => { this.props.dispatch(submitUser(user)); }
} />
      </div>
    );
  }
}

export default connect(state => state)(AppComponent);
