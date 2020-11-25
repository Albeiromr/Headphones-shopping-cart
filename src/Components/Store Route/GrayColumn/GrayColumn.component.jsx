import React from "react";
import Proptypes from "prop-types";
import "./1000-1920px.style.scss";
import "./500-1000px.style.scss";
import "./0-500px.style.scss";

const GrayColumn = ({conditionalwater}) => (
  <div className="Gray-Column">
    {conditionalwater ? <p className="Gray-Column__water-mark">Albeiro Marín. GitHub @Albeiromr</p> : null }
    
  </div>
);

// component documentation

GrayColumn.propTypes = {
  conditionalwater: Proptypes.bool,
};

export default GrayColumn;
