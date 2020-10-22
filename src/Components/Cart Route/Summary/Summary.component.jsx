import React from 'react';
import Proptypes from "prop-types";
import './1000-1920px.style.scss';
import './500-1000px.style.scss';
import './0-500px.style.scss';

const Summary = ({total, taxes}) => {

    

    return (
        <div className='summary'>
            <div className='summary__text'>
                <p className='summary__paragraphs'>Products</p>
                <p className='summary__paragraphs'>Taxes</p>
                <p className='summary__paragraphs'>Shipping</p>
                <p className='summary__paragraphs'>Total</p>
            </div>
            <div className='summary__quantity'>
                <p className='summary__numbers'>$ {total}</p>
                <p className='summary__numbers'>$ {taxes}</p>
                <p className='summary__numbers'>$ {}</p>
                <p className='summary__numbers'>$ {}</p>
            </div>
        </div>
    )
};

Summary.propTypes = {
    total: Proptypes.number.isRequired,
    taxes: Proptypes.number.isRequired,
};

export default Summary;