import React, {Component} from "react";
import { connect } from "react-redux";

import UserList from "../src-solution-redux-1/UserList";
import UserCreation from "../src-solution-redux-1/UserCreation";

import {addUser} from "./reducers";
import {StoreState} from "../src-solution-redux-3/reducers";
import {IDispatchProps} from "./types";

export class AppComponent extends Component<StoreState & IDispatchProps> {

  render() {

      const {users, dispatch} = this.props;

    return (
      <div>
        <UserList users={users} />
<UserCreation submitUser={ user =>
              { dispatch(addUser(user)); } } />
      </div>
    );
  }
}

export default connect<StoreState, {}, {}, StoreState> ((state: StoreState): StoreState => state)(AppComponent);
