import React from "react";
import Proptypes from "prop-types";
import "./1000-1920px.style.scss";
import "./500-1000px.style.scss";
import "./0-500px.style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";

const ContinueShopping = () => {
  return (
    <div className="continue-shopping">
      <FontAwesomeIcon
        icon={faLongArrowAltLeft}
        className="continue-shopping__back"
      />
      <p className="continue-shopping__text">Continue Shopping</p>
    </div>
  )
};

// component documentation

ContinueShopping.propTypes = {};

export default ContinueShopping;
