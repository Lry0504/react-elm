import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import asyncComponent from '../utils/asyncComponent';

const Home = asyncComponent( () => import('../pages/Home/Home') )
const Food = asyncComponent( () => import('../pages/Food/Food') )
const ShopDetails = asyncComponent( () => import('../pages/ShopDetails/ShopDetails') )
const User = asyncComponent( () => import('../pages/User/User') )
const Login = asyncComponent( () => import('../pages/Login/Login') )

export default class RouteConfig extends Component {
    render () {
        return (
            <Router>
                <Switch>
                    <Route path="/home" exact component={Home} /> {/*首页路由*/}
                    <Route path="/food/:geohash/:id/:title" component={Food} /> {/*首页nav导航食物页面*/}
                    <Route path="/shop/:id" component={ShopDetails} />
                    <Route path="/user" component={User} />  {/*个人中心路由*/}
                    <Route path="/login" component={Login} /> {/*登录路由*/}
                    <Redirect exact from="/" to="/home" />  {/*重定向到 -->> 首页路由*/}
                </Switch>
            </Router>
        )
    }
}