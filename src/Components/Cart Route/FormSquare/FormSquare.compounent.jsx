import React from 'react';
import Proptypes from "prop-types";
import './1000-1920px.style.scss';
import './500-1000px.style.scss';
import './0-500px.style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltLeft, faLongArrowAltRight} from '@fortawesome/free-solid-svg-icons';

const FormSquare = ({changeTranslate}) => {

  const handleClick = () => {
    changeTranslate('0vw')
  }

    return (
        <div className='form-square'>

            <FontAwesomeIcon
             icon={faLongArrowAltLeft}
             className='form-square__back'
             onClick={handleClick}
             />

             <div className='form-square__forward'>

                <p className='form-square__text'>
                  Checkout
                </p>

                <FontAwesomeIcon
                icon={faLongArrowAltRight}
                className='form-square__arrow'
                onClick={handleClick}
                />

             </div>

        </div>
    )
};

// component documentation

FormSquare.propTypes = {
  changeTranslate: Proptypes.func.isRequired
  };

export default FormSquare;