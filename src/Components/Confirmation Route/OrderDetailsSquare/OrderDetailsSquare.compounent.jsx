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
            

        </div>
    )
};


// component documentation

OrderDetailsSquare.propTypes = {
    
};

export default OrderDetailsSquare