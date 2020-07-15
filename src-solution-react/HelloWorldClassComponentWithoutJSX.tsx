import React, {Component, ReactElement} from "react";

export default class HelloWorld extends Component {

    render(): ReactElement {
        return React.createElement('p', null, 'Hello World!');
    }
}
