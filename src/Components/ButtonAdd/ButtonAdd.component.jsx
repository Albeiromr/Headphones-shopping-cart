import React from 'react';
import Proptypes from "prop-types";
import './1000-1920px.style.scss';
import './500-1000px.style.scss';
import './0-500px.style.scss';


const ButtonAdd = ({changeShoppingCart, shoppingCart, itemToCart}) => {
    
    
    
    //this function is used to add products to de user´s shopping Cart
    const addToCart = () => {
        changeShoppingCart([...shoppingCart, itemToCart]);
    }

    return (
        
        <button
        onClick={addToCart}
        type='submit'
        className='button-add'
        >Add to cart</button>
        
    )
};

// component documentation

ButtonAdd.propTypes = {
    changeShoppingCart: Proptypes.func.isRequired,
    shoppingCart: Proptypes.array.isRequired,
    itemToCart: Proptypes.object.isRequired,
  };

export default ButtonAdd;