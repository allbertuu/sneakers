// hooks
import useToggle from '../../hooks/useToggle';
import { useProducts } from '../../hooks/useProducts';
// components
import Cart from '../Cart';
// icons and imgs
import logoImg from '../../assets/images/logo.svg';
import iconCart from '../../assets/images/icon-cart.svg';
import imgAvatar from '../../assets/images/image-avatar.png';
import navBars from '../../assets/images/icon-menu.svg';
import iconClose from '../../assets/images/icon-close.svg';
import styles from '../../styles/Header.module.scss';

function Header({ price }) {

  const pages = ['Collections', 'Men', 'Women', 'About', 'Contact'];

  const [isCartOpen, toggleCart] = useToggle();
  const [isMenuOpen, toggleMenu] = useToggle();

  const { products } = useProducts();

  function deleteProduct(productName = '') {
    let productToDelete = products.findIndex((product) => {
      return product.name === productName;
    });
    products.splice(productToDelete, 1);
    toggleCart();
  }

  return (
    <header>
      <section className={styles.navbar}>
        <div className={styles.logo}>
          <a href="/">
            <img src={logoImg} alt="logo" />
          </a>
        </div>
        <nav>
          <button className={styles.bars_icon} onClick={() => toggleMenu()}>
            <img src={navBars} alt="Barra de navegação" />
          </button>
          <ul>
            {pages.map((page, key) => (
              <li key={key}>{page}</li>
            ))}
          </ul>
        </nav>
      </section>
      <section className={styles.personal}>
        <div className={styles.cart_icon}>
          <img src={iconCart} alt="Cart" onClick={() => toggleCart()} />
        </div>
        <div className={isCartOpen ? styles.profile_active : styles.profile}>
          <img src={imgAvatar} alt="Avatar" onClick={() => toggleCart()} />
        </div>
      </section>

      {/* Modal cart */}
      {isCartOpen &&
        <Cart price={price} deleteProduct={deleteProduct} toggleCart={toggleCart} />
      }

      {/* Modal menu */}
      {isMenuOpen &&
        <div className={styles.menuModal}>
          <aside className={styles.comeMenu}>
            <img src={iconClose} onClick={() => toggleMenu()} alt='Close menu' />
            <nav>
              <ul>
                {pages.map((page, key) => (
                  <li key={key}>{page}</li>
                ))}
              </ul>
            </nav>
          </aside>
        </div>
      }
    </header>
  );
}

export default Header
