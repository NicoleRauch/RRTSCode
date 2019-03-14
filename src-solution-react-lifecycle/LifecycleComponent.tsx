import React, {Component} from "react";
import ChildComponent from "./ChildComponent";

interface LifecycleComponentState {
  checked: boolean
}

export default class extends Component<{}, LifecycleComponentState> {

  constructor() {
    super({});
    this.state = {checked: true};
    console.log("Lifecycle Component constructor.");  // tslint:disable-line:no-console
  }

  componentDidMount() {
    console.log("Lifecycle Component did mount."); // tslint:disable-line:no-console
  }

  shouldComponentUpdate() {
    console.log("Should Lifecycle Component update?"); // tslint:disable-line:no-console
    return true;
  }

  componentDidUpdate() {
    console.log("Lifecycle Component did update."); // tslint:disable-line:no-console
  }

  componentWillUnmount() {
    console.log("Lifecycle Component will unmount."); // tslint:disable-line:no-console
  }

  render() {
    console.log("Lifecycle Component render."); // tslint:disable-line:no-console
    return (
      <div>
<ChildComponent checked={this.state.checked} />
<input type="checkbox"
       checked={this.state.checked}
       onChange={() => { this.setState({checked: !this.state.checked}) }} />
      </div>
    );
  }
}
