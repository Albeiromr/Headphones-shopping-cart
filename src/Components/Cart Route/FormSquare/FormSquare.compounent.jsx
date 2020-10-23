import React from 'react';
import Proptypes from "prop-types";
import './1000-1920px.style.scss';
import './500-1000px.style.scss';
import './0-500px.style.scss';
import {Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';
import {faCcVisa, faCcMastercard, faCcDiscover, faCcAmex } from '@fortawesome/free-brands-svg-icons';

const FormSquare = ({changeTranslate}) => {

  const handleClick = () => {
    changeTranslate('0vw')
  }

    return (
      <div className="form-square">

        <div className="form-square__cards">
          
          <FontAwesomeIcon
            icon={faCcVisa}
            className="form-square__card"
          />

          <FontAwesomeIcon
            icon={faCcMastercard}
            className="form-square__card"
          />

          <FontAwesomeIcon
            icon={faCcDiscover}
            className="form-square__card"
          />

          <FontAwesomeIcon
            icon={faCcAmex}
            className="form-square__card"
          />

        </div>

          

        <FontAwesomeIcon
          icon={faLongArrowAltLeft}
          className="form-square__back"
          onClick={handleClick}
        />
        <Link to="/confirmation">
          <div className="form-square__forward">
            <p className="form-square__text">Checkout</p>
          </div>
        </Link>
        <Link to="/confirmation">
          <div className="form-square__next">
            <p className="form-square__text2">Checkout</p>
          </div>
        </Link>
      </div>
    );
};

// component documentation

FormSquare.propTypes = {
  changeTranslate: Proptypes.func.isRequired
  };

export default FormSquare;