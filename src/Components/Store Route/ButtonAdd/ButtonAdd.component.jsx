import React, {useState} from 'react';
import Proptypes from "prop-types";
import './1000-1920px.style.scss';
import './500-1000px.style.scss';
import './0-500px.style.scss';


const ButtonAdd = ({changeShoppingCart, shoppingCart, itemToCart}) => {
    
    
    const addToCart = () => {
       {changeShoppingCart([...shoppingCart, itemToCart])}
    };

    return (
        
        <button
        onClick={addToCart}
        type='submit'
        className='button-add'
        >Add to cart</button>
        
    )
};

ButtonAdd.propTypes = {
    changeShoppingCart: Proptypes.func.isRequired,
    shoppingCart: Proptypes.array.isRequired,
    itemToCart: Proptypes.object.isRequired,
  };

export default ButtonAdd;