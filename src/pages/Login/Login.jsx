import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import LogoutTip from '../../components/LogoutTip/LogoutTip';
import API from '../../api/api';
import { setStore } from '../../utils/commons';
import { saveUserInfo } from '../../store/User/action';
import './Login.scss';

class Login extends Component {
    static propTypes = {
        userInfo: PropTypes.object.isRequired,
        saveUserInfo: PropTypes.func.isRequired
    }
    state = { 
        userAccount: '',    //用户名
        hasAlert: false,    //是否提示
        alertText: '',      //弹出的文本
        password: '',       //密码
        codeNumber: '',     //验证码
        captchaCodeImg: '', //验证码图片
        showPwd: true,      //是否显示密码
    }
    handleInput = (type, event) => {
        let value = event.target.value;
        switch (type) {
            case 'userAccount':
                this.setState({
                    userAccount: value
                })
                break
            case 'password':
                this.setState({
                    password: value
                })
                break
            default:
                this.setState({
                    codeNumber: value
                })
                break
        }
    }
    closeTip = () => {
        this.setState({
            hasAlert: false
        })
    }
    Login = async () => {
        let isValidate, alertText;
        if (!this.state.userAccount) {
            alertText = "请输入手机号/邮箱/用户名"
            isValidate = true
        } else if (!this.state.password) {
            alertText = "请输入密码"
            isValidate = true
        } else if (!this.state.codeNumber) {
            alertText = "请输入验证码"
            isValidate = true
        }
        if (isValidate) {
            this.setState({
                hasAlert: true,
                alertText
            })
            return
        }
        let data = {
            username: this.state.userAccount,
            password: this.state.password,
            captcha_code: this.state.codeNumber
        }
        let res = await API.accountLogin(data);
        if (res.tip) {
            this.setState({
                hasAlert: true,
                alertText: res.response.message
            })
            this.getCaptchaCode();
        } else {
            setStore('user_id', res.user_id);
            this.props.saveUserInfo(res);
        }
        this.props.history.push('/user');
    }
    changePasswordType = () => {
        this.setState({
            showPwd: !this.state.showPwd
        })
    }
    getCaptchaCode = async () => {
        let res = await API.getCaptchaCode();
        this.setState({
            captchaCodeImg: res.code
        })
    }
    goBack = () => {
        this.props.history.goBack()
    }
    componentWillMount() {
        this.getCaptchaCode()
    }

    render() {
        return (
            <div className="login-container">
                <Header title="密码登录" goBack={this.goBack} />
                <form className="login-form">
                    <section className="input-container">
                        <input 
                            type="text" placeholder="账号" 
                            value={this.state.userAccount}
                            onChange={this.handleInput.bind(this, 'userAccount')}
                        />
                    </section>
                    <section className="input-container">
                        {
                            this.state.showPwd ?
                            <input 
                                type="text" placeholder="密码" 
                                value={this.state.password}
                                onChange={this.handleInput.bind(this, 'password')}
                            /> :
                            <input 
                                type="password" placeholder="密码"
                                value={this.state.password}
                                onChange={this.handleInput.bind(this, 'password')}
                            />
                        }
                        <div className={`button-switch ${this.state.showPwd ? 'change-to-text' : ''}`}>
                            <div 
                                className={`circle-button ${this.state.showPwd ? 'trans-to-right' : ''}`}
                                onClick={this.changePasswordType}
                            ></div>
                            <span>ON</span>
                            <span>OFF</span>
                        </div>
                    </section>
                    <section className="input-container captcha-code-container">
                        <input 
                            type="text" placeholder="验证码" maxLength="4"
                            value={this.state.codeNumber}
                            onChange={this.handleInput.bind(this, 'codeNumber')}
                        />
                        <div className="img-change-img">
                            <img src={this.state.captchaCodeImg} alt="" />
                            <div className="change-img" onClick={this.getCaptchaCode}>
                                <p>看不清</p>
                                <p>换一张</p>
                            </div>
                        </div>
                    </section>
                </form>
                <p className="login-tips">温馨提示：未注册过的账号，登录时自动注册</p>
                <p className="login-tips">注册过的账号，可凭账号密码登录</p>
                <div className="login-button" onClick={this.Login}>登录</div>
                <Link className="to-forget" to="/forget">重置密码?</Link>
                {
                    this.state.hasAlert &&
                    <LogoutTip
                        logout={ () => { return false }}
                        closeTip={this.closeTip}
                        alertText={this.state.alertText}
                    />
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userInfo : state.userInfo
    }
}
const mapDispatchToProps = {
    saveUserInfo
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)