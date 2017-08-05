import React, { Component } from "react";
import { render } from "react-dom";

export default class Service extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const serviceTest = "Services";

        return (
            <section id="service">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h1 className="section-heading">Services</h1>
                            <hr />
                        </div>
                    </div>
                    <div className="row text-center">
                        {serviceTest}
                    </div>
                </div>
            </section>
        );
    }
}

