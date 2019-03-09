import React, {Component} from "react";
import { connect } from "react-redux";

import UserList from "../src-solution-redux-1/UserList";
import UserCreation from "../src-solution-redux-1/UserCreation";

import {submitUser, loadUsers} from "./actions";
import {StoreState} from "../src-solution-redux-3/reducers";
import {IDispatchProps} from "../src-solution-redux-big/types";

export class AppComponent extends Component<StoreState & IDispatchProps> {

  constructor({dispatch}: IDispatchProps){
    super({users: [], dispatch});
    loadUsers(dispatch);
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

export default connect<StoreState, {}, {}, StoreState> ((state: StoreState): StoreState => state)(AppComponent);
