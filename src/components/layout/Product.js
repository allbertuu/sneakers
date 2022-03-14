import { useState } from 'react';

import img1_small from '../../assets/images/image-product-1-thumbnail.jpg';
import img1 from '../../assets/images/image-product-1.jpg';
import img2_small from '../../assets/images/image-product-2-thumbnail.jpg';
import img2 from '../../assets/images/image-product-2.jpg';
import img3_small from '../../assets/images/image-product-3-thumbnail.jpg';
import img3 from '../../assets/images/image-product-3.jpg';
import img4_small from '../../assets/images/image-product-4-thumbnail.jpg';
import img4 from '../../assets/images/image-product-4.jpg';

import '../../styles/Product.scss';

const Product = () => {

  const [mainImg, setMainImg] = useState(img1);

  const handleClick = (img) => {
    setMainImg(img);
  }

  return (
    <section className="l-product">
      <img id='mainImg' src={mainImg} alt="Imagem principal do produto" />
      <div className="product-images">
        <div onClick={(e) => handleClick(img1)} className="first">
          <img src={img1_small} alt="Imagem do produto" className="first" />
        </div>
        <div onClick={(e) => handleClick(img2)}>
          <img src={img2_small} alt="Imagem do produto" />
        </div>
        <div onClick={(e) => handleClick(img3)}>
          <img src={img3_small} alt="Imagem do produto" />
        </div>
        <div onClick={(e) => handleClick(img4)}>
          <img src={img4_small} alt="Imagem do produto" />
        </div>
      </div>
    </section>
  );
}

export default Product