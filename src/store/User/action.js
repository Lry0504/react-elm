import * as user from './action-type';

//保存用户信息
export const saveUserInfo = (value) => {
    return {
        type: user.SAVE_USERINFO,
        value
    }
}
//删除用户数据
export const delUserInfo = (value) => {
    return {
        type: user.DEL_USERINFO,
        value
    }
}
//修改用户信息
export const resetUserInfo = (datatype, value) => {
    return {
        type: user.RESET_USERINFO,
        datatype,
        value
    }
}