import { useState } from 'react';

import Count from '../Count';
import AddToCart from '../AddToCart';

import styles from '../../styles/Description.module.scss';

function Description({ price }) {

  const [count, setCount] = useState(0);

  return (
    <section className={styles.l_description}>
      <p className={styles.brand}>SNEAKERS COMPANY</p>
      <h1 className={styles.title}>Fall Limited Edition Sneakers</h1>
      <p className={styles.text}>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.
      </p>
      <div className={styles.l_price}>
        <div className={styles.with_discount}>
          <p>&#36;{price}</p>
          <div className={styles.discount}>50%</div>
        </div>
        <p className={styles.no_discount}>&#36;250.00</p>
      </div>
      <div className={styles.l_buttons}>
        <Count count={count} setCount={setCount} />
        <AddToCart count={count} />
      </div>
    </section>
  );
}

export default Description