import React, { Component } from "react";
import { render } from "react-dom";
import logo from "../image/ts.svg";

export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <header id="header" className="header container-fluid vertical-center">
            <div id="content-row" className="row">
                <div id="content-container" className="">
                    <img src={logo} className="App-logo img-responsive" alt="logo" />
                    <h2 className="text-center">Actions speak louder than words.</h2>
                </div>
            </div>
        </header>
        )
    }
}
