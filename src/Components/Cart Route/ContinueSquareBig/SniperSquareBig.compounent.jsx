import React from "react";
import {Link} from 'react-router-dom';
import Proptypes from "prop-types";
import "./1000-1920px.style.scss";
import "./500-1000px.style.scss";
import "./0-500px.style.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const ContinueSquareBig = ({changeShoppingCart}) => {

    const myClick = () => {
      changeShoppingCart([]);
    };

    return (
      <div className="continue-square-big">

            <FontAwesomeIcon
            icon={faCheckCircle}
            className="continue-square-big__check-circle"
            />

            
            <p className="continue-square-big__text">
                Congratulations!!
            </p>

            <p className="continue-square-big__text2">
                We have received your payment
            </p>

            <Link to='/confirmation' >
            <button onClick={myClick} className='continue-square-big__button'>
                Go to my order
            </button>
            </Link>


      </div>
    );
};


ContinueSquareBig.propTypes = {
    changeShoppingCart: Proptypes.func.isRequired,
};

export default ContinueSquareBig;
