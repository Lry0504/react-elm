//全局配置

//路径配置
let baseUrl = '';
let imgUrl;
//开发环境
if (process.env.NODE_ENV === 'development') {
    imgUrl = '//elm.cangdu.org/img/';
} else if (process.env.NODE_ENV === 'production') { //生产环境
    baseUrl = '//elm.cangdu.org';
    imgUrl = '//elm.cangdu.org/img/';
}

export {
    baseUrl,
    imgUrl
}