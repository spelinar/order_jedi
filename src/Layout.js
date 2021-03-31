import React from "react";
import Films from "./Films";
import Film from "./Film";
import Characters from "./Characters";
import Character from "./Character";
import Home from "./Home";
import { Link, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Switch, Route, Link as RouterLink } from "react-router-dom";
import * as url from "url";
import './style.css'

export default function Layout(props) {
    const classes = useStyles();

    return (
        <div className="App">
            <nav className={classes.menu}>
                <Link component={RouterLink} to="/">
                    <Button color="primary">Home</Button>
                </Link>
                <Link component={RouterLink} to="/characters">
                    <Button color="primary">Characters</Button>
                </Link>
                <Link component={RouterLink} to="/films">
                    <Button color="primary">Films</Button>
                </Link>
            </nav>
            <main className={classes.main}>
                <Switch>
                    <Route exact path="/films">
                        <Films />
                    </Route>
                    <Route exact path="/films/:filmId">
                        <Film />
                    </Route>
                    <Route exact path="/characters">
                        <Characters />
                    </Route>
                    <Route exact path="/characters/:characterId">
                        <Character />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </main>
        </div>
    );
}

const useStyles = makeStyles(theme => ({
    main: {
        margin: "0 auto",
        padding: "0px"
    },
    menu: {
        margin: "0px, auto",
        display: "flex",
        justifyContent: "center",
       // backgroundImage: url("http://www.script-tutorials.com/demos/360/images/stars.png"),
        backgroundColor: "#272b30",
        "& button": {
            margin: theme.spacing(1)
        }

    }
}));
