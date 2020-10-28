import React from 'react';
import Proptypes from "prop-types";
import './1000-1920px.style.scss';
import './500-1000px.style.scss';
import './0-500px.style.scss';

const Steps = ({conditionalRendering}) => {

    return (
      <div className="steps">
        <div className="steps__line"></div>

        {conditionalRendering ? null : (
          <div className="steps__cont">
            <div className="steps__advance1"></div>
            <div className="steps__advance2"></div>
            
          </div>
        )}
      </div>
    );
};

// component documentation

Steps.propTypes = {
    conditionalRendering: Proptypes.bool.isRequired,
};

export default Steps;