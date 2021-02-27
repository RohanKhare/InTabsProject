import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setUserData } from '../action';
import './index.css';
import Login from './Login';
class SignUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isUserSignedUp: false,
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
            case 'firstname': this.userFirstName = value;
                break;
            case 'lastname': this.userLastName = value;
                break;
            case 'address': this.userAddress = value;
                break;
            case 'mobileno1': this.userMobileNo1 = value;
                break;
            case 'mobileno2': this.userMobileNo2 = value;
                break;
            case 'email': this.userEmail = value;
                break;
            case 'password': this.userPassword = value;
                break;
            case 'confirmpassword': this.userConfirmPassword = value;
                break;
            default:
                break;
        }
    }
    getLatestID = () => {
        let userData = this.props.userData;
        let userIndex = null;
        if (userData !== undefined && userData !== null) {
            let length = userData.length;
            userIndex = 1000001 + length
        } else {
            userIndex = 1000001
        }
        return userIndex;
    }
    clearAllData = () => {
        document.getElementById('firstname').value = null;
        document.getElementById('lastname').value = null;
        document.getElementById('address').value = null;
        document.getElementById('mobileno1').value = null;
        document.getElementById('mobileno2').value = null;
        document.getElementById('email').value = null;
        document.getElementById('password').value = null;
        document.getElementById('confirmpassword').value = null;
    }
    updateUserData = () => {
        let validateUser = this.validateFormData();
        let userData = this.props.userData;

        if (validateUser) {
            this.formData["userID"] = this.getLatestID();
            userData.push(this.formData);
            this.props.setUserData(userData)
            alert('User Created')
            this.clearAllData()
            console.log('userData', this.props.userData);

            //RedirectTOLogin();
            this.setState({
                isUserSignedUp: true
            })
        }
    }
    validateFormData = () => {
        this.formData = {
            userFirstName: this.userFirstName,
            userLastName: this.userLastName,
            userAddress: this.userAddress,
            userMobileNo1: this.userMobileNo1,
            userMobileNo2: this.userMobileNo2,
            userEmail: this.userEmail,
            userPassword: this.userPassword,
            userConfirmPassword: this.userConfirmPassword,
        }
        if (this.userFirstName === null || this.userLastName === null ||
            this.userEmail === null || this.userPassword === null || this.userConfirmPassword === null ||
            this.userMobileNo1 === null || this.userMobileNo2 === null) {
            if (this.userFirstName === null || this.userLastName === null) {
                alert("Name is required");
                return false;
            }
            else if (this.userEmail === null && this.userPassword === null && this.userConfirmPassword === null) {
                alert("Email and password is required");
                return false;
            }
            else if (this.userMobileNo1 === null && this.userMobileNo2 === null) {
                alert("Atleast 1 mobile no is required");
                return false;
            }
        }
        if (this.userPassword !== null && this.userConfirmPassword !== null) {
            if (this.userPassword.localeCompare(this.userConfirmPassword) !== 0) {
                alert("Password do not match");
                return false;
            }
        }

        return true;
    }
    renderSignUPForm = () => {
        return (
            <div className="flexCenter  flexDirectionCol">
                {/* HEADER */}
                <input type="button" value="S I G N  U P" className="SignUpHeader inputSizeL" disabled={true}></input>


                {/* FIRST AND LAST NAME */}
                <div className="flexDirectionRow">
                    <input id={"firstname"} className="formInputText inputSizeM" type="text"
                        placeholder="First Name" onChange={(event) => this.setFormInputText(event)}></input>
                    <input id={"lastname"} className="formInputText inputSizeM" type="text"
                        placeholder="Last Name" onChange={(event) => this.setFormInputText(event)}></input>
                </div>
                {/* A D D R E S S  */}
                <input id={"address"} className="formInputText inputSizeL" type="text"
                    placeholder="Address " onChange={(event) => this.setFormInputText(event)}></input>


                {/* MobileNo AND Email */}
                <div className="flexDirectionRow">
                    <input id={"mobileno1"} className="formInputText inputSizeM" type="text"
                        placeholder="Mobile No. 1" onChange={(event) => this.setFormInputText(event)} maxLength="10"></input>
                    <input id={"mobileno2"} className="formInputText inputSizeM" type="text"
                        placeholder="Mobile No. 2" onChange={(event) => this.setFormInputText(event)} maxLength="10"></input>
                </div>

                {/* EMAIL PASSWORD AND CONFIRM PASS */}
                <input id={"email"} className="formInputText inputSizeL" type="text"
                    placeholder="Email " onChange={(event) => this.setFormInputText(event)}></input>
                <input id={"password"} className="formInputText inputSizeL" type="password"
                    placeholder="Password " onChange={(event) => this.setFormInputText(event)}></input>
                <input id={"confirmpassword"} className="formInputText inputSizeL" type="password"
                    placeholder="Confirm Password " onChange={(event) => this.setFormInputText(event)}></input>

                <input type="button" value="Create Account" className="SignUpHeader inputSizeM"
                    onClick={() => this.updateUserData()}></input>

            </div>
        );
    }

    render() {
        if (this.state.isUserSignedUp) {
            return (
                <Redirect to="/Login"></Redirect>
            );
        } else {
            return (
                <div className="row lpBGImage m-0">
                    <div className="col-12 flexCenter">
                        {this.renderSignUPForm()}
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
export default connect(mapStateToProps, mapDispatchToProps())(SignUp)