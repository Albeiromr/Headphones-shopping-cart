import React from 'react';
import Proptypes from 'prop-types';
import './1000-1920px.style.scss';
import './500-1000px.style.scss';
import './0-500px.style.scss';

const Thumbnails = ({productSelected, changePicture,thumbnail,}) => {

    const firstPic = () => {
      // with this switch we change the big picture for the one that we choose from the this thumbnail
      switch (thumbnail[0]) {
        case productSelected.firstColor[0].img1:
          changePicture(productSelected.firstColor[0].img1);
          break;
        case productSelected.secondColor[0].img1:
          changePicture(productSelected.secondColor[0].img1);
          break;
        case productSelected.thirdColor[0].img1:
          changePicture(productSelected.thirdColor[0].img1);
          break;
        default:
      }
    };

    const secondPic = () => {
      // with this switch we change the big picture for the one that we choose from the this thumbnail
      switch (thumbnail[1]) {
        case productSelected.firstColor[1].img2:
          changePicture(productSelected.firstColor[1].img2);
          break;
        case productSelected.secondColor[1].img2:
          changePicture(productSelected.secondColor[1].img2);
          break;
        case productSelected.thirdColor[1].img2:
          changePicture(productSelected.thirdColor[1].img2);
          break;
        default:
      }
    };

    return (
        <div className='thumbnail'>

            <div onClick={firstPic} className='thumbnail__img1'>
                <img className='thumbnail__picture' src={thumbnail[0]} alt="Product"/>
            </div>

            <div onClick={secondPic} className='thumbnail__img2'>
                <img className='thumbnail__picture' src={thumbnail[1]} alt="Product"/>
            </div>

        </div>
    )
};

// component documentation

Thumbnails.propTypes = {
  productSelected: Proptypes.object.isRequired,
  changePicture: Proptypes.func.isRequired,
  thumbnail: Proptypes.array.isRequired,
};

export default Thumbnails;
