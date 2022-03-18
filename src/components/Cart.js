import { useState, useEffect } from 'react';

import mainImg from '../assets/images/image-product-1-thumbnail.jpg';
import Checkout from './Checkout';

import styles from '../styles/Cart.module.scss';

function Cart({ price }) {

  const [products, setProducts] = useState([]);

  // fetch backend products added
  useEffect(() => {
    fetch('http://localhost:5000/products', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(json => setProducts(json))
      .catch((err) => console.log(err))
  }, []);

  return (
    <div className={styles.cartModal}>
      <div className="cart_header p-5 border-b border-b-slate-300">
        <b>Cart</b>
      </div>
      <div className={styles.cart_body}>
        <ol className={styles.cart_items}>
          {
            products.map((product, key) => (
              <li className={styles.item} key={product.id}>
                <div className={styles.id}>{key + 1}</div>
                <img src={mainImg} alt="Produto" />
                <div className={styles.info}>
                  <div>{product.name}</div>
                  <div>&#36;{price}.00 x {product.count} <b className="text-black">&#36;{price * product.count}.00</b></div>
                </div>
              </li>
            ))
          }
        </ol>
        <Checkout />
      </div>
    </div>
  );
}

export default Cart