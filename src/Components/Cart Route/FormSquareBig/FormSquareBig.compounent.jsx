import React from 'react';
import Proptypes from "prop-types";
import './1000-1920px.style.scss';
import './500-1000px.style.scss';
import './0-500px.style.scss';
import {Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCcVisa, faCcMastercard, faCcDiscover, faCcAmex } from '@fortawesome/free-brands-svg-icons';

const FormSquareBig = () => {

  

    return (
      <div className="form-square-big">

        <div className='form-square-big__cards'>

            <FontAwesomeIcon
                icon={faCcVisa}
                className="form-square-big__card"
              />

            <FontAwesomeIcon
              icon={faCcMastercard}
              className="form-square-big__card"
            />

            <FontAwesomeIcon
              icon={faCcDiscover}
              className="form-square-big__card"
            />

            <FontAwesomeIcon
              icon={faCcAmex}
              className="form-square-big__card"
            />
            
        </div>
        
        <form className='form-square-big__form'>

          <input
           type="text"
           name='name'
           className='form-square-big__name'
           placeholder='test'

           />

          <input
           type="text"
           name='number'
           className='form-square-big__number'
           placeholder='test'
           
           />

           <div className='form-square-big__security'>

              <input
              type="text"
              name='date'
              className='form-square-big__date'
              placeholder='test'
              
              />

              <input
              type="text"
              name='security'
              className='form-square-big__code'
              placeholder='test'
              
              />

           </div>

        </form>



        <Link to="/confirmation">
          <div className="form-square-big__forward">
            <p className="form-square-big__text">Checkout</p>

            
          </div>
        </Link>
        
      </div>
    )
};

// component documentation

FormSquareBig.propTypes = {
  };

export default FormSquareBig;