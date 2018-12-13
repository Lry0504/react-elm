import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import asyncComponent from '../utils/asyncComponent';

//const Footer = asyncComponent( () => import('../components/Footer/Footer') )

export default class RouteConfig extends Component {
    render () {
        return (
            <Router>
                <Switch>
                    <Route path="/home" exact component={Home} /> {/*首页路由*/}
                    <Route path="/login" component={Login} /> {/*登录路由*/}
                    <Route path="/userinfo" component={UserInfo} /> {/*个人信息路由*/}
                    <Route path="/user" component={User} /> {/*个人中心路由*/}
                    <Route path="/setuserinfo" component={SetUserInfo} /> {/*设置用户信息路由*/}
                    <Route path="/shopdetails/:id" component={ShopDetails} /> {/*商店详情路由*/}
                    <Route path="/food/:geohash/:id/:title" component={Food} /> {/*食物页面路由*/}
                    <Redirect exact from="/" to="/home" />  {/*重定向到 -->> 首页路由*/}
                </Switch>
            </Router>
        )
    }
}