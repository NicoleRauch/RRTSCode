import React, {ReactElement} from "react";

import {IUser} from "../src-solution-react/types";


const User = ({firstName, lastName}: IUser): ReactElement =>
  <div>
    <label>First name: </label><span>{firstName}</span><br/>
    <label>Last name: </label><span>{lastName}</span><br/>
  </div>;

export default User;
