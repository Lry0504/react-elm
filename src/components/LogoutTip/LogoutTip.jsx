import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './LogoutTip.scss';

class LogoutTip extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    static PropTypes = {
        alertText: PropTypes.string.isRequired, //提示内容
        closeTip: PropTypes.func.isRequired,    //关闭提示
        logout: PropTypes.func  //退出
    }
    render() {
        return (
            <div className="alert-container">
                <section className="tip-text-container">
                    <div className="tip-icon">
                        <span></span>
                        <span></span>
                    </div>
                    <div className="tip-text">{this.props.alertText}</div>
                    {
                        this.props.logout('wait') ? 
                        (
                            <div className="logout">
                                <div onClick={this.handleClick}>再等等</div>
                                <div onClick={this.handleLogout}>狠心离开</div>
                            </div>
                        )
                        :
                        (
                            <div className="confirm" onClick={this.handleClick}>确认</div>
                        )
                    }
                </section>
            </div>
        );
    }
}

export default LogoutTip