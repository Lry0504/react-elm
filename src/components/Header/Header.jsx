import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// 保证数据的不可变，由于props或者state的数据变化都将导致页面的render，而ReactJs是组件化的，小组件组装成大组件，大组件组装成页面，每个组件都有自己的内部数据，任何的数据变化都将引起页面重绘
import { is, fromJS } from 'immutable';
import './Header.scss';

class Header extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        signUp: PropTypes.bool,
        goBack: PropTypes.func,
        goHome: PropTypes.func,
        edit: PropTypes.func,
        userInfo: PropTypes.object.isRequired
    }
    state = {
        userInfo: false,
        headTitle: '首页'
    }
    handleBack = () => {
        this.props.goBack()
    }
    handleEdit = () => {
        this.props.edit()
    }
    //判断是否要更新render
    shouldComponentUpdate(nextProps, nextState) {
        return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState))
    }

    render () {
        return (
            <header className="header-container">
                {
                    this.props.goBack && <div className="icon-back header-back" onClick={this.handleBack}></div>
                }
                <div className="header-title">{this.props.title}</div>
                {
                    this.props.signUp ? 
                        (this.props.userInfo ? 
                            <span className="icon-account user-avatar" onClick={this.props.goHome}></span>
                            : <span>登录|注册</span>
                        )
                        : ""
                }
                {
                    this.props.edit && 
                    <div className="user-avatar" onClick={this.handleEdit}>
                        {
                            this.props.userInfo.operate === "edit" ? "编辑" : "完成"
                        }
                    </div>
                } 
            </header>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        userInfo: state.userInfo
    }
}
const mapDispatchToProps = {}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header)