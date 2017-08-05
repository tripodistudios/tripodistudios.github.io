import React, { Component } from "react";
import { render } from "react-dom";
import Social from "../extra/Social";

export default class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer id="footer">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 text-center light-colour">
                            <h4><strong>Tripodi Studios</strong></h4>
                            <Social />
                            <p>Copyright &copy; Tripodi Studios 2017</p>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}
