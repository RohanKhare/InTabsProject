import React, { Component } from 'react'
import './index.css';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import SignUp from './SignUp';
import Login from './Login';
import Button from 'react-bootstrap/Button'

class LandingPage extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div className="row lpBGImage">
                <div className="col-12 flexCenter">
                    <div className=" buttons lpWrapper ">
                        <Link to="/SignUp"><input type="button" className="btn btn-primary" value={"SIGN UP"}></input></Link>
                        <Link to="/Login"><input type="button" className="btn btn-primary" value={"LOGIN"}></input></Link>
                    </div>
                </div>
            </div>

        )
    }
}

export default LandingPage
