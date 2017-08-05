import React, { Component } from "react";
import { render } from "react-dom";

export default class About extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const about = "This is the about us";

        return (
            <section id="about">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h1 className="section-heading">About</h1>
                            <hr />
                        </div>
                    </div>
                    <div className="row text-center">
                        {about}
                    </div>
                </div>
            </section>
        );
    }
}

