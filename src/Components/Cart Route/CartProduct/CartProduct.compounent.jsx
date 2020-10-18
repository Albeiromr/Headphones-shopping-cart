import React from 'react';
import Proptypes from "prop-types";
import './1000-1920px.style.scss';
import './500-1000px.style.scss';
import './0-500px.style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faMinusCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const CartProduct = ({cartProduct}) => {

    let {color, image, name, price, id} = cartProduct;

    return (
      <div className="cart-product">
        <article className="cart-product__sub-container">
          <h2 className="cart-product__reference">{name}</h2>
          <p className="cart-product__color">{color}</p>
          <p className="cart-product__price">$ {price}</p>

                <FontAwesomeIcon 
                className='cart-product__close'
                icon={faTimesCircle}
                />

          <div className='cart-product__quantity-container'>

                <FontAwesomeIcon 
                className='cart-product__add-less'
                icon={faMinusCircle}
                />

                <p className='cart-product__quantity'>1</p>

                <FontAwesomeIcon
                className='cart-product__add-less'
                icon={faPlusCircle}
                />

          </div>

        </article>

        <img className="cart-product__image" src={image} alt="product image" />
      </div>
    );
};

CartProduct.propTypes = {
    cartProduct: Proptypes.object.isRequired,
    };

export default CartProduct;