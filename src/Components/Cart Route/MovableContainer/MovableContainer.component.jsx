import React, {useState} from 'react';
import Proptypes from "prop-types";
import './1000-1920px.style.scss';
import './500-1000px.style.scss';
import './0-500px.style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight} from '@fortawesome/free-solid-svg-icons';
import FormSquare from '../FormSquare/FormSquare.compounent';


const MovableContainer = () => {
  
  // this state is for moving this container side to side
  const [translate, changeTranslate] = useState('0vw');

    const handleClick = () => {
      changeTranslate('-100vw')
    }

    return (
        <div 
        className='movable-container'
        style={{'--translate': translate}}
        >

          <div 
          className='movable-container__forward'
          onClick={handleClick}
          >

            <p className='movable-container__text'>
              Checkout
            </p>

            <FontAwesomeIcon
             icon={faLongArrowAltRight}
             className='movable-container__arrow'
             onClick={handleClick}
             />

          </div>


          <FormSquare 
          changeTranslate={changeTranslate}
          />

        </div>
        
    )
};

// component documentation

MovableContainer.propTypes = {
    
  };

export default MovableContainer;