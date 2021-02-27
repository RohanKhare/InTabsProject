import React, { Component } from 'react'
import LandingPage from './LandingPage';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import NavBar from './NavBar';
import SignUp from './SignUp';
import Login from './Login';
import Dashboard from './Dashboard';
export class index extends Component {
    render() {
        return (
            <Router>
                <NavBar></NavBar>
                <Route exact path="/" component={LandingPage}></Route>
                <Switch>
                    <Route exact path="/SignUp" component={SignUp}></Route>
                    <Route exact path="/Login" component={Login}></Route>
                    <Route exact path="/Dashboard" component={Dashboard}></Route>
                </Switch>
            </Router>
        )
    }
}

export default index
