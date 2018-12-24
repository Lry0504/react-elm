/**
 *  存储localStorage
 *  @param {*} name
 *  @param {*} content
 */
export const setStore = (name,content) => {
    if(!name) return
    if(typeof content !== 'string') {
        content = JSON.stringify(content);
    }
    window.localStorage.setItem(name,content);
}

/**
 *  获取localStorage
 *  @param {*} name
 */
export const getStore = name => {
    if(!name) return
    return window.localStorage.getItem(name);
}

/**
 *  删除localStorage
 *  @param {*} name
 */
export const removeStore = name => {
    if(!name) return
    window.localStorage.removeItem(name);
}

/**
 *  用于get方法后面参数的拼接，传入data:Object
 *  @param {*} data
 */
export const getUrlConcat = function(data) {
    let dataStr = '';   //数据拼接字符串
    let url = '';
    Object.keys(data).forEach( key => {
        dataStr += key + '=' + data[key] + '&';
    })
    if (dataStr !== '') {
        dataStr = dataStr.substr(0,dataStr.lastIndexOf('&'));
        url = url + '?' + dataStr;
    }
    return url
}
/**
 *  处理图片路径
 *  @param {*} path
 */
export const getImagePath = (path) => {
    //传递过来的图片地址需要处理后才能正常使用(path)
    let img;
    //路径错误
    if(!path || path === 'default.jpg') {
        return 'https://elm.cangdu.org/img/default.jpg'
    } else {
        //.jpeg格式图片
        if (path.indexOf('.jpeg') !== -1) {
            img = '.jpeg';
        } else if (path.indexOf('.png') !== -1) {
            img = '.png'
        } else {
            img = '.jpg'
        }
        let url = '/' + path.substr(0, 1) + '/' + path.substr(1, 2) + '/' + path.substr(3) + img;
        return 'https://fuss10.elemecdn.com' + url
    }
}