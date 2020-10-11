import React from 'react';
import Proptypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight} from '@fortawesome/free-solid-svg-icons'
import "./1000-1920px.style.scss";
import "./500-1000px.style.scss";
import "./0-500px.style.scss";

const ContCart = () => {

    return (
        <div className='cont-cart'>

            <div className='cont-cart__checkout'>
                <p className='cont-cart__text'>Checkout</p>
                <FontAwesomeIcon className='cont-cart__arrow' icon={faLongArrowAltRight}/>

            </div>

        </div>
    )
};

// component documentation

ContCart.propTypes = {
    changeShoppingCart: Proptypes.func.isRequired,
    shoppingCart: Proptypes.array.isRequired,
    itemToCart: Proptypes.object.isRequired,
  };
export default ContCart;