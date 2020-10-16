import React from 'react';
import Proptypes from "prop-types";
import './1000-1920px.style.scss';
import './500-1000px.style.scss';
import './0-500px.style.scss';

const CartProduct = ({cartProduct}) => {

    let {color, image, name, price, id} = cartProduct;

    return (
        <div className='cart-product'>

            <article className='cart-product__sub-container'>

            </article>

            <img className='cart-product__image' src={image} alt="product image"/>

        </div>
    )
};

CartProduct.propTypes = {
    cartProduct: Proptypes.object.isRequired,
    };

export default CartProduct;