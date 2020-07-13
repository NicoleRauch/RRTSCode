import React, {Component} from "react";

import ChildComponent from "./ChildComponent";

interface LifecycleComponentState {
  checked: boolean
}

export default class LifecycleComponent extends Component<Record<string, unknown>, LifecycleComponentState> {

  constructor() {
    super({});
    this.state = {checked: true};
    console.log("Lifecycle Component constructor.");  // eslint-disable-line no-console
  }

  componentDidMount(): void {
    console.log("Lifecycle Component did mount."); // eslint-disable-line no-console
  }

  shouldComponentUpdate(): true {
    console.log("Should Lifecycle Component update?"); // eslint-disable-line no-console
    return true;
  }

  componentDidUpdate(): void {
    console.log("Lifecycle Component did update."); // eslint-disable-line no-console
  }

  componentWillUnmount(): void {
    console.log("Lifecycle Component will unmount."); // eslint-disable-line no-console
  }

  render(): React.ReactElement {
    console.log("Lifecycle Component render."); // eslint-disable-line no-console
    return (
      <div>
<ChildComponent checked={this.state.checked} />
<input type="checkbox"
       checked={this.state.checked}
       onChange={(): void => { this.setState({checked: !this.state.checked}) }} />
      </div>
    );
  }
}
