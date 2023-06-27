import * as R from "ramda";
import React, {ReactElement} from "react";
import { connect } from "react-redux";
import {IDispatchProps, StoreState} from "./types";
import UserList from "../src-solution-redux-1/UserList";
import UserCreation from "./UserCreation";

export const AppComponent = ({users, dispatch}: StoreState & IDispatchProps): ReactElement =>
    <div>
        <UserList users={users} />
        <UserCreation dispatch={dispatch} />
      </div>;

export default connect<StoreState, Record<string, unknown>, Record<string, unknown>, StoreState>
(R.identity)(AppComponent);
