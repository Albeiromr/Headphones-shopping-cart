import React from 'react';
import Proptypes from "prop-types";
import './1000-1920px.style.scss';
import './500-1000px.style.scss';
import './0-500px.style.scss';
import CartProduct from '../CartProduct/CartProduct.compounent';

const Cart = ({shoppingCart, changeShoppingCart}) => {

    return (
        <div className='cart'>

            {shoppingCart.length >= 1 ? 
            shoppingCart.map((cartProduct) => (
            <CartProduct 
            key={cartProduct.id}
            cartProduct={cartProduct}
            shoppingCart={shoppingCart}
            changeShoppingCart={changeShoppingCart}
            />)) :

            <p className='cart__empty'>
                Your cart is empty
            </p>
            } 
            

        </div>
    )
};

Cart.propTypes = {
    shoppingCart: Proptypes.array.isRequired,
    changeShoppingCart: Proptypes.func.isRequired,
    };

export default  Cart;