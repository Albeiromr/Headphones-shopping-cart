import React, {useState} from 'react';
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


    // this state is used to sume items in the desciption component
    const [sume, setSume] = useState(0)

    console.log(sume);
    

    return (
        <section className='shopping-cart'>

            <ContinueShopping 
            />

            <Steps 
            />
            <DescriptionBig
            shoppingCart={shoppingCart} 
            sume={sume}
            />
            
            < MovableContainer
            shoppingCart={shoppingCart}
            changeShoppingCart={changeShoppingCart}
            sume={sume}
            setSume={setSume}
            />
            <Cart 
            shoppingCart={shoppingCart}
            changeShoppingCart={changeShoppingCart}
            sume={sume}
            setSume={setSume}
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