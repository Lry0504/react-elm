import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { is, fromJS } from 'immutable';
import QueueAnim from 'rc-queue-anim';
import { imgUrl } from '../../utils/config/envconfig';
import { resetUserInfo } from '../../store/User/action';
import { getStore, removeStore } from '../../utils/commons';
import API from '../../api/api';
import Header from '../../components/Header/Header';
import LogoutTip from '../../components/LogoutTip/LogoutTip';
import './UserInfo.scss';

class UserInfo extends Component {
    static propTypes = {
        resetUserInfo: PropTypes.func.isRequired,
        userInfo:   PropTypes.object.isRequired
    }
    state = {
        user_id: getStore('user_id'),
        hasAlert: false,
        alertText: '请在手机APP中打开',
        logout: false
    }
    //上传图片，并将图片地址保存到redux，保留状态
    uploadImg = async event => {
        try {
            let formdata = new FormData(); //获取表单
            formdata.append('file', event.target.files[0]); //上传的文件
            let result = await API.uploadImg(formdata);
            this.props.resetUserInfo('imgpath', imgUrl + result.image_path);
        } catch (err) {
            throw err
        }
    }
    handleClick = (type) => {
        let alertText;
        let logout = false;
        switch (type) {
            case 'tele':
                alertText = '请在手机APP中打开'
                break
            case 'unfinished':
                alertText = '功能尚未开发'
                break
            case 'logout':
                alertText = '是否退出登录'
                logout = true
                break
            default:
        }
        this.setState({
            hasAlert: !this.state.hasAlert,
            alertText,
            logout
        })
    }
    goBack = () => {
        this.props.history.push("/user");
    }
    Logout = (wait) => {
        if(!wait) {
            this.setState({
                user_id: removeStore('user_id')
            })
            this.props.history.push("/login");
        }
        return this.state.logout
    }
    shouldComponentUpdate(nextProps, nextState) {
         return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState))
    }

    render() {
        return (
            <div className="rating-page">
                <QueueAnim type="bottom">
                    <Header title="账户消息" goBack={this.goBack} key="o1" />
                    <section className="profile-info" key="o2">
                        <QueueAnim>
                            <section className="headportrait" key="k1">
                                <input type="file" className="profile-info-upload" onChange={this.uploadImg} />
                                <h2>头像</h2>
                                <div className="info-item">
                                    <img className="headport-top" src={this.props.userInfo.imgpath} alt=""/>
                                    <div className="icon-arrow-right"></div>
                                </div>
                            </section>
                            <Link className="info-router" key="k2" to="/setuser/name">
                                <section className="headportrait headportraitwo">
                                    <h2>用户名</h2>
                                    <div className="info-item">
                                        <div>{this.props.userInfo.username}</div>
                                        <div className="icon-arrow-right"></div>
                                    </div>
                                </section>
                            </Link>
                            <Link className="info-router" key="k3" to="/setuser/address">
                                <section className="headportrait headportraithree">
                                    <h2>收货地址</h2>
                                    <div className="info-item">
                                        <div>{this.state.username}</div>
                                        <div className="icon-arrow-right"></div>
                                    </div>
                                </section>
                            </Link>
                            <section className="bind-phone" key="k4">账号绑定</section>
                            <div className="info-router" key="k5" onClick={this.handleClick.bind(this, "tele")}>
                                <section className="headportrait headportraitfour">
                                    <div className="headport-phone">
                                        <div className="icon-shouji"></div>
                                        <h2>手机</h2>
                                    </div>
                                    <div className="info-item">
                                        <div className="icon-arrow-right"></div>
                                    </div>
                                </section>
                            </div>
                            <section className="bind-phone" key="k6">安全设置</section>
                            <div className="info-router" key="k7" onClick={this.handleClick.bind(this, "unfinished")}>
                                <section className="headportrait headportraithree">
                                    <h2>登录密码</h2>
                                    <div className="info-item">
                                        <div className="headport-modify">修改</div>
                                        <div className="icon-arrow-right"></div>
                                    </div>
                                </section>
                            </div>
                            <section className="exit-login" key="k8" onClick={this.handleClick.bind(this, "logout")}>退出登录</section>
                        </QueueAnim>
                    </section>
                    {
                        this.state.hasAlert &&
                        <LogoutTip logout={this.Logout} closeTip={this.handleClick} alertText={this.state.alertText} />
                    }
                </QueueAnim>
            </div>
        )
    }
}

export default connect( state => ({
    userInfo: state.userInfo
}), {
    resetUserInfo
})(UserInfo)