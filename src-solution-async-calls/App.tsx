import React, {Component, ReactElement} from "react";
import { connect } from "react-redux";

import UserList from "../src-solution-redux-1/UserList";
import UserCreation from "../src-solution-redux-1/UserCreation";

import {submitUser, loadUsers} from "./actions";
import {StoreState} from "./types";
import {IDispatchProps} from "./types";

export class AppComponent extends Component<StoreState & IDispatchProps> {

  constructor(props: StoreState & IDispatchProps){
    super(props);
    loadUsers(props.dispatch);
  }

  render(): ReactElement {
    return (
      <div>
        <UserList users={this.props.users} />
<UserCreation submitUser={
  (user): void => { this.props.dispatch(submitUser(user)); }
} />
      </div>
    );
  }
}

export default connect<StoreState, Record<string, unknown>, Record<string, unknown>, StoreState> ((state: StoreState): StoreState => state)(AppComponent);
