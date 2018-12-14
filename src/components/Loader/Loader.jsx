import React, { Component } from 'react';
import './Loader.scss';

class Loader extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    handleClick = () => {
        this.props.closeTip()
    }
    handleLogout = () => {
        this.props.logout()
    }
    
    render() {
        return (
            <div className="loader-container">
                <div className="loader-inner"></div>
            </div>
        )
    }
}

export default Loader