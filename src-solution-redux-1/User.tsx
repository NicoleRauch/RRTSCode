import React, {ReactElement} from "react";

import {IUser} from "../src-solution-react/types";

type UserProps = {
  user: IUser
}

const User = ({user:{firstName, lastName}}: UserProps): ReactElement =>
  <div>
    <label>First name: </label><span>{firstName}</span><br/>
    <label>Last name: </label><span>{lastName}</span><br/>
  </div>;

export default User;
