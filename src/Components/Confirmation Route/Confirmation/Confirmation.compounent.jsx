import React, {useState, useEffect} from 'react';
import Proptypes from "prop-types";
import './1000-1920px.style.scss';
import './500-1000px.style.scss';
import './0-500px.style.scss';
import Steps from '../Steps/Steps.compounent';
import OrderDetailsSquare from '../OrderDetailsSquare/OrderDetailsSquare.compounent';
import OrderContainer from '../OrderContainer/OrderContainer.compounent';
import ContiniuShopping from '../ContinueShopping/ContinueShopping.compounent';
import NoOrder from '../NoOrders/NoOrders.compounent';
import OrderScroll from '../OrderScroll/OrderScroll.compounent';



const Confirmation = ({orders}) => {

    // this variables is used for not showing some compounents in this route
    const conditionalRendering = true
    //this state is for filtering the order that you select when clickin on it
    const [filteredOrder, setFilteredProduct] = useState({});

    useEffect(() => {
      setFilteredProduct(orders[orders.length - 1])
    },[orders])

    //this state is for hidding the scroll indicator when you have not mor than 3 orders
    const [hide, setHide] = useState(false)

   

    useEffect(() => {
      if (orders.length > 3){
        setHide(true)
      }else {
        setHide(false)
      }
    }, [orders])

    return (
      <section className="confirmation">
        <ContiniuShopping />

        <Steps conditionalRendering={conditionalRendering} />
        
        {hide ? <OrderScroll /> : null}

        {orders.length > 0 ? (
          <OrderDetailsSquare filteredOrder={filteredOrder} />
        ) : (
          <NoOrder />
        )}

        <OrderContainer
          orders={orders}
          filteredOrder={filteredOrder}
          setFilteredProduct={setFilteredProduct}
          setHide={setHide}
        />
      </section>
    );
};

// component documentation

Confirmation.propTypes = {
    orders: Proptypes.array.isRequired,
    
  };

export default Confirmation;