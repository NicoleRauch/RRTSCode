import React, {Component} from "react";


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

    this._handleToggleClick = this._handleToggleClick.bind(this);

    this.state = {highlighted: false};
  }

  render(): React.ReactElement {
    const highlightColor = this.state.highlighted
      ? "#FF0000" : "#FFFFFF";

    return (
      <div onClick={this._handleToggleClick}
         style={{cursor: "pointer"}}>
          <label>First name: </label>
          <span style={{backgroundColor: highlightColor}}>
        {this.props.firstName}</span><br/>
          <label>Last name: </label>
          <span>{this.props.lastName}</span><br/>
        </div>
    );
  }

    _handleToggleClick(): void {
        this.setState({highlighted: !this.state.highlighted});
    }
}
