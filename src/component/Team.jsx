import React, { Component } from "react";
import { render } from "react-dom";

export default class Team extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const team = "Team test";

        return (
            <section id="team">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h1 className="section-heading">Team</h1>
                            <hr />
                        </div>
                    </div>
                    <div className="row text-center">
                        {team}
                    </div>
                </div>
            </section>
        );
    }
}
