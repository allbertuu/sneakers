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
// styles
import '../../sass/Header.scss';

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
      <section className="navbar">
        <div className="logo">
          <a href="/">
            <img src={logoImg} alt="logotipo" />
          </a>
        </div>
        <nav>
          <button className="bars_icon" onClick={() => toggleMenu()}>
            <img src={navBars} alt="Barra de navegação" />
          </button>
          <ul>
            {pages.map((page, key) => (
              <li key={key}>{page}</li>
            ))}
          </ul>
        </nav>
      </section>
      <section className="personal">
        <div className="cart_icon">
          <img src={iconCart} alt="Cart" onClick={() => toggleCart()} />
        </div>
        <div className={isCartOpen ? "profile_active" : "profile"}>
          <img src={imgAvatar} alt="Avatar" onClick={() => toggleCart()} />
        </div>
      </section>

      {/* Modal cart */}
      {isCartOpen &&
        <Cart price={price} deleteProduct={deleteProduct} toggleCart={toggleCart} />
      }

      {/* Modal menu */}
      {isMenuOpen &&
        <div className="menuModal">
          <aside className="comeMenu">
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
