import React from 'react';
import Proptypes from "prop-types";
import './1000-1920px.style.scss';
import './500-1000px.style.scss';
import './0-500px.style.scss';

const Summary = ({total, taxes, shipping, purchase}) => {

    

    return (
        <div className='summary'>
            <div className='summary__text'>
                <p className='summary__paragraphs'>Products</p>
                <p className='summary__paragraphs'>Taxes</p>
                <p className='summary__paragraphs'>Shipping</p>
                <p className='summary__paragraphs summary__black'>Total</p>
            </div>
            <div className='summary__quantity'>
                <p className='summary__numbers'>$ {total}</p>
                <p className='summary__numbers'>$ {taxes}</p>
                <p className='summary__numbers'>$ {shipping}</p>
                <p className='summary__numbers summary__black'>$ {purchase}</p>
            </div>
        </div>
    )
};

Summary.propTypes = {
    total: Proptypes.number.isRequired,
    taxes: Proptypes.number.isRequired,
    shipping: Proptypes.number.isRequired,
    purchase: Proptypes.number.isRequired,
};

export default Summary;