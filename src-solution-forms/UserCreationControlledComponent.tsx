import React, {Component} from "react";

import {IUser} from "../src-solution-redux-big/types";

interface UserCreationControlledComponentProps {
    submitUser: (user: IUser) => void
}

interface UserCreationControlledComponentState {
    firstName: string,
    lastName: string
}

export default class UserCreationControlledComponent extends Component<UserCreationControlledComponentProps, UserCreationControlledComponentState> {

  constructor(props: UserCreationControlledComponentProps) {
    super(props);
    this.state = { firstName: "Pippi", lastName: "Langstrumpf"};
  }

  render(): ReactElement {
    return (
      <div>
        <div>
          <label>First name:</label>
          <input type="text" value={this.state.firstName}
                 onChange={(e): void => this.setState({firstName: e.target.value})} />
        </div>
        <div>
          <label>Last name:</label>
          <input type="text" value={this.state.lastName}
                 onChange={(e): void => this.setState({lastName: e.target.value})} />
        </div>
        <div>
          <button
            onClick={(): void => { this.props.submitUser(this.state); }}
          >Submit</button>
        </div>
      </div>
    );
  }
}
