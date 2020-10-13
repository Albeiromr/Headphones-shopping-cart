import React from 'react';
import Proptypes from "prop-types";
import "./1000-1920px.style.scss";
import "./500-1000px.style.scss";
import "./0-500px.style.scss";

const Price = ({productSelected}) => {

    return (
        <p className='price'>${productSelected.price}</p>
    )
};

// component documentation

Price.propTypes = {
    productSelected: Proptypes.object.isRequired,
  };

export default Price;