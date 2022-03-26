import { useProducts } from '../hooks/useProducts';

import iconCart from '../assets/images/icon-cart-white.svg';

import styles from '../styles/AddToCart.module.scss';

function AddToCart({count, setCount}) {

  const { products } = useProducts();

  function addToCart(productToAdd = '') {

    // don't add nonexistent product
    if (count === 0) {
      return;
    }
    // update existent product (if have), if not: changes only the count
    let productToUpdate = products.findIndex((product) => {
      return product.name === productToAdd;
    });
    if (productToUpdate === -1) {
      products.push({name: productToAdd, count: count});
    }
    else {
      products[productToUpdate].count += count;
    }
    // reset count
    setCount(0);
    // um modal de adicionado com sucesso
  }

  return (
    <button className={styles.addToCart} onClick={(e) => addToCart("Fall Limited Edition Sneakers")}>
      <img src={iconCart} alt='Cart' />
      Add to cart
    </button>
  );
}

export default AddToCart
