import React from 'react';
import Proptypes from "prop-types";
import "./1000-1920px.style.scss";
import "./500-1000px.style.scss";
import "./0-500px.style.scss";

const Order = () => {

    return (
        <article className='order'>

            <div className='order__button-container'>

                <div className='order__line'></div>
                
                <div className='order__button'>

                    <p className='order__text'>
                        Preparing
                    </p>

                </div>
                <div className='order__button'>

                    <p className='order__text'>
                        On The Way
                    </p>

                </div>
                <div className='order__button'>
                    
                    <p className='order__text'>
                        Delivered
                    </p>

                </div>

            </div>
            
        </article>
    )
};

// component documentation

Order.propTypes = {

};

export default Order;