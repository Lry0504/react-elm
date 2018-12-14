import Server from './server';
import { getUrlConcat } from '../utils/commons';

class API extends Server {
    /**
     *  用途：获取验证码
     *  @url http://cangdu.org:8001/v1/captchas
     *  返回status为1表示成功
     *  @method get
     *  @return {Promise}
     */
    async getCaptchaCode() {
        try {
            let result = await this.axios('post', 'https://elm.cangdu.org/v1/captchas',{});
            if (result.status === 1 && (result instanceof Object)) {
                return result || []
            } else {
                let err = {
                    tip: '获取验证码失败',
                    response: result
                }
                throw err
            }
        } catch (err) {
            throw err
        }
    }

    /**
     *  用途：账号密码登录
     *  @url http://cangdu.org:8001/v2/login
     *  @method post
     *  @return {Promise}
     */
    async accountLogin(data) {
        try {
            let result = await this.axios('post', 'https://elm.cangdu.org/v2/login', data);
            if (result.status !== 0 && (result instanceof Object)) {
                return result || []
            } else {
                let err = {
                    tip: '登录失败',
                    response: result
                }
                return err
            }
        } catch (err) {
            throw err
        }
    }

    /**
     *  用途：获取用户信息
     *  @url: https://elm.cangdu.org/v1/user
     *  @param {*} get的拼接参数
     */
    async getUser(data) {
        try {
            let result = await this.axios('get', 'https://elm.cangdu.org/v1/user' + getUrlConcat(data));
            if (result.status !== 0 && (result instanceof Object)) {
                return result || []
            } else {
                let err = {
                    tip: '获取用户信息失败',
                    response: result
                }
                throw err
            }
        } catch (err) {
            throw err
        }
    }

    /**
     *  用途：上传图片
     *  @url https://elm.cangdu.org/v1/addimg/shop
     *  返回status为1表示成功
     *  @method post
     *  @return {Promise}
     */
    async uploadImg(data) {
        try {
            let result = await this.axios('post', 'https://elm.cangdu.org/v1/addimg/shop', data);
            if (result.status === 1) {
                return result
            } else {
                let err = {
                    tip: '上传图片失败',
                    response: result,
                    url: '//elm.cangdu.org/v1/addimg/shop'
                }
                throw err
            }
        } catch (err) {
            throw err
        }
    }

    /**
     *  用途：获取用户收货地址列表
     *  @url https://elm.cangdu.org/v1/users/:user_id/addresses
     *  返回status为1表示成功
     *  @method get
     */
    async getAddress(id) {
        try {
            let result = await this.axios('get', 'https://elm.cangdu.org/v1/users/' + id + '/addresses');
            if (result) {
                return result
            } else {
                let err = {
                    tip: '获取地址失败',
                    response: result,
                    url: '//elm.cangdu.org/v1/users/'+ id + '/addresses'
                }
                throw err
            }
        } catch (err) {
            throw err
        }
    }

    /**
     *  用途：搜索符合条件的地址
     *  @param {*} data
     *  @memberof API
     */
    async searchPois(data) {
        try {
            let result = await this.axios('get', 'https://elm.cangdu.org/v1/pois/' + getUrlConcat(data));
            if (result) {
                return result
            } else {
                let err = {
                    tip: '搜索地点失败',
                    response: result,
                    url: '//elm.cangdu.org/v1/pois' + getUrlConcat(data)
                }
                throw err
            }
        } catch (err) {
            throw err
        }
    }

    /**
     *  用途：根据经纬度获取地点信息
     *  @param {*} data
     *  @memberof API
     */
    async getPoisSite(data) {
        try {
            let result = await this.axios('get', 'https://elm.cangdu.org/v2/pois/' + data);
            if (result) {
                return result
            } else {
                let err = {
                    tip: '获取地点失败',
                    response: result,
                    url: '//elm.cangdu.org/v2/pois/' + data
                }
                throw err
            }
        } catch (err) {
            throw err
        }
    }

    /**
     *  用途：获取食物种类
     *  @param {*} data
     *  @memberof API 
     */
    async getFoodTypes(data) {
        try {
            let result = await this.axios('get', 'https://elm.cangdu.org/v2/index_entry/' + getUrlConcat(data));
            if (result) {
                return result
            } else {
                let err = {
                    tip: '获取食物种类失败',
                    response: result,
                    url: '//elm.cangdu.org/v2/index_entry/' + getUrlConcat(data)
                }
                throw err
            }
        } catch (err) {
            throw err
        }
    }

    /**
     *  用途：猜测城市
     *  @param {*} keyword
     *  @memberof API 
     */
    async cityGuess(keyword) {
        try {
            let result = await this.axios('get', 'https://elm.cangdu.org/v1/cities?type=guess');
            if (result) {
                return result
            } else {
                let err = {
                    tip: '城市失败',
                    response: result,
                    url: '//elm.cangdu.org/v1/cities?type=guess'
                }
                throw err
            }
        } catch (err) {
            throw err
        }
    }

    /**
     *  用途：获取商店列表
     *  @param {*} data
     *  @memberof API
     */
    async getShopList(data) {
        try {
            let result = await this.axios('get', 'https://elm.cangdu.org/shopping/restaurants/' + getUrlConcat(data));
            if (result) {
                return result
            } else {
                let err = {
                    tip: '获取商店列表失败',
                    response: result,
                    url: '//elm.cangdu.org/shopping/restaurants/' + getUrlConcat(data)
                }
                throw err
            }
        } catch (err) {
            throw err
        }
    }

    /**
     *  用途：获取商店详情
     *  @param {*} id
     *  @param {*} data
     *  @memberof API
     */
    async shopDetails(id, data) {
        try {
            let result = await this.axios('get', 'https://elm.cangdu.org/shopping/restaurant/' + id + getUrlConcat(data));
            if (result) {
                return result
            } else {
                let err = {
                    tip: '获取商店详情失败',
                    response: result,
                    url: '//elm.cangdu.org/shopping/restaurant/' + id + getUrlConcat(data)
                }
                throw err
            }
        } catch (err) {
            throw err
        }
    }

    /**
     *  获取食物清单
     *  @param {*} data
     *  @memberof API
     */
    async getFoodMenu(data) {
        try {
            let result = await this.axios('get', 'https://elm.cangdu.org/shopping/v2/menu/' + getUrlConcat(data));
            if (result) {
                return result
            } else {
                let err = {
                    tip: '获取食物清单失败',
                    response: result,
                    url: '//elm.cangdu.org/shopping/v2/menu/' + getUrlConcat(data)
                }
                throw err
            }
        } catch (err) {
            throw err
        }
    }
}

export default new API()