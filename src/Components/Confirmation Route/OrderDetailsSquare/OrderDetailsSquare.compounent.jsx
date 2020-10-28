import React, {useState} from "react";
import Proptypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import "./1000-1920px.style.scss";
import "./500-1000px.style.scss";
import "./0-500px.style.scss";

const OrderDetailsSquare = () => {

    // this state is for moving the whole order-details-square in smartphones displays
    const [move, setMove] = useState('0%')

    const handleLeft = () => {
        setMove('-53.358%')
    };

    const handleRight = () => {
        setMove('0%')
    };

    return (
        <div style={{'--move': move}} className='order-details-square'>

            <div className='order-details-square__line1'></div>

            <div className='order-details-square__line2'></div>

            <FontAwesomeIcon
            onClick={handleLeft}
            icon={faChevronLeft}
            className="order-details-square__arrow-left"
            />

            <FontAwesomeIcon
            onClick={handleRight}
            icon={faChevronRight}
            className="order-details-square__arrow-right"
            />

            <div className='order-details-square__camp1'>

                <p className='order-details-square__text1'>Order ID</p>
                <p className='order-details-square__text1'>Product Amount</p>
                <p className='order-details-square__text1'>Products </p>
                <p className='order-details-square__text1'>Taxes</p>
                <p className='order-details-square__text1'>Shipping</p>
                <p className='order-details-square__text1'>Total</p>

            </div>
            <div className='order-details-square__data1'>

                <p className='order-details-square__text2'>A000000</p>
                <p className='order-details-square__text2'>1</p>
                <p className='order-details-square__text2'>$ 00.00</p>
                <p className='order-details-square__text2'>$ 00.00</p>
                <p className='order-details-square__text2'>$ 00.00</p>
                <p className='order-details-square__text2'>$ 00.00</p>

            </div>
            <div className='order-details-square__camp2'>

            </div>
            <div className='order-details-square__data2'>

            </div>
            

        </div>
    )
};


// component documentation

OrderDetailsSquare.propTypes = {
    
};

export default OrderDetailsSquare