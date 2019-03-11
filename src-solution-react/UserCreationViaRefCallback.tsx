import React, {Component} from "react";
import {IUser} from "./types";


interface UserCreationProps {
    submitUser: (user: IUser) => void
}

export default class UserCreationViaRefCallback extends Component<UserCreationProps> {
    private firstName: HTMLInputElement | null;
    private lastName: HTMLInputElement | null;

    render() {
        return (
            <div>
<div>
  <label>First name:</label>
  <input type="text" ref={c => this.firstName = c}/>
</div>
<div>
  <label>Last name:</label>
  <input type="text" ref={c => this.lastName = c}/>
</div>
<div>
  <button onClick={() =>
    this.props.submitUser({
      firstName: this.firstName ? this.firstName.value : "",
      lastName: this.lastName ? this.lastName.value : "",
    })}>Submit</button>
</div>
            </div>
        );
    }

}
