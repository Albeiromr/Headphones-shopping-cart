import React from 'react';
import MultiSquare from '../MultiSquare/MultiSquare.component'
import ContCart from '../ContCart/ContCart.component';
import Proptypes from "prop-types";
import './1000-1920px.style.scss';
import './500-1000px.style.scss';
import './0-500px.style.scss';

const ShoppingCart = () => {


    return (

        
        <section className='shopping-cart'>
            <MultiSquare />
            <ContCart/>
        </section>
        
        
    )
};

// component documentation

ShoppingCart.propTypes = {
    
  };

export default ShoppingCart;