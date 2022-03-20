import { useProducts } from '../hooks/useProducts';

import iconCart from '../assets/images/icon-cart-white.svg';

import styles from '../styles/AddToCart.module.scss';

function AddToCart({count}) {

  const { products } = useProducts()

  function createNewProduct() {
    products.push({name: "Fall Limited Edition Sneakers", count: count});
  }

  return (
    <button className={styles.addToCart} onClick={(e) => createNewProduct()}>
      <img src={iconCart} alt='Cart' />
      Add to cart
    </button>
  );
}

export default AddToCart