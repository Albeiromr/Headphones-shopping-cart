import React from 'react';
import Proptypes from "prop-types";
import './1000-1920px.style.scss';
import './500-1000px.style.scss';
import './0-500px.style.scss';

const DescriptionBig = ({shoppingCart, sume}) => {
   
    let productamount = shoppingCart.length

    return (
        <div className='description-main'>
          <h2 className='description-main__h2'>
              Shopping Cart
          </h2>
          <p className='description-main__p'>
              You have {productamount + sume} items in your cart
          </p>
        </div>
    )
};

DescriptionBig.propTypes = {
    shoppingCart: Proptypes.array.isRequired,
    sume: Proptypes.number.isRequired,
  };

export default DescriptionBig;
