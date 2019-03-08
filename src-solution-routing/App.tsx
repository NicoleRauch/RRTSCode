import React, {Component} from "react";
import {HashRouter as Router, Link, Route} from 'react-router-dom';

import HelloWorld from "../src-solution-react/HelloWorldFunctionalComponent";
import User from "../src-solution-react/UserWithHighlight";
import UserList from "../src-solution-react/UserListWithHighlight";
import UserCreationViaInternalState from "../src-solution-react/UserCreationViaInternalState";

const users = [
  {firstName: "Nicole", lastName: "Rauch"},
  {firstName: "Peter", lastName: "Müller"},
  {firstName: "Fritz", lastName: "Walter"}
];

export default class extends Component {

  render() {

    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Hello World</Link></li>
            <li><Link to="/user/Nicole/Rauch">User</Link></li>
            <li><Link to="/users">User List</Link></li>
            <li><Link to="/creation">User Creation</Link></li>
          </ul>
          <hr/>
          <Route exact path="/" component={HelloWorld}/>
          <Route path="/user/:firstName/:lastName"
                 render={({match}) => <User firstName={match.params.firstName} lastName={match.params.lastName}/>}/>
          <Route path="/users" render={() => <UserList users={users}/>}/>
          <Route path="/creation" render={() => <UserCreationViaInternalState submitUser={() => {
          }}/>}/>
        </div>
      </Router>
    );
  }
}
