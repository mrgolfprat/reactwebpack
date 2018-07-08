import React, { Component } from "react";

export default function navbar(Child) {
    return class extends Component {
        constructor(props) {
            super(props);
        }
        render() {
            return (
                <div>
                    <h2>Hello, this is a decorator navigation bar</h2>
                    <Child />
                </div>
            )
        }
    }
}
