import React, {Component, ReactElement} from "react";

import {IUser} from "./types";


interface UserCreationProps {
    submitUser: (user: IUser) => void
}

export default class UserCreationViaRefCallback extends Component<UserCreationProps> {
    private firstName: HTMLInputElement | null;
    private lastName: HTMLInputElement | null;

    render(): ReactElement {
        return (
            <div>
<div>
  <label>First name:</label>
  <input type="text" ref={(c): HTMLInputElement | null => this.firstName = c}/>
</div>
<div>
  <label>Last name:</label>
  <input type="text" ref={(c): HTMLInputElement | null => this.lastName = c}/>
</div>
<div>
  <button onClick={(): void =>
    this.props.submitUser({
      firstName: this.firstName ? this.firstName.value : "",
      lastName: this.lastName ? this.lastName.value : "",
    })}>Submit</button>
</div>
            </div>
        );
    }

}
