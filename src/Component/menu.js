import { Avatar, Nav, Button } from 'grommet';
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Cv from './cv';
import Accueil from './accueil';
import Talent from './talent';
import Realisation from "./realisation";

const Menu = () => {
    return(
        <Router>
            <Nav direction="row" background="brand" pad="medium">

                <Avatar src="avatar01.jpg"><Link to="/app"/></Avatar>
                <Button><Link to="/">Accueil</Link></Button>
                <Button><Link to="/realisation">Réalisation</Link></Button>
                <Button><Link to="/talent">Talent</Link></Button>
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
export default Menu;