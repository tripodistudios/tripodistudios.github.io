import React, { Component } from 'react';
import './App.css';
import NavbarCustom from "./component/NavbarCustom";
import Header from "./component/Header";
import About from "./component/About";
import Service from "./component/Service";
import Team from "./component/Team";
import Footer from "./component/Footer";


class App extends Component {
    render() {
        const styleTest = {height:"100%", width: "100%"};
        return (
            <div style={styleTest}>
            <NavbarCustom />
            <Header />
            <About />
            <Service />
            <Team />
            <Footer />
            </div>
        );
    }
}

export default App;
