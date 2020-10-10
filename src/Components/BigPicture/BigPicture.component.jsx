import React from "react";
import Proptypes from "prop-types";
import "./1000-1920px.style.scss";
import "./500-1000px.style.scss";
import "./0-500px.style.scss";

const BigPicture = ({ picture }) => {
  return (
    <div className="big-picture">
      <img className="big-picture__img" src={picture} alt="Product" />
    </div>
  );
};


// component documentation

BigPicture.propTypes = {
  picture: Proptypes.string.isRequired,
};

export default BigPicture;
