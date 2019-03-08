import React, {Component} from "react";

interface ChildComponentProps {
    checked: boolean
}

export default class extends Component<ChildComponentProps> {

  constructor(props: ChildComponentProps) {
    super(props);
    console.log("Child Component constructor.")
  }

  componentDidMount() {
    console.log("Child Component did mount.");
  }

  shouldComponentUpdate() {
    console.log("Should Child Component update?");
    return true;
  }

  componentDidUpdate() {
    console.log("Child Component did update.");
  }

  componentWillUnmount() {
    console.log("Child Component will unmount.");
  }

  render() {
    console.log("Child Component render.");
    return <p>{this.props.checked ? "Checked" : "Unchecked"}</p>;
  }

}
