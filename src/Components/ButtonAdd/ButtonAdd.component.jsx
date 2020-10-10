import React from 'react';
import Proptypes from "prop-types";
import './1000-1920px.style.scss';
import './500-1000px.style.scss';
import './0-500px.style.scss';


const ButtonAdd = ({changeShoppingCart, productSelected, shoppingCart}) => {
    
    //this function is used to add products to de user´s shopping Cart
    const addToCart = () => {
        changeShoppingCart([...shoppingCart, productSelected]);
    }

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
    productSelected: Proptypes.object.isRequired,
    shoppingCart: Proptypes.array.isRequired,
  };

export default ButtonAdd;