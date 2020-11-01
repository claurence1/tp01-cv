import React, { Component } from 'react';
import './App.css';
import { Grommet, Box } from 'grommet';
import Menu from './Component/menu';
import PiedDePage from "./Component/footer";

class App extends Component {

    render() {
        return (
            <Grommet full>
                <Box fill>
                <Menu/>
                <PiedDePage/>
                </Box>
            </Grommet>
        );
    }
}

export default App;
