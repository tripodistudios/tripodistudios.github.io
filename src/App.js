import React, { Component } from 'react';
import './App.css';
import Header from "./component/Header";


class App extends Component {
    render() {
        const styleTest = {height:"100%", width: "100%"};
        return (
            <div style={styleTest}>
            <Header />
            </div>
        );
    }
}

export default App;
