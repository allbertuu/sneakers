import iconCart from '../assets/images/icon-cart-white.svg';

import styles from '../styles/Button.module.scss';

function Button({ type }) {
  return (
    <>
      {type === 'addToCart' &&
        <button className={styles.addToCart}>
          <img src={iconCart} alt='Cart' />
          Add to cart
        </button>}
      {type === 'checkout' &&
        <button className={styles.checkout}>
          Checkout
        </button>}
    </>
  );
}

export default Button