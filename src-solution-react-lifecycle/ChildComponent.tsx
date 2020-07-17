import React, {Component, ReactElement} from "react";

interface ChildComponentProps {
    checked: boolean
}

export default class ChildComponent extends Component<ChildComponentProps> {

  constructor(props: ChildComponentProps) {
    super(props);
    console.log("Child Component constructor."); // eslint-disable-line no-console
  }

  componentDidMount(): void {
    console.log("Child Component did mount."); // eslint-disable-line no-console
  }

  shouldComponentUpdate(): true {
    console.log("Should Child Component update?"); // eslint-disable-line no-console
    return true;
  }

  getSnapshotBeforeUpdate(): null {
      console.log("Child Component get snapshot before update."); // eslint-disable-line no-console
      return null;
  }

  componentDidUpdate(): void {
    console.log("Child Component did update."); // eslint-disable-line no-console
  }

  componentWillUnmount(): void {
    console.log("Child Component will unmount."); // eslint-disable-line no-console
  }

  render(): ReactElement {
    console.log("Child Component render."); // eslint-disable-line no-console
    return <p>{this.props.checked ? "Checked" : "Unchecked"}</p>;
  }

}
