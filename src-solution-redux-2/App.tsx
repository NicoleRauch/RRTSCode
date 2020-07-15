import React, {Component} from "react";
import {connect} from "react-redux";

import UserList from "../src-solution-redux-1/UserList";
import UserCreation from "../src-solution-redux-1/UserCreation";
import {StoreState} from "./reducers";

export class AppComponent extends Component<StoreState> {

    render(): ReactElement {

        const {users} = this.props;

        return (
            <div>
                <UserList users={users}/>
                <UserCreation submitUser={(): void => { //
                }}/>
            </div>
        );
    }
}

export default connect<StoreState, Record<string, unknown>, Record<string, unknown>, StoreState> ((state: StoreState): StoreState => state)(AppComponent);
