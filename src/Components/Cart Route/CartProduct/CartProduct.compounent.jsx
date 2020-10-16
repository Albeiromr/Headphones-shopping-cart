import React from 'react';
import Proptypes from "prop-types";
import './1000-1920px.style.scss';
import './500-1000px.style.scss';
import './0-500px.style.scss';

const CartProduct = ({cartProduct}) => {

    let {color, image, name, price} = cartProduct;

    return (
        <div className='cart-product'>
            
        </div>
    )
};

CartProduct.propTypes = {
    cartProduct: Proptypes.object.isRequired,
    };

export default CartProduct;