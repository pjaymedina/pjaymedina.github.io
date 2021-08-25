import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { NavBar } from "./components";
import {
    HomePage,
    SkillsPage,
    AboutPage,
    PortfolioPage,
    ContactPage,
} from "./pages";

function App(props) {
    const [path, setPath] = useState("/");

    useEffect(() => {
        setPath(window.location.pathname);
    }, [path]);

    return (
        <div
            className={
                path === "/"
                    ? "background1 App"
                    : path === "/about"
                    ? "background1 App"
                    : "App"
            }
        >
            <NavBar path={path} />
            <Router>
                <Switch>
                    <Route path="/skills" exact component={SkillsPage} />
                    <Route path="/about" exact component={AboutPage} />
                    <Route path="/portfolio" exact component={PortfolioPage} />
                    <Route path="/contact" exact component={ContactPage} />
                    <Route path="/" component={HomePage} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
