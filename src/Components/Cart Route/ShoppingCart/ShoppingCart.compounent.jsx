import React, {useState, useEffect} from 'react';
import Proptypes from "prop-types";
import './1000-1920px.style.scss';
import './500-1000px.style.scss';
import './0-500px.style.scss';
import MovableContainer from '../MovableContainer/MovableContainer.component';
import Steps from '../../Confirmation Route/Steps/Steps.compounent';
import ContinueShopping from '../../Confirmation Route/ContinueShopping/ContinueShopping.compounent';
import Cart from '../Cart/Cart.component';
import FormSquareBig from '../FormSquareBig/FormSquareBig.compounent';
import DescriptionBig from '../DescriptionBig/DescriptionBig.component';
import Scroll from '../Scroll/Scroll.component';
import SniperSquareBig from '../SniperSquareBig/SniperSquareBig.compounent';
import ContinueSquareBig from '../ContinueSquareBig/continueSquareBig.compounent';
import NoOrder from '../../Confirmation Route/NoOrders/NoOrders.compounent';



const ShoppingCart = ({shoppingCart, changeShoppingCart, setOrders, orders }) => {


    // this state is used to sume items in the desciption component
    const [sume, setSume] = useState(0);

    //let sume all the items prices
    const [total, setTotal] = useState(
        shoppingCart.map(item => item.price).reduce((a, b) =>  a + b, 0).toFixed(2)
        );
    // obtaining the taxes for the whole purchase
    const [taxes, setTaxes] = useState(0.00);
    // calculating the shipping cost
    const [shipping, setShipping] = useState(0.00);
    //getting the total purchase price
    const [purchase, setPurchase] = useState(0.00);
    


    useEffect(() => {
        let a = total * 7 / 100
        setTaxes(a.toFixed(2))
        ///////////////////////
        let b = total * 1.5 / 100
        setShipping(b.toFixed(2))
        //////////////////////
        let c = total * 108.5 / 100 
        setPurchase(c.toFixed(2))
    },[total,shoppingCart]);

    /////////////////////////////

    // this state is for write autonaticaly the card details on click
    const [write, setWrite] = useState(false)
    // this state is for showing the scroll indicator
    const [show, setShow] = useState(false)
    ////////////////////////////
    useEffect(() => {
        if (shoppingCart.length === 0) {
            setWrite(false)
        }
    },[shoppingCart]);
   /////////////////////////////
    useEffect(() => {
        if (shoppingCart.length > 4) {
            setShow(true)
        }else {
            setShow(false)
        }
    },[shoppingCart]);
    ///////////////////////////

    // this state is for conditionately show the elements in the formsquare compounent
    const [compounent, setCompounent] = useState(1)

    // this variabe is for conditional rendering
    let conditional = true
    
    // this state is for moving this container side to side
    const [translate, changeTranslate] = useState("0vw");

    // this state is for making the steps component interactive
    const [stepsCount, setStepsCount] = useState(0)

    ///////////////////////////////////////////////

    const handleLoad = () => {
      if(shoppingCart.length > 0){
        setStepsCount(1)
      } 
    }

    useEffect(() => {
      if(total < 2.00){
        setStepsCount(0)
      }
    }, [total])
  
 

  


    return (
      <section onLoad={handleLoad} className="shopping-cart">
        <ContinueShopping />

        {show ? <Scroll /> : null}

        <Steps 
        stepsCount={stepsCount}
        />
        
        {shoppingCart.length > 0 ? <DescriptionBig shoppingCart={shoppingCart} sume={sume} /> : null}

        

        {shoppingCart.length >= 1 || translate === '-100vw' ? 
        null
        : 
        <NoOrder 
        conditional={conditional}
        />}
      
        

        <MovableContainer
          shoppingCart={shoppingCart}
          changeShoppingCart={changeShoppingCart}
          sume={sume}
          setSume={setSume}
          setTotal={setTotal}
          total={total}
          taxes={taxes}
          shipping={shipping}
          purchase={purchase}
          setWrite={setWrite}
          write={write}
          setShow={setShow}
          compounent={compounent}
          setCompounent={setCompounent}
          setOrders={setOrders}
          orders={orders}
          translate={translate}
          changeTranslate={changeTranslate}
          setStepsCount={setStepsCount}
        />
        <Cart
          shoppingCart={shoppingCart}
          changeShoppingCart={changeShoppingCart}
          sume={sume}
          setSume={setSume}
          setTotal={setTotal}
          total={total}
          setShow={setShow}
          
        />

        {compounent === 1 ? (
          <FormSquareBig
            total={total}
            taxes={taxes}
            shipping={shipping}
            purchase={purchase}
            setWrite={setWrite}
            write={write}
            setCompounent={setCompounent}
            setOrders={setOrders}
            orders={orders}
            shoppingCart={shoppingCart}
            sume={sume}
            changeShoppingCart={changeShoppingCart}
            setStepsCount={setStepsCount}
          />
        ) : compounent === 2 ? (
          <SniperSquareBig />
        ) : compounent === 3 ? (
          <ContinueSquareBig 
          changeShoppingCart={changeShoppingCart}
          />
        ) : null}
        
      </section>
    );
};



// component documentation

ShoppingCart.propTypes = {
    shoppingCart: Proptypes.array.isRequired,
    changeShoppingCart: Proptypes.func.isRequired,
    setOrders: Proptypes.func.isRequired,
    orders: Proptypes.array.isRequired,
  };

export default ShoppingCart;