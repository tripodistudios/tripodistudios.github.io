import React, { Component } from "react";
import { render } from "react-dom";

export default class Social extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul className="list-unstyled list-inline">
                <li><a target="_blank" rel="noopener noreferrer" href="mailto:hello@tripodistudios.com" className="lead"><i className="fa fa-envelope-o"></i> Email</a></li>
                <span className="lead"> | </span>
            </ul>

        )
    }
}

