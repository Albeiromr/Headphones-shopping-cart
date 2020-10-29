import React from "react";
import Proptypes from "prop-types";
import "./1000-1920px.style.scss";
import "./500-1000px.style.scss";
import "./0-500px.style.scss";
import Order from '../Order/Order.compounent';

const OrderContainer = ({orders, filteredOrder, setFilteredProduct}) => {

    

    return (
        <div className='order-container'>

            {orders.map(order => (<Order
                key={order.id} 
                order={order}
                orders={orders}
                filteredOrder={filteredOrder}
                setFilteredProduct={setFilteredProduct}
            />))}

        </div>
    )
};

// component documentation

OrderContainer.propTypes = {
    orders: Proptypes.array.isRequired,
    filteredOrder: Proptypes.object.isRequired,
    setFilteredProduct: Proptypes.func.isRequired
};

export default OrderContainer;