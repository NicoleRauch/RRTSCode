import React, {Component, ReactElement} from "react";
import {Action, Dispatch} from "redux";
import { connect } from "react-redux";

import UserList from "../src-solution-redux-1/UserList";
import UserCreation from "../src-solution-redux-1/UserCreation";

import {addUser, UserAddAction} from "./reducers";
import {IUser, StoreState} from "./types";

interface AppProps { specialUsers: IUser[] }
interface AppDispatch { dispatchUser: (u: IUser) => void }

export class AppComponent extends Component<AppProps & AppDispatch> {

  render(): ReactElement {
    return (
      <div>
<UserList users={this.props.specialUsers} />
<UserCreation submitUser={ (user): void => { this.props.dispatchUser(user); } } />
      </div>
    );
  }
}

const mapStateToProps = (state:StoreState): AppProps => ({
    specialUsers: state.users
});
const mapDispatchToProps = (dispatch: Dispatch<Action>): AppDispatch => ({
    dispatchUser: (user): UserAddAction => dispatch(addUser(user))
});
export default connect<AppProps, AppDispatch, Record<string, unknown>, StoreState>(mapStateToProps, mapDispatchToProps)(AppComponent);
