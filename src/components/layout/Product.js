import { useState } from 'react';
import useToggle from '../../hooks/useToggle';

import img1_small from '../../assets/images/image-product-1-thumbnail.jpg';
import img1 from '../../assets/images/image-product-1.jpg';
import img2_small from '../../assets/images/image-product-2-thumbnail.jpg';
import img2 from '../../assets/images/image-product-2.jpg';
import img3_small from '../../assets/images/image-product-3-thumbnail.jpg';
import img3 from '../../assets/images/image-product-3.jpg';
import img4_small from '../../assets/images/image-product-4-thumbnail.jpg';
import img4 from '../../assets/images/image-product-4.jpg';

import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// import iconClose from '../../assets/images/icon-close-white.svg';

import styles from '../../styles/Product.module.scss';

function Product() {

  const [mainImg, setMainImg] = useState(img1);

  function handleImg(img) {
    setMainImg(img);
    // aplicar estilos de selecionado à imagem menor que foi selecionada
  }

  const [isOpen, toggle] = useToggle();

  function setSelected(img) {
    if (img === mainImg) {
      return styles.selected;
    }
    else {
      return undefined;
    }
  }

  return (
    <>
      <section className={styles.container}>
        <img className={styles.main_img} src={mainImg} alt="Main product" onClick={(e) => toggle()} />
        <div className={styles.l_product_images}>
          <div onClick={(e) => handleImg(img1)}>
            <img src={img1_small} alt="Product" className={setSelected(img1)} />
          </div>
          <div onClick={(e) => handleImg(img2)}>
            <img src={img2_small} alt="Product" className={setSelected(img2)} />
          </div>
          <div onClick={(e) => handleImg(img3)}>
            <img src={img3_small} alt="Product" className={setSelected(img3)} />
          </div>
          <div onClick={(e) => handleImg(img4)}>
            <img src={img4_small} alt="Product" className={setSelected(img4)} />
          </div>
        </div>
      </section>

      {isOpen &&
        <div aria-hidden="true" className={styles.l_modal}>
          <section className={styles.container_modal}>
            <button className="lg:-mb-4 text-right" onClick={(e) => toggle()}>
              <CloseIcon fontSize='large' />
            </button>
            <div className={styles.l_main_img}>
              <button className={styles.prev}>
                <ArrowBackIosNewIcon />
              </button>
              <img className={styles.main_img} src={mainImg} alt="Main product" />
              <button className={styles.next}>
                <ArrowForwardIosIcon />
              </button>
            </div>
            <div className={styles.l_product_images_modal}>
              <div onClick={(e) => handleImg(img1)}>
                <img src={img1_small} alt="Product" className={setSelected(img1)} />
              </div>
              <div onClick={(e) => handleImg(img2)}>
                <img src={img2_small} alt="Product" className={setSelected(img2)} />
              </div>
              <div onClick={(e) => handleImg(img3)}>
                <img src={img3_small} alt="Product" className={setSelected(img3)} />
              </div>
              <div onClick={(e) => handleImg(img4)}>
                <img src={img4_small} alt="Product" className={setSelected(img4)} />
              </div>
            </div>
          </section>
        </div>
      }
    </>
  );
}

export default Product