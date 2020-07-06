import React, {Component, FormEvent} from "react";


export default class UserCreationWithFormSubmit extends Component {

  
  render(): React.ReactElement {

    const onSubmit = (e: FormEvent): void => {
      e.preventDefault();
      // console.log(e.currentTarget["firstname"].value + " " + e.currentTarget["lastname"].value);
    }

    return (
      <form onSubmit={onSubmit}>
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
