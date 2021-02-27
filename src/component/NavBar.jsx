import React, { Component } from 'react'
import './index.css';
import {Link} from 'react-router-dom'
class NavBar extends Component {
    renderList = () => {
        let items = ["SignUp", "Login", "Contact", "About Us"];
        let li = [];
        items.forEach((item) => {
            li.push(<Link style={{color:'white', textDecoration:'none'}} to={"/"+item}><li className="navBarListItems">{item}</li></Link>)
        })
        return (
            <ul className="navBarUl m-0">
                {li}
            </ul>
        );
    }
    render() {
        return (
            <div className="container-fluid pl-0 pr-0">
                <div className="navBarWrapper">
                    <span className="navBarHead">Assignment</span>
                    {this.renderList()}
                    {/* <li className="navBarListItems">First</li> */}
                </div>
            </div>
        )
    }
}

export default NavBar
