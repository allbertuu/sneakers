import { useState } from 'react';

import Count from '../Count';
import AddToCart from '../AddToCart';

import styles from '../../styles/Description.module.scss';

function Description({ price }) {

  const [count, setCount] = useState(0);

  return (
    <section className={styles.container}>
      <span className={styles.brand}>SNEAKER COMPANY</span>
      <h1>Fall Limited Edition Sneakers</h1>
      <p>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.
      </p>
      <div className={styles.l_price}>
        <div className={styles.l_with_discount}>
          <span className={styles.price}>&#36;{price}</span>
          <div className={styles.discount}>50%</div>
        </div>
        <span className={styles.no_discount}>&#36;250.00</span>
      </div>
      <div className={styles.l_buttons}>
        <Count count={count} setCount={setCount} />
        <AddToCart count={count} setCount={setCount} />
      </div>
    </section>
  );
}

export default Description