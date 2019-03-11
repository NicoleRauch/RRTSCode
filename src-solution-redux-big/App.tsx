import React, {Component} from "react";
import { connect } from "react-redux";

import UserList from "../src-solution-redux-1/UserList";
import UserCreation from "../src-solution-redux-1/UserCreation";

import {addUser, StoreState} from "./reducers";
import {IUser} from "./types";
import {Action, Dispatch} from "redux";

interface AppComponentProps {
    specialUsers: IUser[]
}

interface AppComponentDispatch {
    dispatchUser: (u: IUser) => void
}

export class AppComponent extends Component<AppComponentProps & AppComponentDispatch> {

  render() {
    return (
      <div>
        <UserList users={this.props.specialUsers} />
        <UserCreation submitUser={ user => { this.props.dispatchUser(user); } } />
      </div>
    );
  }
}

const mapStateToProps = (state:StoreState): AppComponentProps => ({
    specialUsers: state.users
});

const mapDispatchToProps = (dispatch: Dispatch<Action, StoreState>): AppComponentDispatch => ({
    dispatchUser: user => dispatch(addUser(user))
});

export default connect<AppComponentProps, AppComponentDispatch, {}, StoreState>(mapStateToProps, mapDispatchToProps)(AppComponent);
