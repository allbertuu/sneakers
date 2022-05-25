import { useState } from 'react';
// hooks
import useToggle from '../../hooks/useToggle';
// scripts
import { productImagesList } from '../../assets/scripts/productImagesList';
// icons
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Product() {

  const [mainImg, setMainImg] = useState(productImagesList[0]);

  const [isOpen, toggle] = useToggle();

  function prev() {
    let firstImage = productImagesList[0];
    if(mainImg === firstImage) {
      return;
    }
    const currentImg = productImagesList.indexOf(mainImg)
    setMainImg(productImagesList[currentImg - 1])
  }

  function next() {
    let lastImage = productImagesList[productImagesList.length - 1];
    if(mainImg === lastImage) {
      return;
    }
    const currentImg = productImagesList.indexOf(mainImg)
    setMainImg(productImagesList[currentImg + 1])
  }

  return (
    <>
      <section className="c-product">
        <img src={mainImg} alt="Main product" onClick={toggle} />
        <div className="c-product__product-images">
          {productImagesList.map((srcProductImage, index) => (
            <div onClick={() => setMainImg(srcProductImage)} key={index}>
              <img src={srcProductImage} alt="Product view" className={srcProductImage === mainImg ? "selected" : undefined} />
            </div>
          ))}
        </div>
      </section>

      {isOpen &&
        <div aria-hidden="true" className="l-modal--product">
          <section className="c-modal--product">
            <button className="c-modal--product__close-icon" onClick={toggle}>
              <CloseIcon fontSize='large' />
            </button>
            <div className="c-modal--product__l-main-img">
              <button className="prev" onClick={prev}>
                <ArrowBackIosNewIcon />
              </button>
              <img src={mainImg} alt="Main product" />
              <button className="next" onClick={next}>
                <ArrowForwardIosIcon />
              </button>
            </div>
            <div className="c-modal--product__product-images">
              {productImagesList.map((srcProductImage, index) => (
                <div onClick={() => setMainImg(srcProductImage)} key={index}>
                  <img src={srcProductImage} alt="Product view" className={srcProductImage === mainImg ? "selected" : undefined} />
                </div>
              ))}
            </div>
          </section>
        </div>
      }
    </>
  );
}

export default Product