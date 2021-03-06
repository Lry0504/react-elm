import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.scss';
import '../../assets/iconfont/iconfont.js';

class Footer extends Component {
    render() {
        return (
            <section className="footer-container">
                <NavLink className="guide-item" to="/home">
                    <div className="icon-changyonglogo40 icon-style"></div>
                    <span className="spec-text">外卖</span>
                </NavLink>
                <NavLink className="guide-item" to="/search">
                    <div className="icon-zhinanzhen icon-style"></div>
                    <span>搜索</span>
                </NavLink>
                <NavLink className="guide-item" to="/order">
                    <div className="icon-dingdan icon-style"></div>
                    <span>订单</span>
                </NavLink>
                <NavLink className="guide-item" to="/user">
                    <div className="icon-account icon-style"></div>
                    <span>我的</span>
                </NavLink>
            </section>
        )
    } 
}

export default Footer