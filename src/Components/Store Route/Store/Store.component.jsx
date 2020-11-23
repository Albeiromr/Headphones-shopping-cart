import React, {useState, useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';
import Proptypes from "prop-types";
import './1000-1920px.style.scss';
import './500-1000px.style.scss';
import './0-500px.style.scss';
import ProductContainer from '../ProductContainer/ProductContainer.component';
import BigPicture from '../BigPicture/BigPicture.component';
import Text from '../Text/Text.component';
import ButtonAdd from '../ButtonAdd/ButtonAdd.component';
import ButtonBuy from '../ButtonBuy/ButtonBuy.component';
import Price from '../Price/Price.component';
import Thumbnails from '../Thumbnails/Thumbnails.component';
import Balls from '../Balls/Balls.component';
import Loader from '../Loader/Loader.compounent';

const Store = ({Products, changeShoppingCart, shoppingCart, loadAnimation}) => {

    // this state is the bigest product image in the page
    const [picture, changePicture] = useState(Products[0].firstColor[0].img1)
    // this state is the product filtered when we click in the cards of the carrousel
    const [productSelected, changeProductSelected] = useState(Products[0])
    // this state is for the page to know the twho images in the two smallest squares
    const [thumbnail, changeThumbnail] = useState([productSelected.thumbnailfirstColor[0].img1, productSelected.thumbnailfirstColor[1].img2])
    // this state is for choosing the right product color to send to the shoppingCart
    // in order to prevent sending wrong colors to the shopping cart is nessesary to create first
    // a new object 
    const [itemToCart, addItemToCart] = useState({
      color: productSelected.colors.color1,
      image: productSelected.thumbnailfirstColor[0].img1,
      name: productSelected.reference,
      price: productSelected.price,

    });
    // the itemToCart changes every time there is a change in the following 
    // states picture, productSelected, thumbnail
    // for achieve that let´s use the following useEffect()
    useEffect(() => {
      switch (picture) {
        case productSelected.firstColor[0].img1:
          addItemToCart({
            color: productSelected.colors.color1,
            image: productSelected.thumbnailfirstColor[0].img1,
            name: productSelected.reference,
            price: productSelected.price,
            id: uuidv4(),
          });
          break;
        case productSelected.firstColor[1].img2:
          addItemToCart({
            color: productSelected.colors.color1,
            image: productSelected.thumbnailfirstColor[0].img1,
            name: productSelected.reference,
            price: productSelected.price,
            id: uuidv4(),
          });
          break;
        case productSelected.secondColor[0].img1:
          addItemToCart({
            color: productSelected.colors.color2,
            image: productSelected.thumbnailsecondColor[0].img1,
            name: productSelected.reference,
            price: productSelected.price,
            id: uuidv4(),
          });
          break;
        case productSelected.secondColor[1].img2:
          addItemToCart({
            color: productSelected.colors.color2,
            image: productSelected.thumbnailsecondColor[0].img1,
            name: productSelected.reference,
            price: productSelected.price,
            id: uuidv4(),
          });
          break;
        case productSelected.thirdColor[0].img1:
          addItemToCart({
            color: productSelected.colors.color3,
            image: productSelected.thumbnailthirdColor[0].img1,
            name: productSelected.reference,
            price: productSelected.price,
            id: uuidv4(),
          });
          break;
        case productSelected.thirdColor[1].img2:
          addItemToCart({
            color: productSelected.colors.color3,
            image: productSelected.thumbnailthirdColor[0].img1,
            name: productSelected.reference,
            price: productSelected.price,
            id: uuidv4(),
          });
          break;
        default:
      }
    }, [picture, productSelected, thumbnail]);

    // state for showing image or spiner while it loads
    const [view, setView] = useState(false)

    
    
    
    return (
        
        <main className='store'>

            {loadAnimation ? <Loader /> : null}
            
            
            <Text 
            productSelected={productSelected}
            />
            <BigPicture 
            picture={picture}
            Products={Products}
            view={view}
            setView={setView}
            />
            <Thumbnails 
            productSelected={productSelected}
            changePicture={changePicture}
            thumbnail={thumbnail}
            view={view}
            
            />
            <Balls 
            productSelected={productSelected}
            changePicture={changePicture}
            changeThumbnail={changeThumbnail}
            picture={picture}
            
            />
            <ButtonAdd
            changeShoppingCart={changeShoppingCart}
            shoppingCart={shoppingCart}
            itemToCart={itemToCart}
            />
            <ButtonBuy 
            itemToCart={itemToCart}
            changeShoppingCart={changeShoppingCart}
            />
            <Price 
            productSelected={productSelected}
            />
            <ProductContainer 
            Products={Products}
            productSelected={productSelected}
            changePicture={changePicture}
            changeProductSelected={changeProductSelected}
            changeThumbnail={changeThumbnail}
            />

        </main>
    )
};

// component documentation

Store.propTypes = {
    Products: Proptypes.array.isRequired,
    changeShoppingCart: Proptypes.func.isRequired,
    shoppingCart: Proptypes.array.isRequired,
    loadAnimation: Proptypes.bool.isRequired,
  };

export default Store;