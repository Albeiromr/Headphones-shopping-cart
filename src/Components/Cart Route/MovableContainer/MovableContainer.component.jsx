import React, {useState} from 'react';
import Proptypes from "prop-types";
import './1000-1920px.style.scss';
import './500-1000px.style.scss';
import './0-500px.style.scss';
import FormSquare from '../FormSquare/FormSquare.compounent';
import CartProduct from '../CartProduct/CartProduct.compounent';


const MovableContainer = ({shoppingCart, changeShoppingCart }) => {

  
  
  // this state is for moving this container side to side
  const [translate, changeTranslate] = useState('0vw');

    const handleClick = () => {
      changeTranslate('-100vw')
    }

    return (
        <div 
        className='movable-container'
        style={{'--translate': translate}}
        >

            <div className='movable-container__cart'>

            {shoppingCart.map((cartProduct) => (
            <CartProduct 
            key={cartProduct.id}
            cartProduct={cartProduct}
            />))}


            </div>
          

            <div 
            className='movable-container__forward'
            onClick={handleClick}
            >

              <p className='movable-container__text'>
                Checkout
              </p>


            </div>


            <FormSquare 
            changeTranslate={changeTranslate}
            />

        </div>
        
    )
};

// component documentation

MovableContainer.propTypes = {
    shoppingCart: Proptypes.object.isRequired,
    changeShoppingCart: Proptypes.func.isRequired,
  };

export default MovableContainer;