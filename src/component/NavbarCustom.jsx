import React, { Component } from "react";
import { render } from "react-dom";
import { Navbar } from "react-bootstrap";
import $ from "jquery/src/jquery";
import 'jquery-easing/jquery.easing.1.3.js';
window.jQuery = $;

export default class NavbarCustom extends Component {
    constructor(props) {
        super(props);
    }

    handleClick(hrefTag) {
        $("html, body").stop().animate({ scrollTop: ($(hrefTag).offset().top - 50) }, 1250, "easeInOutExpo");
        $(".navbar-toggler:visible").click();
    }

    render() {
        const location = {
            top: "#header",
            about: "#about",
            service: "#service",
            team: "#team"
        };

        return (
            <Navbar fixedTop inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href={location.top}>Tripodi Studios</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <ul className="nav navbar-nav">
                        <li role="presentation" className="page-scroll">
                            <a href={location.about} onClick={() => this.handleClick(location.about)}>About</a>
                        </li>
                        <li role="presentation" className="page-scroll">
                            <a href={location.service} onClick={() => this.handleClick(location.service)}>Service</a>
                        </li>
                        <li role="presentation" className="page-scroll">
                            <a href={location.team} onClick={() => this.handleClick(location.team)}>Team</a>
                        </li>
                    </ul>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
