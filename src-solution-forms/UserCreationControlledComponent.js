import React, {Component} from "react";


export default class extends Component {

  constructor(props) {
    super(props);
    this.state = { firstName: "Pippi", lastName: "Langstrumpf"};
  }

  render() {
    return (
      <div>
        <div>
          <label>First name:</label>
          <input type="text" value={this.state.firstName}
                 onChange={e => this.setState({firstName: e.target.value})} />
        </div>
        <div>
          <label>Last name:</label>
          <input type="text" value={this.state.lastName}
                 onChange={e => this.setState({lastName: e.target.value})} />
        </div>
        <div>
          <button
            onClick={e => { this.props.submitUser(this.state); }}
          >Submit</button>
        </div>
      </div>
    );
  }
}
