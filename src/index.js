import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader'; //热加载
import store from './store/store';
import Route from './router/route';
import * as serviceWorker from './serviceWorker';
import './utils/config/rem';
import './assets/style/base.scss';

const render = Component => {
    ReactDOM.render(
        //接收Redux的store作为props，通过context对象传递给子孙组件上的connect
        <Provider store={store}>
            {/* 使用热加载加载页面信息 */}
            <AppContainer>
                <Component />
            </AppContainer>
        </Provider>, 
        document.getElementById('root')
    )
}

render(Route)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
