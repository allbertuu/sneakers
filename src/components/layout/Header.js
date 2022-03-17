import { useCallback, useState } from 'react';

import logoImg from '../../assets/images/logo.svg';
import iconCart from '../../assets/images/icon-cart.svg';
import imgAvatar from '../../assets/images/image-avatar.png';
import navBars from '../../assets/images/icon-menu.svg';
import iconClose from '../../assets/images/icon-close.svg';

import Button from '../Button';

import styles from '../../styles/Header.module.scss';

function Header() {

  const pages = ['Collections', 'Men', 'Women', 'About', 'Contact'];

  //hook useToggle
  const useToggle = (initialState = false) => {
    const [isOpen, setIsOpen] = useState(initialState);
    const toggle = useCallback(() => setIsOpen(isOpen => !isOpen), []);
    isOpen ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto';
    return [isOpen, toggle]
  }

  const [isCartOpen, setIsCartOpen] = useToggle();
  const [isMenuOpen, setIsMenuOpen] = useToggle();

  return (
    <header>
      <section className={styles.navbar}>
        <div className={styles.logo}>
          <a href="/">
            <img src={logoImg} alt="logo" />
          </a>
        </div>
        <nav>
          <button className={styles.bars_icon} onClick={(e) => setIsMenuOpen()}>
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
          <img src={iconCart} alt="Cart" onClick={(e) => setIsCartOpen()} />
        </div>
        <div className={isCartOpen ? styles.profile_active : styles.profile}>
          <img src={imgAvatar} alt="Avatar" onClick={(e) => setIsCartOpen()} />
        </div>
      </section>

      {isCartOpen &&
        <div id="cartModal" className={styles.cart_modal}>
          <div className="cart_header p-5 border-b border-b-slate-300">
            <b>Cart</b>
          </div>
          <div className="cart_body flex flex-col gap-5 p-5">
            <div className="cart_items">
              Item
            </div>
            <Button type="checkout" />
          </div>
        </div>
      }

      {isMenuOpen &&
        <div className={styles.menuModal}>
          <aside className={styles.comeMenu}>
            <img src={iconClose} onClick={(e) => setIsMenuOpen()} alt='Close menu' />
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