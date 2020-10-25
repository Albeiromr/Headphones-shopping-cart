import React, { useState } from "react";
import Proptypes from "prop-types";
import "./1000-1920px.style.scss";
import "./500-1000px.style.scss";
import "./0-500px.style.scss";
import {Link } from 'react-router-dom';
import FormSquare from "../FormSquare/FormSquare.compounent";
import CartProduct from "../CartProduct/CartProduct.compounent";
import Description from "../Description/Description.compounent";
import Summary from "../Summary/Summary.component";
import CcDEtails from '../CcDetails/CcDetails.component';
import SniperSquare from '../SniperSquare/SniperSquare.compounent';

const MovableContainer = ({shoppingCart, changeShoppingCart, sume, setSume,setTotal,
   total, taxes, shipping, purchase, setWrite, write, setShow, compounent, setCompounent}) => {
  // this state is for moving this container side to side
  const [translate, changeTranslate] = useState("0vw");

  const handleClick = () => {
    changeTranslate("-100vw");
    setShow(false)
  };

  const handleScroll = () => {
    setShow(false)
  }

  

  return (
    <div className="movable-container" style={{ "--translate": translate }}>

      <Description shoppingCart={shoppingCart} sume={sume} />
      {shoppingCart.length > 0 ? (
        <Summary
          total={total}
          taxes={taxes}
          shipping={shipping}
          purchase={purchase}
        />
      ) : null}

      <div onScroll={handleScroll} className="movable-container__cart">
        {shoppingCart.length >= 1 ? (
          shoppingCart.map((cartProduct) => (
            <CartProduct
              key={cartProduct.id}
              cartProduct={cartProduct}
              shoppingCart={shoppingCart}
              changeShoppingCart={changeShoppingCart}
              sume={sume}
              setSume={setSume}
              setTotal={setTotal}
              total={total}
            />
          ))
        ) : (
          <div>
            <p className="movable-container__empty">Your cart is empty</p>
            <Link to='./'>
              <button className="movable-container__button">Add products</button>
            </Link>
          </div>
        )}
      </div>

      <CcDEtails />

      {shoppingCart < 1 ? null : (
        <div className="movable-container__forward" onClick={handleClick}>
          <p className="movable-container__text">Checkout</p>
        </div>
      )}

      {compounent === 1 ?
        <FormSquare
        changeTranslate={changeTranslate}
        total={total}
        taxes={taxes}
        shipping={shipping}
        purchase={purchase}
        setWrite={setWrite}
        write={write}
        setCompounent={setCompounent}
        setShow={setShow}
      /> :
      <SniperSquare />
    }
      
    </div>
  );
};

// component documentation

MovableContainer.propTypes = {
  shoppingCart: Proptypes.object.isRequired,
  changeShoppingCart: Proptypes.func.isRequired,
  sume: Proptypes.number.isRequired,
  setSume: Proptypes.func.isRequired,
  setTotal: Proptypes.func.isRequired,
  total: Proptypes.number.isRequired,
  taxes: Proptypes.number.isRequired,
  shipping: Proptypes.number.isRequired,
  purchase: Proptypes.number.isRequired,
  write: Proptypes.bool.isRequired,
  setWrite: Proptypes.func.isRequired,
  setShow: Proptypes.func.isRequired,
  compounent: Proptypes.number.isRequired,
  setCompounent: Proptypes.func.isRequired,
  show: Proptypes.bool.isRequired,

};

export default MovableContainer;
