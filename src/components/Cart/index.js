// hooks
import { useProductsList } from '../../hooks/useProductsList';
// icons and imgs
import mainImg from '../../assets/images/image-product-1-thumbnail.jpg';
import removeIcon from '../../assets/images/icon-delete.svg';
import Checkout from '../Checkout';
// styles
import styles from './style.module.scss';

function Cart({ deleteProduct }) {

  const price = 125.00.toLocaleString('en-US', {style: 'currency', currency: 'USD', currencySign: 'standard'});

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
                <div>{key + 1}</div>
                <img src={mainImg} alt="Product view" />
                <div className={styles.info}>
                  <p>{product.name}</p>
                  <div>{price} x {product.count} <b className="text-black">&#36;{125.00 * product.count}</b></div>
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