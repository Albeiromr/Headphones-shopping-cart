import React from 'react';
import Proptypes from "prop-types";
import './1000-1920px.style.scss';
import './500-1000px.style.scss';
import './0-500px.style.scss';
import MovableContainer from '../MovableContainer/MovableContainer.component';

const ShoppingCart = () => {

    

    return (
        <section className='shopping-cart'>
            < MovableContainer
            />
        </section>
    )
};

// component documentation

ShoppingCart.propTypes = {
    
  };

export default ShoppingCart;