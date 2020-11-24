import React, {useEffect} from "react";
import Proptypes from "prop-types";
import "./1000-1920px.style.scss";
import "./500-1000px.style.scss";
import "./0-500px.style.scss";

const BigPicture = ({ picture, view , setView}) => {

 

  const handleLoad = () => {
    setTimeout(() => {
      setView(true)
    }, 200)
  }

  



  return (
    <div className="big-picture">

      <img className="big-picture__img-signal" src={picture} alt="Product" onLoad={handleLoad} /> 

      {view ? <img className="big-picture__img" src={picture} alt="Product" /> :

      <div class="sk-circle">
      <div class="sk-circle1 sk-child"></div>
      <div class="sk-circle2 sk-child"></div>
      <div class="sk-circle3 sk-child"></div>
      <div class="sk-circle4 sk-child"></div>
      <div class="sk-circle5 sk-child"></div>
      <div class="sk-circle6 sk-child"></div>
      <div class="sk-circle7 sk-child"></div>
      <div class="sk-circle8 sk-child"></div>
      <div class="sk-circle9 sk-child"></div>
      <div class="sk-circle10 sk-child"></div>
      <div class="sk-circle11 sk-child"></div>
      <div class="sk-circle12 sk-child"></div>
    </div>

      }


    
    
    </div>
  );
};


// component documentation

BigPicture.propTypes = {
  picture: Proptypes.string.isRequired,
};

export default BigPicture;
