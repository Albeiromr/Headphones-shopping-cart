import React, {useState} from 'react';
import Proptypes from "prop-types";
import './1000-1920px.style.scss';
import './500-1000px.style.scss';
import './0-500px.style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import ProductCard from '../ProductCard/ProductCard.component';

const ProductContainer = ({Products, changePicture, changeProductSelected,changeThumbnail}) => {   

  
   // this state is a counter that increases or decreases to move the carrousel cards
   const [clock, changeClock] = useState(0);
   // this state is used for adding new products to the right of the carrousel when clicking 
   // the  carrousel right  arrow
   const [arrayIndex, changeArrayIndex] = useState(0);
   // this state is used for hide the letft arrow if this arrow is not no needed
   const [hidden, modifyHidden] = useState(false);

   
   let init = clock;
   let index = arrayIndex;

   const handleRightArrow = () => {
     init++;
     index++;
     changeArrayIndex(index);
     changeClock(init);
     if (clock >= 0) {
       Products.push(Products[arrayIndex]);
     }
     if (clock >= 0) {
       modifyHidden(true);
     }
   };

   const handleLeftArrow = () => {
     if (clock > 0) {
       init--;
       changeArrayIndex(index);
       changeClock(init);
     }
     if (clock === 1) {
       modifyHidden(false);
     }
   }; 

    return (
      
      <div className="product-container">
            <FontAwesomeIcon
            onClick={handleRightArrow}
            icon={faChevronRight}
            className="product-container__rightArrow"
            />

            <FontAwesomeIcon
            onClick={handleLeftArrow}
            style={hidden ? { "--hidden": "block" } : { "--hidden": "none" }}
            icon={faChevronLeft}
            className="product-container__leftArrow"
            />

            <div className="product-container__subcontainer">
                {Products.map((Product) => (
                    <ProductCard
                    key={Product.reference}
                    name={Product.reference}
                    mainImg={Product.thumbnailfirstColor[0].img1}
                    secondImg={Product.thumbnailfirstColor[1].img2}
                    handleRightArrow={handleRightArrow}
                    handleLeftArrow={handleLeftArrow}
                    changePicture={changePicture}
                    changeProductSelected={changeProductSelected}
                    clock={clock}
                    Products={Products}
                    changeThumbnail={changeThumbnail}
                    
                    />
                ))}
            </div>
      </div>
    );
};

// component documentation

ProductContainer.propTypes = {
  Products: Proptypes.array.isRequired,
  changePicture: Proptypes.func.isRequired,
  changeProductSelected: Proptypes.func.isRequired,
};

export default ProductContainer;