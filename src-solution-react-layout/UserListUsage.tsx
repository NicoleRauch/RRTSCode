import UserList from "./UserList";
import User, {UserProps} from "./User";
import UserClass from "./UserClass";
import FewerPropsFunctional from "../src-solution-react/HelloWorldFunctionalComponent";
// import FewerPropsClass from "../src-solution-react/HelloWorldClassComponent";
import React, {Component, ReactElement} from "react";

const MorePropsFunctional = ({user, more}: UserProps & {more: number}): ReactElement =>
    <div>{user.firstName} {String(more)}</div>

class MorePropsClass extends Component<UserProps & {more: number}> {
    render(): ReactElement {
        return <div>{this.props.user.firstName} {String(this.props.more)}</div>
    }
}
const users = [
    {firstName: "Nicole", lastName: "Rauch"},
    {firstName: "Peter", lastName: "Müller"},
    {firstName: "Fritz", lastName: "Walter"}
];

const UserListUsage = (): ReactElement =>
    <div>
        <UserList users={users} EntryComp={User} />
        <UserList users={users} EntryComp={UserClass} />
        <UserList users={users} EntryComp={FewerPropsFunctional} />
        { /* <UserList users={users} EntryComp={FewerPropsClass} /> does not compile */ }
        <UserList users={users} EntryComp={MorePropsFunctional} />
        <UserList users={users} EntryComp={MorePropsClass} />
    </div>

export default UserListUsage;
