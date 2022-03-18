import iconCart from '../assets/images/icon-cart-white.svg';

import styles from '../styles/AddToCart.module.scss';

function AddToCart() {
  return (
    <button className={styles.addToCart}>
      <img src={iconCart} alt='Cart' />
      Add to cart
    </button>
  );
}

export default AddToCart