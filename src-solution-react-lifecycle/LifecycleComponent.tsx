import React, {Component} from "react";
import ChildComponent from "./ChildComponent";

interface LifecycleComponentState {
  checked: boolean
}

export default class extends Component<{}, LifecycleComponentState> {

  constructor() {
    super({});
    this.state = {checked: true};
    console.log("Lifecycle Component constructor.")
  }

  componentDidMount() {
    console.log("Lifecycle Component did mount.");
  }

  shouldComponentUpdate() {
    console.log("Should Lifecycle Component update?");
    return true;
  }

  componentDidUpdate() {
    console.log("Lifecycle Component did update.");
  }

  componentWillUnmount() {
    console.log("Lifecycle Component will unmount.");
  }

  render() {
    console.log("Lifecycle Component render.");
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
