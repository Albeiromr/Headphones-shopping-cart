import React from 'react';
import Proptypes from "prop-types";
import './1000-1920px.style.scss';
import './500-1000px.style.scss';
import './0-500px.style.scss';

const Balls = ({changePicture, productSelected, changeThumbnail, picture, setView}) => {
    
    // these three variables are the hexadecimal color variables of each product
    let color1 = productSelected.swatches[0].swatch1
    let color2 = productSelected.swatches[0].swatch2
    let color3 = productSelected.swatches[0].swatch3



    const firstColor = () => {

        
        // this switch let us to change the color of the product no matter what thumbnail is selected
        // if is selected the first thumbnail it changes the color for that image, the second happends 
        // for the second thumbnail image
        switch(picture) {
            case productSelected.firstColor[0].img1:
                changePicture(productSelected.firstColor[0].img1);
            break;
            case productSelected.firstColor[1].img2:
                changePicture(productSelected.firstColor[1].img2);
            break;
            case productSelected.secondColor[0].img1:
                changePicture(productSelected.firstColor[0].img1);
            break;
            case productSelected.secondColor[1].img2:
                changePicture(productSelected.firstColor[1].img2);
            break;
            case productSelected.thirdColor[0].img1:
                changePicture(productSelected.firstColor[0].img1);
            break;
            case productSelected.thirdColor[1].img2:
                changePicture(productSelected.firstColor[1].img2);
            break;
            default:
        }
        // this function change the thumbnail images color as well
        changeThumbnail([productSelected.thumbnailfirstColor[0].img1, productSelected.thumbnailfirstColor[1].img2 ]) 
        
        if(picture === productSelected.firstColor[0].img1 || picture === productSelected.firstColor[0].img1)
        {return;} else {setView(false)};    
        
        
    }

    const secondColor = () => {

        // this switch let us to change the color of the product no matter what thumbnail is selected
        // if is selected the first thumbnail it changes the color for that image, the second happends 
        // for the second thumbnail image
        switch(picture) {
            case productSelected.firstColor[0].img1:
                changePicture(productSelected.secondColor[0].img1);
            break;
            case productSelected.firstColor[1].img2:
                changePicture(productSelected.secondColor[1].img2);
            break;
            case productSelected.secondColor[0].img1:
                changePicture(productSelected.secondColor[0].img1);
            break;
            case productSelected.secondColor[1].img2:
                changePicture(productSelected.secondColor[1].img2);
            break;
            case productSelected.thirdColor[0].img1:
                changePicture(productSelected.secondColor[0].img1);
            break;
            case productSelected.thirdColor[1].img2:
                changePicture(productSelected.secondColor[1].img2);
            break;
            default:
        }
        // this function change the thumbnail images color as well
        changeThumbnail([productSelected.thumbnailsecondColor[0].img1, productSelected.thumbnailsecondColor[1].img2 ])
        
        if(picture === productSelected.secondColor[0].img1 || picture === productSelected.secondColor[0].img1)
        {return;} else {setView(false)}; 
        
    }

    const thirdColor = () => {

        // this switch let us to change the color of the product no matter what thumbnail is selected
        // if is selected the first thumbnail it changes the color for that image, the second happends 
        // for the second thumbnail image
        switch(picture) {
            case productSelected.firstColor[0].img1:
                changePicture(productSelected.thirdColor[0].img1);
            break;
            case productSelected.firstColor[1].img2:
                changePicture(productSelected.thirdColor[1].img2);
            break;
            case productSelected.secondColor[0].img1:
                changePicture(productSelected.thirdColor[0].img1);
            break;
            case productSelected.secondColor[1].img2:
                changePicture(productSelected.thirdColor[1].img2);
            break;
            case productSelected.thirdColor[0].img1:
                changePicture(productSelected.thirdColor[0].img1);
            break;
            case productSelected.thirdColor[1].img2:
                changePicture(productSelected.thirdColor[1].img2);
            break;
            default:
        }
        // this function change the thumbnail images color as well
        changeThumbnail([productSelected.thumbnailthirdColor[0].img1, productSelected.thumbnailthirdColor[1].img2 ])

        if(picture === productSelected.thirdColor[0].img1 || picture === productSelected.thirdColor[0].img1)
        {return;} else {setView(false)}; 
        
    }

    return (

        <div className='balls'>

            <div onClick={firstColor} style={{'--color1': color1}} className='balls__color1'></div>
            <div onClick={secondColor} style={{'--color2': color2}} className='balls__color2'></div>
            <div onClick={thirdColor} style={{'--color3': color3}} className='balls__color3'></div>

        </div>
    )
};

// component documentation

Balls.propTypes = {
    changePicture: Proptypes.func.isRequired,
    productSelected: Proptypes.object.isRequired,
    changeThumbnail: Proptypes.func.isRequired,
    picture: Proptypes.string.isRequired,
    setview: Proptypes.func.isRequired,
};

export default Balls;