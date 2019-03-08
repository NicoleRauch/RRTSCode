import React, {Component, FormEvent} from "react";


export default class extends Component {

  onSubmit(e: FormEvent) {
    e.preventDefault();
    console.log(e.currentTarget["firstname"].value + " " + e.currentTarget["lastname"].value);
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
