import { useState } from 'react';

import img1_small from '../../assets/images/image-product-1-thumbnail.jpg';
import img1 from '../../assets/images/image-product-1.jpg';
import img2_small from '../../assets/images/image-product-2-thumbnail.jpg';
import img2 from '../../assets/images/image-product-2.jpg';
import img3_small from '../../assets/images/image-product-3-thumbnail.jpg';
import img3 from '../../assets/images/image-product-3.jpg';
import img4_small from '../../assets/images/image-product-4-thumbnail.jpg';
import img4 from '../../assets/images/image-product-4.jpg';

import iconClose from '../../assets/images/icon-close-white.svg';

import styles from '../../styles/Product.module.scss';

const Product = () => {

  const [mainImg, setMainImg] = useState(img1);

  const changeImg = (img) => {
    setMainImg(img);
    // aplicar estilos de selecionado à imagem menor que foi selecionada
  }

  const openModal = (id) => {
    let modal = document.getElementById(id);
    if (typeof modal == undefined || modal === null) {
      return;
    } else {
      modal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    }
  }

  const closeModal = (id) => {
    let modal = document.getElementById(id);
    if (typeof modal == undefined || modal === null) {
      return;
    } else {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  }

  return (
    <>
      <section className={styles.l_product}>
        <img src={mainImg} alt="Imagem principal do produto" onClick={(e) => openModal('modalProduct')} />
        <div className={styles.product_images}>
          <div onClick={(e) => changeImg(img1)}>
            <img src={img1_small} alt="Imagem do produto" />
          </div>
          <div onClick={(e) => changeImg(img2)}>
            <img src={img2_small} alt="Imagem do produto" />
          </div>
          <div onClick={(e) => changeImg(img3)}>
            <img src={img3_small} alt="Imagem do produto" />
          </div>
          <div onClick={(e) => changeImg(img4)}>
            <img src={img4_small} alt="Imagem do produto" />
          </div>
        </div>
      </section>

      {/* Modal */}
      <div id="modalProduct" aria-hidden="true" className={styles.l_modal}>
        <section className={styles.l_product}>
          <button className="lg:-mb-4 text-right" onClick={(e) => closeModal('modalProduct')}>
            <img src={iconClose} className="inline-block w-6" alt='Button close' />
          </button>
          <div className="flex">
            {/* <button className="absolute">X</button> */}
            <img src={mainImg} alt="Imagem principal do produto" className='sm:rounded-2xl' />
            {/* <button className="absolute right-1/3">X</button> */}
          </div>
          <div className={styles.product_images}>
            <div onClick={(e) => changeImg(img1)}>
              <img src={img1_small} alt="Imagem do produto" />
            </div>
            <div onClick={(e) => changeImg(img2)}>
              <img src={img2_small} alt="Imagem do produto" />
            </div>
            <div onClick={(e) => changeImg(img3)}>
              <img src={img3_small} alt="Imagem do produto" />
            </div>
            <div onClick={(e) => changeImg(img4)}>
              <img src={img4_small} alt="Imagem do produto" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Product