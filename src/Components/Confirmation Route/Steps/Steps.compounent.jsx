import React, {useEffect, useState} from 'react';
import Proptypes from "prop-types";
import './1000-1920px.style.scss';
import './500-1000px.style.scss';
import './0-500px.style.scss';

const Steps = ({conditionalRendering, stepsCount}) => {

   const [varibleColor, setVariableColor] =useState(['#E4E4E4', '#E4E4E4'])

    useEffect(() => {
      switch(stepsCount){
        case 0:
          setVariableColor(['#E4E4E4', '#E4E4E4']);
          break;
        
        case 1:
          setVariableColor(['#3D8491', '#E4E4E4']);
          break;
        
        case 2:
          setVariableColor(['#3D8491', '#3D8491']);
          break;
          default:
        
      }
    },[stepsCount])


    return (
      <div className="steps">
        <div className="steps__line"></div>

        {conditionalRendering ? null : (
          <div className="steps__cont">
            <div  style={{'--first': varibleColor[0]}} className="steps__advance1"></div>
            <div  style={{'--second': varibleColor[1]}} className="steps__advance2"></div>
            
          </div>
        )}
      </div>
    );
};

// component documentation

Steps.propTypes = {
    conditionalRendering: Proptypes.bool.isRequired,
    stepsCount: Proptypes.number.isRequired,
};

export default Steps;