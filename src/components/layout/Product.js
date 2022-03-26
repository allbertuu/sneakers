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

import iconClose from '../../assets/images/icon-close-white.svg';

import styles from '../../styles/Product.module.scss';

function Product() {

  const [mainImg, setMainImg] = useState(img1);

  function handleImg(img) {
    setMainImg(img);
    // aplicar estilos de selecionado à imagem menor que foi selecionada
  }

  const [isOpen, toggle] = useToggle();

  return (
    <>
      <section className={styles.l_product}>
        <img src={mainImg} alt="Main product" onClick={(e) => toggle()} />
        <div className={styles.product_images}>
          <div onClick={(e) => handleImg(img1)}>
            <img src={img1_small} alt="Product" className={img1 === mainImg ? styles.selected : false} />
          </div>
          <div onClick={(e) => handleImg(img2)}>
            <img src={img2_small} alt="Product" className={img2 === mainImg ? styles.selected : false} />
          </div>
          <div onClick={(e) => handleImg(img3)}>
            <img src={img3_small} alt="Product" className={img3 === mainImg ? styles.selected : false} />
          </div>
          <div onClick={(e) => handleImg(img4)}>
            <img src={img4_small} alt="Product" className={img4 === mainImg ? styles.selected : false} />
          </div>
        </div>
      </section>

      {isOpen &&
        <div aria-hidden="true" className={styles.l_modal}>
          <section className={styles.l_product}>
            <button className="lg:-mb-4 text-right" onClick={(e) => toggle()}>
              <img src={iconClose} className="inline-block w-6" alt='Button close' />
            </button>
            <div className="flex">
              {/* <button className="absolute">X</button> */}
              <img src={mainImg} alt="Main product" className='sm:rounded-2xl' />
              {/* <button className="absolute right-1/3">X</button> */}
            </div>
            <div className={styles.product_images}>
              <div onClick={(e) => handleImg(img1)}>
                <img src={img1_small} alt="Product" />
              </div>
              <div onClick={(e) => handleImg(img2)}>
                <img src={img2_small} alt="Product" />
              </div>
              <div onClick={(e) => handleImg(img3)}>
                <img src={img3_small} alt="Product" />
              </div>
              <div onClick={(e) => handleImg(img4)}>
                <img src={img4_small} alt="Product" />
              </div>
            </div>
          </section>
        </div>
      }
    </>
  );
}

export default Product