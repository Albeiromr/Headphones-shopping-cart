import React from "react";
import Proptypes from "prop-types";
import "./1000-1920px.style.scss";
import "./500-1000px.style.scss";
import "./0-500px.style.scss";
import Sniper from '../Sniper/Sniper.compounent';

const SniperSquare = () => {

    return (

        <div className='sniper-square'>
            <Sniper />
        </div>
    )
};


SniperSquare.propTypes = {
    
};

export default SniperSquare;