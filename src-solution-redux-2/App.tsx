import React, {Component, ReactElement} from "react";
import { connect } from "react-redux";
import {IDispatchProps, StoreState} from "./types";
import UserList from "../src-solution-redux-1/UserList";
import UserCreation from "./UserCreation";

export class AppComponent extends Component<StoreState & IDispatchProps> {

  render(): ReactElement {
    return <div>
        <UserList users={this.props.users} />
        <UserCreation dispatch={this.props.dispatch} />
      </div>;}}

export default connect<StoreState, Record<string, unknown>, Record<string, unknown>, StoreState>
((state: StoreState): StoreState => state)(AppComponent);
