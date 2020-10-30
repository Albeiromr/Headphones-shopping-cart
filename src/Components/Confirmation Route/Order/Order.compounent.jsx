import React, {useState} from 'react';
import Proptypes from "prop-types";
import "./1000-1920px.style.scss";
import "./500-1000px.style.scss";
import "./0-500px.style.scss";

const Order = ({order, orders, filteredOrder, setFilteredProduct}) => {

    const {id, productAmount} = order;

    const handleClick = (id) => {
       let selectedOrder = orders.filter(order => order.id === id)[0]
       setFilteredProduct(selectedOrder) 
    }

    

    return (
        <article onClick={() => handleClick(id)} className={id === filteredOrder.id ? 'order--mod' : 'order'}>

            <p className={id === filteredOrder.id ? 'order--mod__orderp' : 'order__orderp'}>Order ID:</p>

            <p className={id === filteredOrder.id ? 'order--mod__orderID' : 'order__orderID'} >{id}</p>

            <p className={id === filteredOrder.id ? 'order--mod__product-amount' : 'order__product-amount'}>{productAmount} Products</p>

            <div className={id === filteredOrder.id ? 'order--mod__button-container' : 'order__button-container'}>

                <div className={id === filteredOrder.id ? 'order--mod__line' : 'order__line'}></div>
                
                <div className={id === filteredOrder.id ? 'order--mod__button--preparing' : 'order__button--preparing'}>

                    <p className={id === filteredOrder.id ? 'order--mod__text--preparing' : 'order__text--preparing'} >
                        Preparing
                    </p>

                </div>
                <div className={id === filteredOrder.id ? 'order--mod__button' : 'order__button'}>

                    <p className={id === filteredOrder.id ? 'order--mod__text' : 'order__text'}>
                        On The Way
                    </p>

                </div>
                <div className={id === filteredOrder.id ? 'order--mod__button' : 'order__button'}>
                    
                    <p className={id === filteredOrder.id ? 'order--mod__text' : 'order__text'}>
                        Delivered
                    </p>

                </div>

            </div>
            
        </article>
    )
};

// component documentation

Order.propTypes = {
    order: Proptypes.object.isRequired,
    orders: Proptypes.array.isRequired,
    filteredOrder: Proptypes.object.isRequired,
    setFilteredProduct: Proptypes.func.isRequired,
};

export default Order;