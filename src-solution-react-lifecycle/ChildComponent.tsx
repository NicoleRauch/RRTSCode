import React, {Component} from "react";

interface ChildComponentProps {
    checked: boolean
}

export default class extends Component<ChildComponentProps> {

  constructor(props: ChildComponentProps) {
    super(props);
    console.log("Child Component constructor."); // tslint:disable-line:no-console
  }

  componentDidMount() {
    console.log("Child Component did mount."); // tslint:disable-line:no-console
  }

  shouldComponentUpdate() {
    console.log("Should Child Component update?"); // tslint:disable-line:no-console
    return true;
  }

  componentDidUpdate() {
    console.log("Child Component did update."); // tslint:disable-line:no-console
  }

  componentWillUnmount() {
    console.log("Child Component will unmount."); // tslint:disable-line:no-console
  }

  render() {
    console.log("Child Component render."); // tslint:disable-line:no-console
    return <p>{this.props.checked ? "Checked" : "Unchecked"}</p>;
  }

}
