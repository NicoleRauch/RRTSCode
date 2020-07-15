import React, {Component, ReactElement} from "react";

import {IUser} from "../src-solution-react/types";

interface UserCreationProps {
    submitUser: (user: IUser) => void
}

interface UserCreationState {
    firstName: string,
    lastName: string
}


export default class UserCreation extends Component<UserCreationProps, UserCreationState> {

    constructor(props: UserCreationProps) {
        super(props);
        this.state = {firstName: "", lastName: ""};
    }

    render(): ReactElement {
        return (
            <div>
                <div>
                    <label>First name:</label>
                    <input type="text"
                           onBlur={(e): void => this.setState({firstName: e.target.value})}/>
                </div>
<div>
  <label>Last name:</label>
  <input type="text" onBlur={(e): void => this.setState({lastName: e.target.value})}/>
</div>
<div>
  <button
    onClick={(): void => {
      this.props.submitUser(this.state);
    }}
  >Submit</button>
</div>
            </div>
        );
    }
}
