import React, {Component, ReactElement} from "react";
import {HashRouter as Router, Link, Route, Routes, useParams} from 'react-router-dom';

import HelloWorld from "../src-solution-react/HelloWorldFunctionalComponent";
import User from "../src-solution-react/UserWithHighlight";
import UserList from "../src-solution-react/UserListWithHighlight";
import UserCreationViaInternalState from "../src-solution-react/UserCreationViaInternalState";

const users = [
  {firstName: "Nicole", lastName: "Rauch"},
  {firstName: "Peter", lastName: "Müller"},
  {firstName: "Fritz", lastName: "Walter"}
];

type MatchParams = {
  firstName: string,
  lastName: string,
}

const UserWrapper = (): ReactElement => {
    const userParams = useParams<MatchParams>();
    return <User user={{
        firstName: userParams.firstName || "", // eslint-disable-line @typescript-eslint/strict-boolean-expressions
        lastName: userParams.lastName || ""    // eslint-disable-line @typescript-eslint/strict-boolean-expressions
    }} />;
}

export class App extends Component {

  render() : ReactElement {

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
         <Routes>
           <Route path="/" element={<HelloWorld/>}/>
           <Route path="/user/:firstName/:lastName" element={<UserWrapper/>}/>
           <Route path="/users" element={<UserList users={users}/>}/>
           <Route path="/creation" element={<UserCreationViaInternalState submitUser={():void => { //
           }}/>}/>
         </Routes>
       </div>
     </Router>
    );
  }
}

export default App;
