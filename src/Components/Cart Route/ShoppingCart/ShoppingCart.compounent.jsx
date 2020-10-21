import React from 'react';
import Proptypes from "prop-types";
import './1000-1920px.style.scss';
import './500-1000px.style.scss';
import './0-500px.style.scss';
import MovableContainer from '../MovableContainer/MovableContainer.component';
import Steps from '../../Confirmation Route/Steps/Steps.compounent';
import ContinueShopping from '../../Confirmation Route/ContinueShopping/ContinueShopping.compounent';
import Cart from '../Cart/Cart.component';
import FormSquareBig from '../FormSquareBig/FormSquareBig.compounent';
import DescriptionBig from '../DescriptionBig/DescriptionBig.component';



const ShoppingCart = ({shoppingCart, changeShoppingCart }) => {


    
    

    return (
        <section className='shopping-cart'>

            <ContinueShopping 
            />

            <Steps 
            />
            <DescriptionBig
            shoppingCart={shoppingCart} 
            />
            
            < MovableContainer
            shoppingCart={shoppingCart}
            changeShoppingCart={changeShoppingCart}
            />
            <Cart 
            shoppingCart={shoppingCart}
            changeShoppingCart={changeShoppingCart}
            />

            <FormSquareBig 
            />
        </section>
    )
};

// component documentation

ShoppingCart.propTypes = {
    shoppingCart: Proptypes.array.isRequired,
    changeShoppingCart: Proptypes.func.isRequired,
  };

export default ShoppingCart;