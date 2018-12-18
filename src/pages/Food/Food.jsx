import React, { Component } from 'react';
import ShopList from '../../components/ShopList/ShopList';
import Header from '../../components/Header/Header';
import './Food.scss';

class Food extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
goBack = () => {
    this.props.history.push('/Home')
}

    render() {
        return (
            <div className="food-container">
                {/* React 获取 url 参数 —— this.props.match */}
                <Header title={this.props.match.params.title} goBack={this.goBack} />
                <ShopList geohash={this.props.match.params.geohash} />
            </div>
        )
    }
}

export default Food