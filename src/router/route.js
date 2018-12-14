import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import asyncComponent from '../utils/asyncComponent';

const Home = asyncComponent( () => import('../pages/Home/Home') )
//const Header = asyncComponent( () => import('../components/Header/Header') )

export default class RouteConfig extends Component {
    render () {
        return (
            <Router>
                <Switch>
                    <Route path="/home" exact component={Home} /> {/*首页路由*/}
                   
                    <Redirect exact from="/" to="/home" />  {/*重定向到 -->> 首页路由*/}
                </Switch>
            </Router>
        )
    }
}