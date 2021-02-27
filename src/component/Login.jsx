import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setUserData } from '../action';
import './index.css';
class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isUserLoggedIn: false,
            currentUserName: null,
        }
        this.userFirstName = null;
        this.userLastName = null;
        this.userAddress = null;
        this.userMobileNo1 = null;
        this.userMobileNo2 = null;
        this.userEmail = null;
        this.userPassword = null;
        this.userConfirmPassword = null;
        this.formData = {};
    }

    setFormInputText = (event) => {
        let id = event.target.id;
        let value = event.target.value;
        switch (id) {
            case 'email': this.userEmail = value;
                break;
            case 'password': this.userPassword = value;
                break;
            default:
                break;
        }
    }
    validateFormData = () => {
        this.formData = {
            userEmail: this.userEmail,
            userPassword: this.userPassword,
        }
        if (this.userEmail === null || this.userPassword === null) {
            alert("Email and password is required");
            return false;
        }
        return true;
    }
    loginUser = () => {
        let validUser = this.validateFormData();
        let flag = false;
        let userName = null;
        if (validUser) {
            let userData = this.props.userData;
            console.log({ userData });
            userData.map((user, i) => {
                if (user.userEmail === this.formData.userEmail && user.userPassword === this.formData.userPassword) {
                    userName = user.userFirstName
                    flag = true
                }
            })
        }
        if (flag) {
            this.setState({ isUserLoggedIn: true, currentUserName: userName })
        }
        else {
            alert('Authentication failed')

        }
    }
    renderLoginForm = () => {
        return (
            <div className="flexCenter  flexDirectionCol">
                {/* HEADER */}
                <input type="button" value="L O G I N" className="SignUpHeader inputSizeL" disabled={true}></input>

                {/* EMAIL PASSWORD AND CONFIRM PASS */}
                <input id={"email"} className="formInputText inputSizeL" type="text"
                    placeholder="Email " onChange={(event) => this.setFormInputText(event)}></input>
                <input id={"password"} className="formInputText inputSizeL" type="password"
                    placeholder="Password " onChange={(event) => this.setFormInputText(event)}></input>

                <input type="button" value="Create Account" className="SignUpHeader inputSizeM"
                    onClick={() => this.loginUser()}></input>

            </div>
        );
    }

    render() {
        if (this.state.isUserLoggedIn) {
            return (
                <Redirect to={{
                    pathname: '/Dashboard',
                    state: { user: this.state.currentUserName }
                }}></Redirect>
            );
        } else {
            return (
                <div className="row lpBGImage m-0">
                    <div className="col-12 flexCenter">
                        {this.renderLoginForm()}
                    </div>
                </div>
            )
        }
    }
}
const mapDispatchToProps = () => {
    return {
        setUserData
    }
}
const mapStateToProps = (state) => {
    return {
        userData: state.userData
    }
}
export default connect(mapStateToProps, mapDispatchToProps())(Login)
