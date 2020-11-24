import React from "react";
import Proptypes from "prop-types";
import "./1000-1920px.style.scss";
import "./500-1000px.style.scss";
import "./0-500px.style.scss";

const ProductCard = ({ mainImg, clock, changePicture, name, Products,changeProductSelected, changeThumbnail, setView, setShow}) => {

  
  
  const selectProduct = (name) => {
    // when clicking the card in first place we filtered the array by reference
    // and as a result we get a filtered product that is an object
    let filteredProduct = Products.filter(Products => Products.reference === name)
    // then we put that filtered product in its corresponding state
    changeProductSelected(filteredProduct[0])
    // then we modify the picture state by the picture of the product we have chosen
    changePicture(filteredProduct[0].firstColor[0].img1)
    // as the last step we change the thumbnail state by the pictures of the filtered product
    changeThumbnail([filteredProduct[0].thumbnailfirstColor[0].img1, filteredProduct[0].thumbnailfirstColor[1].img2])
    // these 2 functions are only for showing the spiners in the bigpictures and thumbnails compounent
    setView(false)
    setShow(false)
    
  }

  return (
    <div onClick={() => {selectProduct(name)}} className="product-card" style={{ "--clock": clock }}>

      <img className="product-card__img" src={mainImg} alt="product" />
      


    </div>
  );
};


// component documentation

ProductCard.propTypes = {
  mainImg: Proptypes.string.isRequired,
  clock: Proptypes.number.isRequired,
  changePicture: Proptypes.func.isRequired,
  name: Proptypes.string.isRequired,
  Products: Proptypes.array.isRequired,
  changeProductSelected: Proptypes.func.isRequired,
  changeThumbnail: Proptypes.func.isRequired,
  setView: Proptypes.func.isRequired,
  setShow: Proptypes.func.isRequired,
};

export default ProductCard;
