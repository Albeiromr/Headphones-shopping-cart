import React from 'react';
import Proptypes from "prop-types";
import './1000-1920px.style.scss';
import './500-1000px.style.scss';
import './0-500px.style.scss';

const Description = () => {
   
    

    return (
        <div className='description'>
            <h2 className='description__h2'>
              Shopping Cart
          </h2>
          <p className='description__p'>
              You have 4 items in your cart
          </p>
        </div>
    )
};

Description.propTypes = {
    
  };

export default Description;



