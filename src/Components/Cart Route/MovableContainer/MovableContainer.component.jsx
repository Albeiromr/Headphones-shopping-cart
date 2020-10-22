import React, {useState} from 'react';
import Proptypes from "prop-types";
import './1000-1920px.style.scss';
import './500-1000px.style.scss';
import './0-500px.style.scss';
import FormSquare from '../FormSquare/FormSquare.compounent';
import CartProduct from '../CartProduct/CartProduct.compounent';
import Description from '../Description/Description.compounent';
import Summary from '../Summary/Summary.component';


const MovableContainer = ({shoppingCart, changeShoppingCart, sume, setSume, setTotal, total, taxes  }) => {

  
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

            <Description 
            shoppingCart={shoppingCart}
            sume={sume}
            />

            <Summary 
            total={total}
            taxes={taxes}
            />

            <div className='movable-container__cart'>

            {shoppingCart.length >= 1 ? 

              shoppingCart.map((cartProduct) => (
              <CartProduct 
              key={cartProduct.id}
              cartProduct={cartProduct}
              shoppingCart={shoppingCart}
              changeShoppingCart={changeShoppingCart}
              sume={sume}
              setSume={setSume}
              setTotal={setTotal}
              total={total}
  
              />)) :

              <p className='movable-container__empty'>
                  Your cart is empty
              </p>
              } 


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
    sume: Proptypes.number.isRequired,
    setSume: Proptypes.func.isRequired,
    setTotal: Proptypes.func.isRequired,
    total: Proptypes.number.isRequired,
    taxes: Proptypes.number.isRequired,
  };

export default MovableContainer;