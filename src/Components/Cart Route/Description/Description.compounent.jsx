import React from 'react';
import Proptypes from "prop-types";
import './1000-1920px.style.scss';
import './500-1000px.style.scss';
import './0-500px.style.scss';

const Description = ({shoppingCart, sume}) => {
   
  let productamount = shoppingCart.length

    return (
      <div className="description">
        {productamount + sume > 1 ? (
          <h2 className="description__h2">{productamount + sume} Products</h2>
        ) : (
          <h2 className="description__h2">{productamount + sume} Product</h2>
        )}
      </div>
    );
};

Description.propTypes = {
    sume: Proptypes.number.isRequired,
  };

export default Description;



