import React, {Component} from "react";
import ChildComponent from "./ChildComponent";

export default class extends Component {

  constructor(props) {
    super(props);
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
       onChange={(e) => { this.setState({checked: !this.state.checked}) }} />
      </div>
    );
  }
}
