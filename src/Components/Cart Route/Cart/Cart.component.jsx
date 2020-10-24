import React from 'react';
import Proptypes from "prop-types";
import './1000-1920px.style.scss';
import './500-1000px.style.scss';
import './0-500px.style.scss';
import CartProduct from '../CartProduct/CartProduct.compounent';

const Cart = ({shoppingCart, changeShoppingCart, sume, setSume, setTotal,total}) => {

   

    return (
        <div className='cart'>

            {shoppingCart.length >= 1 ? 
            shoppingCart.map((cartProduct) => (
            <CartProduct 
            key={cartProduct.id}
            cartProduct={cartProduct}
            shoppingCart={shoppingCart}
            changeShoppingCart={changeShoppingCart}
            sume={sume}
            setSume={setSume}
            setTotal={setTotal}
            total={total}
            />)) :

            <div>

            <p className='cart__empty'>
                Your cart is empty
                
            </p>

            <button className='cart__button'>
            Add products
            </button>

            </div>
            } 
            

        </div>
    )
};

Cart.propTypes = {
    shoppingCart: Proptypes.array.isRequired,
    changeShoppingCart: Proptypes.func.isRequired,
    sume: Proptypes.number.isRequired,
    setSume: Proptypes.func.isRequired,
    setTotal: Proptypes.func.isRequired,
    total: Proptypes.number.isRequired,
    };

export default  Cart;