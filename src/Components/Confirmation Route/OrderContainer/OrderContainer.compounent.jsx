import React from "react";
import Proptypes from "prop-types";
import "./1000-1920px.style.scss";
import "./500-1000px.style.scss";
import "./0-500px.style.scss";
import Order from '../Order/Order.compounent';

const OrderContainer = () => {

    return (
        <div className='order-container'>

            <Order />
            <Order />
            <Order />
            <Order />

        </div>
    )
};

// component documentation

OrderContainer.propTypes = {

};

export default OrderContainer;