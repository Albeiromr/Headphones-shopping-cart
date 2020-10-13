import React, {useState} from 'react';
import Proptypes from "prop-types";
import './1000-1920px.style.scss';
import './500-1000px.style.scss';
import './0-500px.style.scss';

const MovableContainer = () => {
  
  // this state is for moving this container side to side
  const [translate, changeTranslate] = useState('0vw');

    return (
        <div 
        className='movable-container'
        style={{'--translate': translate}}
        >

        </div>
        
    )
};

// component documentation

MovableContainer.propTypes = {
    
  };

export default MovableContainer;