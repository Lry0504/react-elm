import axios from 'axios';
//import { baseUrl } from '../utils/config/envconfig';

/**
 *  @params method {string} 方法名
 *  @params url {string} 请求地址 eg: /login 配合baseUrl组成完整请求地址
 *  @params baseUrl {string} 请求地址统一前缀 ***需要提前指定***    eg: http://cangdu.org
 *  @params timeout {number} 请求超时时间 默认30000
 *  @params params {object} get方式传参key值
 *  @params headers {string} 指定请求头信息
 *  @params withCredentials {boolean} 请求是否携带本地cookies信息 默认开启
 *  @params validateStatus {func} 默认判断请求成功的范围 200-300
 *  @return {Promise}
 *  其他更多拓展参看axios文档
 *  注意：params中的数据会覆盖method url 参数，所以如果指定了这两个参数则不需要在params中带入
 */
export default class Server {

    axios(method, url, data) {
        return new Promise( (resolve, reject) => {
            let _option = {
                method,
                url,
                baseUrl: 'https://elm.cangdu.org',
                timeout: 30000,
                params: null,
                data: data,
                headers: null,
                withCredentials: true,
                validateStatus: (status) => {
                    return status >= 200 && status  < 300
                }
            }
            axios.request(_option)
                .then( res => {
                    resolve(typeof res.data === 'object' ?res.data:JSON.parse(res.data));
                }).catch ( err => {
                    if (err.response) {
                        reject(err.response.data);
                    } else {
                        reject(err);
                    }
                })
        })
    }
}