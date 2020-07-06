import React, {Component} from "react";

export default class HelloWorld extends Component {

    render(): React.ReactElement {
        return React.createElement('p', null, 'Hello World!');
    }
}
