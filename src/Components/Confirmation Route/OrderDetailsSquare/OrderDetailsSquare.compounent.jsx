import React, {useState} from "react";
import Proptypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import "./1000-1920px.style.scss";
import "./500-1000px.style.scss";
import "./0-500px.style.scss";

const OrderDetailsSquare = ({filteredOrder}) => {

    const {id, productAmount, products, taxes, shipping, total} = filteredOrder;

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

            <p className='order-details-square__order-details'>Order Details</p>

            <div className='order-details-square__camp1'>

                <p className='order-details-square__text1'>Order ID</p>
                <p className='order-details-square__text1'>Product Amount</p>
                <p className='order-details-square__text1'>Products </p>
                <p className='order-details-square__text1'>Taxes</p>
                <p className='order-details-square__text1'>Shipping</p>
                <p className='order-details-square__text1'>Total</p>

            </div>
            <div className='order-details-square__data1'>

                <p className='order-details-square__text2'>{id}</p>
                <p className='order-details-square__text2'>{productAmount}</p>
                <p className='order-details-square__text2'>$ {products}</p>
                <p className='order-details-square__text2'>$ {taxes}</p>
                <p className='order-details-square__text2'>$ {shipping}</p>
                <p className='order-details-square__text2'>$ {total}</p>

            </div>
            <div className='order-details-square__camp2'>

                <p className='order-details-square__text3'>Name</p>
                <p className='order-details-square__text3'>Phone</p>
                <p className='order-details-square__text3'>Shipping address</p>
                <p className='order-details-square__text3'>City, State</p>
                <p className='order-details-square__text3'>Zip code</p>
                <p className='order-details-square__text3'>Purchase date</p>

            </div>
            <div className='order-details-square__data2'>
                <p className='order-details-square__text4'>Mike Daniels</p>
                <p className='order-details-square__text4'>856 985 78945</p>
                <p className='order-details-square__text4'>4329 McDowell St</p>
                <p className='order-details-square__text4'>Columbia, TN</p>
                <p className='order-details-square__text4'>38401</p>
                <p className='order-details-square__text4'>12/12/2020</p>
            </div>
            

        </div>
    )
};


// component documentation

OrderDetailsSquare.propTypes = {
    filteredOrder: Proptypes.object.isRequired,
};

export default OrderDetailsSquare