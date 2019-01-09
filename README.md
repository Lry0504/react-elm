## react-elm

![](https://img.shields.io/badge/react-16.6.3-blue.svg)
![](https://img.shields.io/badge/react-redux-6.0.0-green.svg)
![](https://img.shields.io/badge/react-router-dom-4.3.1-f1ddb4.svg)
![](https://img.shields.io/badge/axios-0.18.0-ff69b4.svg)
![](https://img.shields.io/badge/swiper-4.4.2-yellow.svg)
![](https://img.shields.io/badge/webpack-4.19.1-003366.svg)

# 前言
最近在学完react基础,迫切想找一个实战项目来练手深入了解react, 在看到bailicangdu大神使用vue实现的elm45页项目的时候果断选择了elm,后台数据都是使用bailicangdu提供的数据接口(感谢bailicangdu).</br>
该项目是饿了吗, 11月份的时候就开始构思项目整体架构，也参照了liuyangjike的项目架构，大致完善了react-elm的整体开发思路，目前开发了常用组件Header、Footer、ShopList等,pages页面开发目前只实现了Home首页，其余功能后期不断完善...
# 技术栈
react + react-redux + react-router + es6 + axios + sass + webpack
# 说明
> API接口地址[点这里](https://github.com/bailicangdu/node-elm/blob/master/API.md)
# 项目运行
`node >= 6.0`
```
  git clone git@github.com:Lry0504/react-elm.git
  cd react-elm
  npm install
  npm start
```
# 演示

> 项目暂未完成，该功能暂时未开放


# 项目效果截图展示
<img src="https://github.com/Lry0504/image_resources/blob/master/react-elm-img/Home.png" width="322" height="571"/> &#160;&#160;<img src="https://github.com/Lry0504/image_resources/blob/master/react-elm-img/Food.png" width="319" height="570"/>

# 项目整体结构
```javascript
├── config            ------------------webpack配置
│   ├── env.js       
│   ├── jest          
│   │   ├── cssTransform.js
│   │   └── fileTransform.js
│   ├── paths.js
│   ├── webpack.config.dev.js
│   ├── webpack.config.prod.js
│   └── webpackDevServer.config.js
├── yarn.lock
├── package.json    --------------------项目package.json
├── public          --------------------出口
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
├── scripts        ---------------------运行的脚本
│   ├── build.js
│   ├── start.js
│   └── test.js
├── src           ----------------------源码目录
│   ├── api       ----------------------API目录
│   │   ├── api.js
│   │   └── server.js
│   ├── assets   -----------------------静态资源目录
│   │   ├── iconfont -------------------iconfont目录
│   │   └── style   --------------------基础样式文件
│   │       ├── base.scss
│   │       ├── mixin.scss
│   │       └── swiper.min.css
│   ├── components   -------------------公共组件
│   │   ├── LogoutTip  -----------------退出提示组件
│   │   ├── Footer   -------------------底部导航栏组件
│   │   ├── Header  --------------------头部组件
│   │   ├── Loader  --------------------加载组件
│   │   └── ShopList -------------------商店列表组件
│   ├── index.js    --------------------入口
│   ├── pages       --------------------页面目录
│   │   ├── Home    --------------------主页面
│   │   ├── Food   ---------------------首页nav导航食物页面
│   │   ├── UserInfo  ------------------个人信息页面
│   │   ├── Login  ---------------------登录页面
│   │   ├── User   ---------------------个人中心页面
│   │   ├── SetUserInfo ----------------用户信息设置页面
│   │   ├── ShopDetails   --------------商店详情页面
│   │   └── other  ---------------------其他页面后续再考虑开发...
│   ├── router   -----------------------路由
│   │   └── route.js
│   ├── serviceWorker.js  --------------热加载
│   ├── store   ------------------------react-redux状态管理目录
│   │   ├── store.js
│   │   └── User
│   │       ├── action
│   │       ├── action-type
│   │       └── reducer
│   └── utils  ------------------------公用方法
│       ├── config  -------------------全局配置文件
│       │   ├──envconfig.js  ----------全局配置
│       │   └──rem.js   ---------------移动端适配
│       ├── asyncComponent.jsx  -------异步加载组件
│       └── commons.js  ---------------公用方法
├── README.md      ----------------------README

```
