import { hot } from "react-hot-loader/root";
import React, {Component, ReactElement} from "react";

import User from "./User";
import SingleUser from "./SingleUser";
import SingleUserMonolith from "./SingleUserMonolith";
import SingleUserWrapper from "./SingleUserWrapper";
import SingleUserParam from "./SingleUserParam";
import SingleUserParamAndData from "./SingleUserParamAndData";

import UserList from "./UserList";


const users = [
    {firstName: "Nicole", lastName: "Rauch"},
    {firstName: "Peter", lastName: "Müller"},
    {firstName: "Fritz", lastName: "Walter"}
];

const user = {firstName: "Peter", lastName: "Müller"};

export class App extends Component {

  render(): ReactElement {

    return (
      <div>
<SingleUserMonolith user={user} />
<br />
<SingleUser user={user} />
<br />
<SingleUserWrapper>
  <User {...user} />
</SingleUserWrapper>
<br />
<SingleUserParam component={<User {...user} />} />
<br />
<SingleUserParamAndData component={<User firstName="" lastName="" />} user={user} />
<br />

<hr/>
<UserList users={users} component={<User firstName="" lastName="" />} />
      </div>
    );
  }
}

export default hot(App);
