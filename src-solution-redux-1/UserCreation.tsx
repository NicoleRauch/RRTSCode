import React, {Component} from "react";
import {UserType} from "../src-solution-react/types";

interface UserCreationProps {
    submitUser: (user: UserType) => void
}

interface UserCreationState {
    firstName: string,
    lastName: string
}


export default class extends Component<UserCreationProps, UserCreationState> {

    constructor(props: UserCreationProps) {
        super(props);
        this.state = {firstName: "", lastName: ""};
    }

    render() {
        return (
            <div>
                <div>
                    <label>First name:</label>
                    <input type="text"
                           onBlur={e => this.setState({firstName: e.target.value})}/>
                </div>
<div>
  <label>Last name:</label>
  <input type="text" onBlur={e => this.setState({lastName: e.target.value})}/>
</div>
<div>
  <button
    onClick={() => {
      this.props.submitUser(this.state);
    }}
  >Submit</button>
</div>
            </div>
        );
    }
}
