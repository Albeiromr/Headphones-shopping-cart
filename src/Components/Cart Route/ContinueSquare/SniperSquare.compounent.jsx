import React from "react";
import Proptypes from "prop-types";
import "./1000-1920px.style.scss";
import "./500-1000px.style.scss";
import "./0-500px.style.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const ContinueSquare = () => {

    return (

        <div className='continue-square'>

            <FontAwesomeIcon
            icon={faCheckCircle}
            className="continue-square__check-circle"
            />

            
            <p className="continue-square__text">
                Congratulations!!
            </p>

            <p className="continue-square__text2">
                We have received your payment
            </p>
        </div>
    )
};


ContinueSquare.propTypes = {
    
};

export default ContinueSquare;