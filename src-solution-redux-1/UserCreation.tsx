import React, {ReactElement, useState} from "react";

import {IUser} from "../src-solution-react/types";

export type UserCreationProps = {
  submitUser: (user: IUser) => void
}
const UserCreation = ({submitUser}: UserCreationProps): ReactElement => {

  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");

  return <div><div>
      <label>First name:</label>
      <input type="text"
             onBlur={(e): void => setFirstName(e.target.value)}/>
    </div>
    <div>
      <label>Last name:</label>
      <input type="text" onBlur={(e): void => setLastName(e.target.value)}/>
    </div>
    <div>
      <button
        onClick={(): void => {
          submitUser({firstName, lastName});
        }}>Submit
      </button>
    </div>
  </div>;
};

export default UserCreation;
