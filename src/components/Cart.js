import { useProducts } from '../hooks/useProducts';
import adjustPrice from '../assets/scripts/adjustPrice';

import mainImg from '../assets/images/image-product-1-thumbnail.jpg';
import Checkout from './Checkout';

import styles from '../styles/Cart.module.scss';

function Cart({ price }) {

  const { products } = useProducts();

  function generateId() {
    return Math.floor(Math.random() * 10000);
  }

  // const [products, setProducts] = useState([]);

  // // fetch backend products added
  // useEffect(() => {
  //   fetch('http://localhost:5000/products', {
  //     method: 'GET',
  //     headers: {
  //       'Content-type': 'application/json',
  //     },
  //   })
  //     .then(res => res.json())
  //     .then(json => setProducts(json))
  //     .catch((err) => console.log(err))
  // }, []);

  return (
    <div className={styles.cartModal}>
      <div className="cart_header p-5 border-b border-b-slate-300">
        <b>Cart</b>
      </div>
      <div className={styles.cart_body}>
        <ol className={styles.cart_items}>
          {products.length === 0 &&
            <p className={styles.withoutItems}>Your cart is empty</p>
          }
          {products.length > 0 &&
            products.map((product, key) => (
              <li className={styles.item} key={generateId()}>
                <div className={styles.id}>{key + 1}</div>
                <img src={mainImg} alt="Produto" />
                <div className={styles.info}>
                  <div>{product.name}</div>
                  <div>&#36;{price} x {product.count} <b className="text-black">&#36;{adjustPrice(price * product.count)}</b></div>
                </div>
              </li>
            ))
          }
        </ol>
        {products.length > 0 && 
          <Checkout />
        }
      </div>
    </div>
  );
}

export default Cart