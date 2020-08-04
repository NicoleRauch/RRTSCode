import React, {Component, ReactElement} from "react";
import {UserProps} from "./User";

export default class UserClass extends Component<UserProps> {
    render(): ReactElement {
        const {user: {firstName, lastName}} = this.props;

        return   <div>
            <label>First name: </label><span>{firstName}</span><br/>
            <label>Last name: </label><span>{lastName}</span><br/>
        </div>;

    }
}
