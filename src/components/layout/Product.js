import { useState } from 'react';
import useToggle from '../../hooks/useToggle';

//scripts
import { productImagesList } from '../../assets/scripts/productImagesList';
//icons
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
//styles
import styles from '../../styles/Product.module.scss';

function Product() {

  const [mainImg, setMainImg] = useState(productImagesList[0]);

  const [isOpen, toggle] = useToggle();

  function setSelectedImg(img) {
    return img === mainImg ? styles.selected : undefined;
  }

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
      <section className={styles.container}>
        <img className={styles.main_img} src={mainImg} alt="Main product" onClick={() => toggle()} />
        <div className={styles.l_product_images}>
          {productImagesList.map((srcProductImage, index) => (
            <div onClick={() => setMainImg(srcProductImage)} key={index}>
              <img src={srcProductImage} alt="Product view" className={setSelectedImg(srcProductImage)} />
            </div>
          ))}
        </div>
      </section>

      {isOpen &&
        <div aria-hidden="true" className={styles.l_modal}>
          <section className={styles.container_modal}>
            <button className="lg:-mb-4 text-right" onClick={() => toggle()}>
              <CloseIcon fontSize='large' />
            </button>
            <div className={styles.l_main_img}>
              <button className={styles.prev} onClick={() => prev()}>
                <ArrowBackIosNewIcon />
              </button>
              <img className={styles.main_img} src={mainImg} alt="Main product" />
              <button className={styles.next} onClick={() => next()}>
                <ArrowForwardIosIcon />
              </button>
            </div>
            <div className={styles.l_product_images_modal}>
              {productImagesList.map((srcProductImage, index) => (
                <div onClick={() => setMainImg(srcProductImage)} key={index}>
                  <img src={srcProductImage} alt="Product view" className={setSelectedImg(srcProductImage)} />
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