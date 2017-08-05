import React, { Component } from "react";
import { render } from "react-dom";

export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <header id="header" className="header bg-white container-fluid">
            <div className="container-fluid">
                <h1>HEADER</h1>
            </div>
        </header>
        )
    }
}

