import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { is, fromJS } from 'immutable';
import { imgUrl } from '../../utils/config/envconfig';
import { getImgPath } from '../../utils/commons';
import API from '../../api/api';
import LogoutTip from '../../components/LogoutTip/LogoutTip';
import './ShopDetails.scss';

class ShopDetails extends Component {
    static propTypes = {
        userInfo: PropTypes.object.isRequired
    }
    state = {
        shopId: "", //店铺ID
        shopDetailData: "", //店铺详情
        show: false,
        miniMoney: 0,
        alertText: "请在手机APP中打开", //提示信息文本
        active: "food",
        activeIndex: 0,
        initList: [],
        isShowCart: false,  //是否显示购物车
        totalPrice: 0,  //总价格
        foodList: [],   //食物列表
        animate: "cart-icon-container active-icon",
        displayList: []
      }
    render() {
        return (
            <div className="shop-container">
                
            </div>
        )
    }
}

export default ShopDetails