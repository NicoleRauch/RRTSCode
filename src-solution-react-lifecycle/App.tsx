import { hot } from "react-hot-loader/root";
import React, {Component, ReactElement} from "react";

import LifecycleComponent from "./LifecycleComponent";

export class App extends Component {

  render(): ReactElement {
    return <LifecycleComponent/>;
  }
}

export default hot(App);
