import React from "react";
import Proptypes from "prop-types";
import "./1000-1920px.style.scss";
import "./500-1000px.style.scss";
import "./0-500px.style.scss";
import FormSquare from "../FormSquare/FormSquare.compounent";
import CartProduct from "../CartProduct/CartProduct.compounent";
import Description from "../Description/Description.compounent";
import Summary from "../Summary/Summary.component";
import CcDEtails from "../CcDetails/CcDetails.component";
import SniperSquare from "../SniperSquare/SniperSquare.compounent";
import ContinueSquare from '../ContinueSquare/ContinueSquare.compounent';


const MovableContainer = ({
  shoppingCart,
  changeShoppingCart,
  sume,
  setSume,
  setTotal,
  total,
  taxes,
  shipping,
  purchase,
  setWrite,
  write,
  setShow,
  compounent,
  setCompounent,
  setOrders,
  orders,
  translate,
  changeTranslate,
  setStepsCount,

}) => {

  const handleClick = () => {
    changeTranslate("-100vw");
    setShow(false);
  };

  const handleScroll = () => {
    setShow(false);
  };
  

  return (
    <div className="movable-container" style={{ "--translate": translate }}>

      {shoppingCart.length > 0 ? <Description shoppingCart={shoppingCart} sume={sume} /> : null}

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
        ) : 
        null }
      </div>

      <CcDEtails />

      {shoppingCart < 1 ? null : (
        <div className="movable-container__forward" onClick={handleClick}>
          <p className="movable-container__text">Checkout</p>
        </div>
      )}

      {compounent === 1 ? (
        <FormSquare
          total={total}
          taxes={taxes}
          shipping={shipping}
          purchase={purchase}
          setWrite={setWrite}
          write={write}
          setCompounent={setCompounent}
          changeTranslate={changeTranslate}
          setShow={setShow}
          shoppingCart={shoppingCart}
          setOrders={setOrders}
          orders={orders}
          sume={sume}
          changeShoppingCart={changeShoppingCart}
          setStepsCount={setStepsCount}
        />
      ) : compounent === 2 ? (
        <SniperSquare />
      ) : compounent === 3 ? (
        <ContinueSquare
        changeShoppingCart={changeShoppingCart}
        />
      ) : null}

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
  setOrders: Proptypes.func.isRequired,
  orders: Proptypes.array.isRequired,
  translate: Proptypes.string.isRequired,
  changeTranslate: Proptypes.func.isRequired,
  setStepsCount: Proptypes.number.isRequired,
};

export default MovableContainer;
