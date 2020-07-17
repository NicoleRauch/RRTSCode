import React, {Component, ReactElement} from "react";

import ChildComponent from "./ChildComponent";

type LifecycleComponentProps = Record<string, unknown>;

interface LifecycleComponentState {
  checked: boolean
}

type IStatePart<K  extends keyof LifecycleComponentState> = Pick<LifecycleComponentState, K> | LifecycleComponentState | null;
type IState<K  extends keyof LifecycleComponentState> =
    ((prevState: Readonly<LifecycleComponentState>, props: Readonly<LifecycleComponentProps>) => IStatePart<K>)
    | IStatePart<K>;

export default class LifecycleComponent extends Component<LifecycleComponentProps, LifecycleComponentState> {

  constructor(props: LifecycleComponentProps) {
    super(props);
    this.state = {checked: true};
    console.log("Lifecycle Component constructor.");  // eslint-disable-line no-console
  }

  setState<K extends keyof LifecycleComponentState>(state: IState<K>): void {
    console.log("Set State."); // eslint-disable-line no-console
    super.setState(state);
  }

  static getDerivedStateFromProps(): LifecycleComponentState | null {
    console.log("Lifecycle Component get derived state from props."); // eslint-disable-line no-console
    return null;
  }

  shouldComponentUpdate(): boolean {
    console.log("Should Lifecycle Component update?"); // eslint-disable-line no-console
    return true;
  }

  getSnapshotBeforeUpdate(): null {
      console.log("Lifecycle Component get snapshot before update."); // eslint-disable-line no-console
      return null;
  }

  componentDidMount(): void {
    console.log("Lifecycle Component did mount."); // eslint-disable-line no-console
  }

  componentDidUpdate(): void {
    console.log("Lifecycle Component did update."); // eslint-disable-line no-console
  }

  componentWillUnmount(): void {
    console.log("Lifecycle Component will unmount."); // eslint-disable-line no-console
  }

  render(): ReactElement {
    console.log("Lifecycle Component render."); // eslint-disable-line no-console
    return (
      <div>
<ChildComponent checked={this.state.checked} />
<input type="checkbox"
       checked={this.state.checked}
       onChange={(): void => { this.setState({checked: !this.state.checked}) }} />
      </div>
    );
  }
}
