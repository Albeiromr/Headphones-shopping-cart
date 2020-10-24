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
           disabled
           className='form-square-big__name'
           placeholder='Mike Daniels'

           />

          <input
           type="text"
           name='number'
           disabled
           className='form-square-big__number'
           placeholder='4578 3421 8910 3456'
           
           />

           <div className='form-square-big__security'>

              <input
              type="text"
              name='date'
              disabled
              className='form-square-big__date'
              placeholder='04/25'
              
              />

              <input
              type="text"
              name='security'
              disabled
              className='form-square-big__code'
              placeholder='837'
              
              />

           </div>

        </form>

        <div className='form-square-big__line'></div>

        <div className='form-square-big__cont-summary'>

        </div>

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