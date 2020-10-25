import React from "react";
import Proptypes from "prop-types";
import "./1000-1920px.style.scss";
import "./500-1000px.style.scss";
import "./0-500px.style.scss";
import Sniper from '../Sniper/Sniper.compounent';

const SniperSquareBig = () => {

    return (

        <div className='sniper-square-big'>
            <Sniper />

            <p className='sniper-square-big__text'>
            We are verifying your payment
            </p>
        </div>
    )
};


SniperSquareBig.propTypes = {
    
};

export default SniperSquareBig;
