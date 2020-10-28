import React from 'react';
import Proptypes from "prop-types";
import './1000-1920px.style.scss';
import './500-1000px.style.scss';
import './0-500px.style.scss';

const DescriptionBig = ({shoppingCart, sume}) => {
   
    let productamount = shoppingCart.length

    return (
      <div className="description-main">
        {productamount + sume > 1 ? (
          <h2 className="description-main__h2">
            {productamount + sume} Products
          </h2>
        ) : (
          <h2 className="description-main__h2">
            {productamount + sume} Product
          </h2>
        )}
      </div>
    );
};

DescriptionBig.propTypes = {
    shoppingCart: Proptypes.array.isRequired,
    sume: Proptypes.number.isRequired,
  };

export default DescriptionBig;
