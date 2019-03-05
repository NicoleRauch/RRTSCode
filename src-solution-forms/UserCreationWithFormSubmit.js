import React, {Component} from "react";


export default class extends Component {

  onSubmit(e) {
    e.preventDefault();
    console.log(e.target.firstname.value + " " + e.target.lastname.value);
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div>
          <label>First name:</label>
          <input type="text" name="firstname"/>
        </div>
        <div>
          <label>Last name:</label>
          <input type="text" name="lastname"/>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}
