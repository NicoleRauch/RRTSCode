import React, {Component} from "react";
import { connect } from "react-redux";

import UserList from "../src-solution-redux-1/UserList";
import UserCreation from "../src-solution-redux-1/UserCreation";

import {addUser, StoreState} from "./reducers";

export class AppComponent extends Component<StoreState> {

  render() {

      const {users} = this.props;

    return (
      <div>
        <UserList users={users} />
<UserCreation submitUser={ user => { addUser(user); } } />
      </div>
    );
  }
}

export default connect<StoreState, {}, {}, StoreState> ((state: StoreState): StoreState => state)(AppComponent);