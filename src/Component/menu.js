import {Avatar, Nav, Button} from 'grommet';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Accueil from './accueil';
import Talent from './talent';
import Realisation from "./realisation";

const Menu = () => {
    return(
        <Router>
            <Nav direction="row" background="#318ce7" pad="medium">

                <Avatar src="avatar01.jpg"><Link to="/"/></Avatar>
                <Link to="/"><Button style={styleButton} className="bouton-menu" label="Accueil"/></Link>
                <Link to="/realisation"><Button style={styleButton} label="Réalisation"/></Link>
                <Link to="/talent"><Button style={styleButton} label="Talent"/></Link>
            </Nav>

            <Switch>
                <Route path="/realisation">
                    <Realisation />
                </Route>
                <Route exact path="/">
                    <Accueil />
                </Route>
                <Route path="/talent">
                    <Talent />
                </Route>
            </Switch>

        </Router>);

}

const styleButton = {
    border:'hidden'
};


export default Menu;