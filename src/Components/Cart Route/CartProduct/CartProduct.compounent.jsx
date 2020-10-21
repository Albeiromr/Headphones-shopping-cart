import React, {useState} from 'react';
import Proptypes from "prop-types";
import './1000-1920px.style.scss';
import './500-1000px.style.scss';
import './0-500px.style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faMinusCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';


const CartProduct = ({cartProduct, shoppingCart, changeShoppingCart, sume, setSume}) => {

  

    // state for select the product quantity tu purchase for each product
    const [quantity, changeQuantity] = useState(1)
    // cartProduct destructuring
    let {color, image, name, price, id} = cartProduct;
    // counter for incrmenting product quantity
    let increment = quantity
    // price * quantity
    let priceMultiplied = price * quantity
    
    let aditionalProduct = sume;

    const handlePlusClick = () => {
      // this is the action taken when clicking in the plus button
      increment++
      aditionalProduct++
      changeQuantity(increment)
      setSume(aditionalProduct)
    }

    const handleMinusClick = () => {
      // this is the action taken when clicking in the minus button
      if (quantity < 2) {
        changeQuantity(1);
      } else {
        increment--;
        changeQuantity(increment);
      }
      if(sume <= 0) {
        aditionalProduct = 0
      } else {
        aditionalProduct--
        setSume(aditionalProduct)
      }
      
    };

    const handleTimesCircleClick = (id) => {
      // function for deleting items from shopping cart
      let filtered = shoppingCart.filter(pct => pct.id !== id)
      changeShoppingCart(filtered)
    }

    return (
      <div className="cart-product">
        <article className="cart-product__sub-container">
          <h2 className="cart-product__reference">{name}</h2>
          <p className="cart-product__color">{color}</p>
          <p className="cart-product__price">$ {priceMultiplied.toFixed(2)}</p>

                <FontAwesomeIcon 
                onClick={() => (handleTimesCircleClick(id))}
                className='cart-product__close'
                icon={faTimesCircle}
                />

          <div className='cart-product__quantity-container'>

                <FontAwesomeIcon 
                onClick={handleMinusClick}
                className={quantity < 2 ? 'cart-product__add-lessInactive' : 'cart-product__add-less' }
                icon={faMinusCircle}
                />

                <p className='cart-product__quantity'>{quantity}</p>

                <FontAwesomeIcon
                onClick={handlePlusClick}
                className='cart-product__add-less'
                icon={faPlusCircle}
                />

          </div>

        </article>

        <img className="cart-product__image" src={image} alt="product image" />
      </div>
    );
};

CartProduct.propTypes = {
    cartProduct: Proptypes.object.isRequired,
    changeShoppingCart: Proptypes.func.isRequired,
    shoppingCart: Proptypes.array.isRequired,
    sume: Proptypes.number.isRequired,
    setSume: Proptypes.func.isRequired,
    };

export default CartProduct;