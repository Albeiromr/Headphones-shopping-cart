import React from "react";
import Proptypes from "prop-types";
import "./1000-1920px.style.scss";
import "./500-1000px.style.scss";
import "./0-500px.style.scss";

const Text = ({ productSelected }) => {

  return (
    <section className="text">
      <h1 className="text__tittle">{productSelected.reference}</h1>

      <p className="text__description">{productSelected.description}</p>

      <div className="text__linea"></div>
    </section>
  );
};

// component documentation

Text.propTypes = {
    productSelected: Proptypes.object.isRequired,
  };

export default Text;
