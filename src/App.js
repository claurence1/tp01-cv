import React, { Component } from 'react';
import './App.css';
import Menu from './Component/menu';
import PiedDePage from "./Component/footer";

class App extends Component {

    render() {
        return (
            <div className="App">
                <Menu/>
                <PiedDePage/>
            </div>
        );
    }
}

export default App;
