import React, {Component, ReactElement} from "react";
import { connect } from "react-redux";

import UserList from "../src-solution-redux-1/UserList";
import UserCreation from "./UserCreation";

import {loadUsers} from "./actions";
import {StoreState, IDispatchProps} from "./types";

export class AppComponent extends Component<StoreState & IDispatchProps> {

  constructor(props: StoreState & IDispatchProps){
    super(props);
    loadUsers(props.dispatch);
  }

  render(): ReactElement {
    return (
      <div>
        <UserList users={this.props.users} />
        <UserCreation dispatch={this.props.dispatch} />
      </div>
    );
  }
}

export default connect<StoreState, Record<string, unknown>, Record<string, unknown>, StoreState> ((state: StoreState): StoreState => state)(AppComponent);
