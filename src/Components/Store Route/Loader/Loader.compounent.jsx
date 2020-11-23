import React from 'react';
import Proptypes from "prop-types";
import "./1000-1920px.style.scss";
import "./500-1000px.style.scss";
import "./0-500px.style.scss";
import animation from '../../../Assets/Img/Logo/animation.png'


const Loader = () => {

    return (

        <div className='loader'>

            <img className='loader__img' src={animation} alt="logotype"/>

        </div>
    )

}

// component documentation

Loader.propTypes = {
    
  };

export default Loader;

