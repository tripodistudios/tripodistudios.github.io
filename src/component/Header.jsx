import React, { Component } from "react";
import { render } from "react-dom";
import logo from "../image/ts.svg";

                    // <div className="col-xs-2">
                    //     <img src={logo} className="App-logo img-responsive" alt="logo" />
                    // </div>
                    // <div className="col-xs-10 vcenter">
                    //     <div className="vcenter">
                    //         <h2>
                    //             Tripodi 
                    //             <br>
                    //             </br> 
                    //             Studios
                    //         </h2>
                    //     </div>
                    // </div>

export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <header id="header" className="header container-fluid">
            <div className="row">
                <div className="container-fluid">
                        <img src={logo} className="App-logo img-responsive vcenter" alt="logo" />
                        <div className="col-xs-12">
                            <h2 className="tripodi-title-main text-center">Tripodi</h2>
                            <h2 className="tripodi-title-bottom text-center">Studios</h2>
                        </div>
                </div>
            </div>
        </header>
        )
    }
}
