import { useProducts } from '../hooks/useProducts';

import iconCart from '../assets/images/icon-cart-white.svg';

import styles from '../styles/AddToCart.module.scss';

function AddToCart({count, setCount}) {

  const { products } = useProducts()

  function addToCart() {
    if (count === 0) {
      return;
    }
    products.push({name: "Fall Limited Edition Sneakers", count: count});
    // se o produto tem o mesmo nome, altera somente a contagem do mesmo
    setCount(0);
    // um modal de adicionado com sucesso
  }

  return (
    <button className={styles.addToCart} onClick={(e) => addToCart()}>
      <img src={iconCart} alt='Cart' />
      Add to cart
    </button>
  );
}

export default AddToCart
