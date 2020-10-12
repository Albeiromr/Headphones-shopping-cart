import React from 'react';
import Proptypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight, faLongArrowAltLeft} from '@fortawesome/free-solid-svg-icons'
import "./1000-1920px.style.scss";
import "./500-1000px.style.scss";
import "./0-500px.style.scss";


const MultiSquare = () => {

    return (
        <div className='blue-square'>

            <div className='blue-square__checkout'>
                <p className='blue-square__text'>Checkout</p>
                <FontAwesomeIcon className='blue-square__arrow' icon={faLongArrowAltRight}/>
            </div>

            <FontAwesomeIcon className='blue-square__back' icon={faLongArrowAltLeft}/>

        </div>
    )
};

// component Proptypes documentation

MultiSquare.propTypes = {
    
};

export default MultiSquare;