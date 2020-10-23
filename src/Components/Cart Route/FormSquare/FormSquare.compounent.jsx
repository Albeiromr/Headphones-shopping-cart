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

        <form className='form-square__form'>

          <input
            type="text"
            name='name'
            className='form-square__name'
            placeholder='test'

            />

            <input
            type="text"
            name='number'
            className='form-square__number'
            placeholder='test'
            
            />

            <div className='form-square__security'>

                <input
                type="text"
                name='date'
                className='form-square__date'
                placeholder='test'
                
                />

                <input
                type="text"
                name='security'
                className='form-square__code'
                placeholder='test'
                
                />

            </div>
        </form>

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