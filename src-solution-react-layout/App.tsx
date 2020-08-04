import { hot } from "react-hot-loader/root";
import React, {Component, ReactElement} from "react";

import User from "./User";
import UserWrapper from "./UserWrapper";
import SingleUserMonolith from "./SingleUserMonolith";
import ComponentWrapper from "./ComponentWrapper";
import CompAsParamWrapper from "./CompAsParamWrapper";
import UserListUsage from "./UserListUsage";

const user = {firstName: "Peter", lastName: "Müller"};

export class App extends Component {

  render(): ReactElement {

    return (
      <div>
<SingleUserMonolith user={user} />
<br />
<UserWrapper user={user} />
<br />
<ComponentWrapper>
  <User user={user} />
</ComponentWrapper>
<br />
<CompAsParamWrapper component={<User user={user} />} />
<br/>
<UserListUsage />
      </div>
    );
  }
}

export default hot(App);
