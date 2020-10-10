import React, {useState} from 'react';
import Proptypes from "prop-types";
import './1000-1920px.style.scss';
import './500-1000px.style.scss';
import './0-500px.style.scss';
import ProductContainer from '../ProductContainer/ProductContainer.component';
import BigPicture from '../BigPicture/BigPicture.component';
import Text from '../Text/Text.component';
import ButtonAdd from '../ButtonAdd/Buttons.component';
import ButtonBuy from '../ButtonBuy/ButtonBuy.component';
import Price from '../Price/Price.component';
import Thumbnails from '../Thumbnails/Thumbnails.component';
import Balls from '../Balls/Balls.component';

const Store = ({Products}) => {

    // this state is the bigest product image in the page
    const [picture, changePicture] = useState(Products[0].firstColor[0].img1)
    // this state is the product filtered when we click in the cards of the carrousel
    const [productSelected, changeProductSelected] = useState(Products[0])
    // this state is for the page to know the twho images in the two smallest squares
    const [thumbnail, changeThumbnail] = useState([productSelected.firstColor[0].img1, productSelected.firstColor[1].img2])
    
    
    
    return (
        
        <main className='store'>
            <Text 
            productSelected={productSelected}
            />
            <BigPicture 
            picture={picture}
            Products={Products}
            />
            <Thumbnails 
            productSelected={productSelected}
            changePicture={changePicture}
            thumbnail={thumbnail}
            
            />
            <Balls 
            productSelected={productSelected}
            changePicture={changePicture}
            changeThumbnail={changeThumbnail}
            picture={picture}
            
            />
            <ButtonAdd 
            />
            <ButtonBuy 
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
  };

export default Store;