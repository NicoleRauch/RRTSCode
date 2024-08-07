import React, {ReactElement, useEffect} from "react";
import { connect } from "react-redux";
import * as R from "ramda";

import UserList from "../src-solution-redux-1/UserList";
import UserCreation from "./UserCreation";

import {loadUsers} from "./actions";
import {StoreState, IDispatchProps} from "./types";

export const AppComponent = ({users, dispatch}: StoreState & IDispatchProps): ReactElement => {

  useEffect(() => {
    dispatch(loadUsers());
  }, [dispatch]);

  return <div>
    <UserList users={users}/>
    <UserCreation dispatch={dispatch}/>
  </div>;
};

export default connect<StoreState, Record<string, unknown>, Record<string, unknown>, StoreState>(R.identity)(AppComponent);
