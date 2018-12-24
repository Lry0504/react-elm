import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import QueueAnim from 'rc-queue-anim';
import { is, fromJS } from 'immutable';
import API from '../../api/api';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import LogoutTip from '../../components/LogoutTip/LogoutTip';
import { saveUserInfo } from '../../store/User/action';
import { getStore } from '../../utils/commons';
import { getImagePath } from '../../utils/commons';
import './User.scss';

class User extends Component {
    static propTypes = {
        userInfo: PropTypes.object.isRequired,
        saveUserInfo: PropTypes.func.isRequired
    }
    state = {
        username: '登录 / 注册',
        mobile: '暂无绑定手机',
        avatar: '',    //图片路径
        balance: 0, //我的余额
        count: 0,   //优惠劵个数
        pointNumber: 0, //积分数
        hasAlert: '',   //是否显示提示信息
        alertText: '请在手机APP中打开'
    }

    initData = () => {
        let newState = {};
        //如果存在用户信息
        if (this.props.userInfo && this.props.userInfo.user_id) {
            newState.mobile = this.props.userInfo.mobile || '暂无绑定手机号';
            newState.username = this.props.userInfo.username;
            newState.balance = this.props.userInfo.balance;
            newState.count = this.props.userInfo.gift_amount;
            newState.pointNumber = this.props.userInfo.point;
            newState.avatar = getImagePath(this.props.userInfo.avatar);
        } else {
            newState.mobile = '暂无绑定手机号';
            newState.username = '登录 / 注册';
            newState.avatar = getImagePath(this.props.userInfo.avatar);
        }
        this.setState(newState)
    }
    handleClick = (type) => {
        let alertText;
        switch (type) {
            case 'download':
                alertText = '请到官网下载'
                break
            case 'unfinished':
                alertText = '功能尚未开发'
                break
            default:
        }
        this.setState({
            hasAlert: !this.state.hasAlert,
            alertText
        })
    }
    //异步获取用户信息
    getUserInfo = async () => {
        let res = await API.getUser({
            user_id: getStore('user_id')
        })
        //如果返回的res不是err，就让它保存用户信息
        if (!res.response) {
             this.props.saveUserInfo(res);
        }
        this.initData();
    }
    goBack = () => {
        this.props.history.goBack()
    }
    componentWillMount() {
        //组件挂载之前，先判断用户是否已经存在，如果存在，则从store中获取用户信息
        if (this.props.userInfo.user_id) {
            this.initData()
            return
        }
        this.getUserInfo()
    }
    componentWillReceiveProps(nextProps) {
        //属性props改变时
        if (!is(fromJS(this.props.proData), fromJS(nextProps.proData))) {
            this.initData(nextProps)
        }
    }
    shouldComponentUpdate(nextProps, nextState) {
         return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState))
    }

    render() {
        return (
            <div className="profile-container">
                <QueueAnim type="bottom" >
                    <Header title="个人中心" goBack={this.goBack} key="s1" />
                    <section key="s2">
                        <section className="profile-number">
                            <Link 
                                className="profile-link" 
                                to={this.props.userInfo && this.props.userInfo.user_id ? "/info" : "/login"} 
                            >
                                <img src={this.state.avatar} alt="" className="private-image" />
                                <div className="user-info">
                                    <div>{this.state.username}</div>
                                    <div>
                                        <div className="icon-tel"></div>
                                        <span className="icon-mobile-phone">{this.state.mobile}</span>
                                    </div>
                                </div>
                                <div className="icon-arrow-right"></div>
                            </Link>
                        </section>
                        <section className="info-data" key="i1">
                            <ul className="clear">
                                <Link className="info-data-link" to="/balance">
                                    <span className="info-data-top">
                                        <b>{parseInt(this.state.balance).toFixed(2)}</b>元
                                    </span>
                                    <span className="info-data-bottom">我的余额</span>
                                </Link>
                                <Link className="info-data-link" to="/benefit">
                                    <span className="info-data-top">
                                        <b>{this.state.count}</b>个
                                    </span>
                                    <span className="info-data-bottom">我的优惠</span>
                                </Link>
                                <Link className="info-data-link" to="/points">
                                    <span className="info-data-top">
                                        <b>{this.state.pointNumber}</b>分
                                    </span>
                                    <span className="info-data-bottom">我的积分</span>
                                </Link>
                            </ul>
                        </section>
                        <section className="profile-list">
                            <QueueAnim deley="0.4">
                                <div className="myorder" key="i2" onClick={this.handleClick.bind(this, 'unfinished')}>
                                    <div className="icon-dingdan order-icon"></div>
                                    <div className="myorder-text">
                                        <span>我的订单</span>
                                        <div className="icon-arrow-right"></div>
                                    </div>
                                </div>
                                <div className="myorder" key="i3" onClick={this.handleClick.bind(this, 'unfinished')}>
                                    <div className="icon-jifen1 order-icon"></div>
                                    <div className="myorder-text">
                                        <span>积分商城</span>
                                        <div className="icon-arrow-right"></div>
                                    </div>
                                </div>
                                <div className="myorder" key="i4" onClick={this.handleClick.bind(this, 'unfinished')}>
                                    <div className="icon-huangguan order-icon"></div>
                                    <div className="myorder-text">
                                        <span>饿了么会员卡</span>
                                        <div className="icon-arrow-right"></div>
                                    </div>
                                </div>
                                <div className="myorder" key="i5" onClick={this.handleClick.bind(this, 'unfinished')}>
                                    <div className="icon-yk_fangkuai_fill order-icon"></div>
                                    <div className="myorder-text">
                                        <span>服务中心</span>
                                        <div className="icon-arrow-right"></div>
                                    </div>
                                </div>
                                <div className="myorder" key="i6" onClick={this.handleClick.bind(this, 'unfinished')}>
                                    <div className="icon-changyonglogo40 order-icon"></div>
                                    <div className="myorder-text">
                                        <span>下载饿了么APP</span>
                                        <div className="icon-arrow-right"></div>
                                    </div>
                                </div>
                            </QueueAnim>
                        </section>
                    </section>
                    <Footer key="s3" />
                </QueueAnim>
                {
                    this.state.hasAlert && 
                    <LogoutTip logout={()=>{ return false}} closeTip={this.handleClick} alertText={this.state.alertText} />
                }
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        userInfo: state.userInfo
    }
}
const mapDispatchToProps = {
    saveUserInfo
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(User)