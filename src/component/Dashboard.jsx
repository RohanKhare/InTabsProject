import React, { Component } from 'react'
import './index.css';
class Dashboard extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        console.log(this.props);
        return (
            <div className="row lpBGImage m-0">
                <div className="col-12 flexCenter">
                    <h1> Welcome {this.props.location.state.user}</h1>
                </div>
            </div>
        )
    }
}

export default Dashboard
