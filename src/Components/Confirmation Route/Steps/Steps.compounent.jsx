import React from 'react';
import Proptypes from "prop-types";
import './1000-1920px.style.scss';
import './500-1000px.style.scss';
import './0-500px.style.scss';

const Steps = () => {

    return (
        <div className='steps'>
            <div className='steps__line'></div>
                <div className='steps__cont'>
                    <div className='steps__advance1'></div>
                    <div className='steps__advance2'></div>
                    <div className='steps__advance3'></div>
                </div>
        </div>
    )
};

// component documentation

Steps.propTypes = {
    
};

export default Steps;