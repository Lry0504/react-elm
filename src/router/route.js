import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import asyncComponent from '../utils/asyncComponent';

const Home = asyncComponent( () => import('../pages/Home/Home') )
const Food = asyncComponent( () => import('../pages/Food/Food') )
const ShopDetails = asyncComponent( () => import('../pages/ShopDetails/ShopDetails') )

export default class RouteConfig extends Component {
    render () {
        return (
            <Router>
                <Switch>
                    <Route path="/home" exact component={Home} /> {/*首页路由*/}
                    <Route path="/food/:geohash/:id/:title" component={Food} /> {/*首页nav导航食物页面*/}
                    <Route path="/shop/:id" component={ShopDetails} />
                    <Redirect exact from="/" to="/home" />  {/*重定向到 -->> 首页路由*/}
                </Switch>
            </Router>
        )
    }
}