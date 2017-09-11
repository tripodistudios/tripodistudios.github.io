import React, { Component } from "react";
import { render } from "react-dom";
import { FormGroup, ControlLabel, FormControl, HelpBlock } from "react-bootstrap";

export default class ContactUs extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          value: '',
        };
    }


    getValidationState() {
        const length = this.state.value.length;
        if (length > 10) return 'success';
        else if (length > 5) return 'warning';
        else if (length > 0) return 'error';
    }

    handleChange(e) {
        //console.log(this.statee.target.value);
        //({ value: e.target.value });
    }


    render() {
        return (
            <form>
                <FormGroup
                    controlId="formBasicText"
                    validationState={this.getValidationState()}
                >
                    <ControlLabel>Working example with validation</ControlLabel>
                    <FormControl
                        type="text"
                        value={this.state.value}
                        placeholder="Enter text"
                        onChange={this.handleChange}
                    />
                    <FormControl.Feedback />
                    <HelpBlock>Validation is based on string length.</HelpBlock>
                </FormGroup>
            </form>
        );
    }
}

