import React, {useState, useEffect} from 'react';
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

    //let sume all the items to get the total purchase amount
    const [total, setTotal] = useState(
        shoppingCart.map(item => item.price).reduce((a, b) =>  a + b, 0).toFixed(2)
        );
    // obtaining the taxes for the whole purchase
    const [taxes, setTaxes] = useState(0.00)

    useEffect(() => {
        let a = total * 7 / 100
        setTaxes(a.toFixed(2))
    },[total])
    

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
            setTotal={setTotal}
            total={total}
            taxes={taxes}
            />
            <Cart 
            shoppingCart={shoppingCart}
            changeShoppingCart={changeShoppingCart}
            sume={sume}
            setSume={setSume}
            setTotal={setTotal}
            total={total}
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