import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
    HomePage,
    SkillsPage,
    AboutPage,
    PortfolioPage,
    ContactPage,
} from "./pages";
import { NavBar } from "./components";

function Routes(props) {
    return (
        <Router basename="/">
            <NavBar />
            <Switch>
                <Route path="/skills" exact component={SkillsPage} />
                <Route path="/about" exact component={AboutPage} />
                <Route path="/portfolio" exact component={PortfolioPage} />
                <Route path="/contact" exact component={ContactPage} />
                <Route path="/" component={HomePage} />
            </Switch>
        </Router>
    );
}

export default Routes;
