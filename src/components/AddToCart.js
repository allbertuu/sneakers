import { useProducts } from '../hooks/useProducts';

import iconCart from '../assets/images/icon-cart-white.svg';

import styles from '../styles/AddToCart.module.scss';

function AddToCart({count, setCount}) {

  const { products } = useProducts();

  function addToCart(productToAdd) {
    if (count === 0) {
      return;
    }
    
    let productToUpdate = products.findIndex((product) => {
      return product.name === productToAdd;
    });
    if (productToUpdate === -1) {
      products.push({name: "Fall Limited Edition Sneakers", count: count});
    }
    else {
      products[productToUpdate].count = count;
    }

    // se o produto tem o mesmo nome, altera somente a contagem do mesmo
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
