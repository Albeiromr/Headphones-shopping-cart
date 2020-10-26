import React from 'react';
import {Link } from 'react-router-dom';
import './1000-1920px.style.scss';
import './500-1000px.style.scss';
import './0-500px.style.scss';


const ButtonBuy = ({itemToCart, changeShoppingCart}) => {
    
    const handleClick = () => {
        changeShoppingCart([itemToCart])
    }

    return (
        <Link to='/shoppingcart'>
            <button
            onClick={handleClick}
            type='submit'
            className='button-buy'
            >Buy now</button>
        </Link>
        
    )
};

// component documentation

ButtonBuy.propTypes = {
  };

export default ButtonBuy;