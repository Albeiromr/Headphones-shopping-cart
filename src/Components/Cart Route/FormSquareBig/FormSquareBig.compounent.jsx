import React from 'react';
import Proptypes from "prop-types";
import './1000-1920px.style.scss';
import './500-1000px.style.scss';
import './0-500px.style.scss';
import {Link } from 'react-router-dom';

const FormSquareBig = () => {

  

    return (
      <div className="form-square-big">
        
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