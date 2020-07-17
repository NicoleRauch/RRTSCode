import { hot } from "react-hot-loader/root";
import React, {Component, ReactElement} from "react";
import { connect } from "react-redux";

import UserList from "../src-solution-redux-1/UserList";
import UserCreation from "../src-solution-redux-1/UserCreation";

import {addUser} from "./reducers";
import {IDispatchProps, StoreState} from "./types";

export class AppComponent extends Component<StoreState & IDispatchProps> {

  render(): ReactElement {

      const {users, dispatch} = this.props;

    return (
      <div>
        <UserList users={users} />
<UserCreation submitUser={ (user): void =>
              { dispatch(addUser(user)); } } />
      </div>
    );
  }
}

export default hot(connect<StoreState, Record<string, unknown>, Record<string, unknown>, StoreState> ((state: StoreState): StoreState => state)(AppComponent));
