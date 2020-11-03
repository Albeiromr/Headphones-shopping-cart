import React from 'react';
import {Link} from 'react-router-dom';
import Proptypes from "prop-types";
import "./1000-1920px.style.scss";
import "./500-1000px.style.scss";
import "./0-500px.style.scss";

const NoOrder = ({conditional}) => {

    return (
      <div className="no-order">
        {conditional ? (
          <p className="no-order__text">Your cart is empty</p>
        ) : (
          <p className="no-order__text">You have no orders yet</p>
        )}

        <Link to="/">
          <button className="no-order__button">Go To Store</button>
        </Link>
      </div>
    );
};

NoOrder.propTypes = {
   conditional: Proptypes.bool,
};

export default NoOrder;