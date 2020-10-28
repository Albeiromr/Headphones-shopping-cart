import React from 'react';
import Proptypes from "prop-types";
import './1000-1920px.style.scss';
import './500-1000px.style.scss';
import './0-500px.style.scss';
import Steps from '../Steps/Steps.compounent';
import OrderDetailsSquare from '../OrderDetailsSquare/OrderDetailsSquare.compounent';
import OrderContainer from '../OrderContainer/OrderContainer.compounent';
import ContiniuShopping from '../ContinueShopping/ContinueShopping.compounent';


const Confirmation = () => {

    // this variables is used for not showing some compounents in this route
    const conditionalRendering = true

    return (
        <section className='confirmation'>

          <ContiniuShopping />
          
          <Steps
          conditionalRendering={conditionalRendering}
          />

          <OrderDetailsSquare 
          />

          <OrderContainer 
          />
          
        </section>
    )
};

// component documentation

Confirmation.propTypes = {
    
  };

export default Confirmation;