import React, {Component} from "react";
import {UserType} from "../src-solution-redux-big/types";

interface UserCreationControlledComponentProps {
    submitUser: (user: UserType) => void
}

interface UserCreationControlledComponentState {
    firstName: string,
    lastName: string
}

export default class extends Component<UserCreationControlledComponentProps, UserCreationControlledComponentState> {

  constructor(props: UserCreationControlledComponentProps) {
    super(props);
    this.state = { firstName: "Pippi", lastName: "Langstrumpf"};
  }

  render() {
    return (
      <div>
        <div>
          <label>First name:</label>
          <input type="text" value={this.state.firstName}
                 onChange={e => this.setState({firstName: e.target.value})} />
        </div>
        <div>
          <label>Last name:</label>
          <input type="text" value={this.state.lastName}
                 onChange={e => this.setState({lastName: e.target.value})} />
        </div>
        <div>
          <button
            onClick={() => { this.props.submitUser(this.state); }}
          >Submit</button>
        </div>
      </div>
    );
  }
}
