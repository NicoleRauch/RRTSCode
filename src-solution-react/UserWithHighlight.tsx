import React, {Component, ReactElement} from "react";


export interface UserWithHighlightProps {
    firstName: string,
    lastName: string
}

export interface UserWithHighlightState {
    highlighted: boolean
}


export default class UserWithHighlight extends Component<UserWithHighlightProps, UserWithHighlightState> {
  constructor(props: UserWithHighlightProps) {
    super(props);
    this.state = {highlighted: false};
  }

  render(): ReactElement {
    const highlightColor = this.state.highlighted
      ? "#FF0000" : "#FFFFFF";

    return (
      <div onClick={this.handleToggleClick.bind(this) as ()=>void}
         style={{cursor: "pointer"}}>
          <label>First name: </label>
          <span style={{backgroundColor: highlightColor}}>
        {this.props.firstName}</span><br/>
          <label>Last name: </label>
          <span>{this.props.lastName}</span><br/>
        </div>
    );
  }

    handleToggleClick(): void {
        this.setState({highlighted: !this.state.highlighted});
    }
}
