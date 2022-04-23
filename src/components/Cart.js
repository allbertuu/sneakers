// hooks
import { useProductsList } from '../hooks/useProductsList';
// scripts
import adjustPrice from '../assets/scripts/adjustPrice';
// icons and imgs
import mainImg from '../assets/images/image-product-1-thumbnail.jpg';
import removeIcon from '../assets/images/icon-delete.svg';
import Checkout from './Checkout';
// styles
import styles from '../sass/Cart.module.scss';

function Cart({ price, deleteProduct }) {

  const { productsList } = useProductsList();

  return (
    <div className={styles.container}>
      <div className={styles.cart_header}>
        <b>Cart</b>
      </div>
      <div className={styles.cart_body}>
        <ol className={styles.cart_items}>
          {productsList.length === 0 &&
            <p className={styles.withoutItems}>Your cart is empty</p>
          }
          {productsList.length > 0 &&
            productsList.map((product, key) => (
              <li className={styles.item} key={key}>
                <div className={styles.id}>{key + 1}</div>
                <img src={mainImg} alt="Product view" />
                <div className={styles.info}>
                  <div>{product.name}</div>
                  <div>&#36;{price} x {product.count} <b className="text-black">&#36;{adjustPrice(price * product.count)}</b></div>
                </div>
                <img src={removeIcon} alt="Remove product" className="self-center cursor-pointer" onClick={() => deleteProduct(product.name)} />
              </li>
            ))
          }
        </ol>
        {productsList.length > 0 &&
          <Checkout />
        }
      </div>
    </div>
  );
}

export default Cart