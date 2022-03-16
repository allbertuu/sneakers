import { useCallback, useState } from 'react';

import logoImg from '../../assets/images/logo.svg';
import iconCart from '../../assets/images/icon-cart.svg';
import imgAvatar from '../../assets/images/image-avatar.png';
import navBars from '../../assets/images/icon-menu.svg';

import Button from '../Button';

import styles from '../../styles/Header.module.scss';

function Header() {

  const pages = ['Collections', 'Men', 'Women', 'About', 'Contact'];

  const useToggle = (initialState = false) => {
    const [isOpen, setIsOpen] = useState(initialState);
    const toggle = useCallback(() => setIsOpen(isOpen => !isOpen), []);
    return [isOpen, toggle]
  }

  const [isOpen, setIsOpen] = useToggle();

  return (
    <header>
      <section className={styles.navbar}>
        <div className={styles.logo}>
          <a href="/">
            <img src={logoImg} alt="logo" />
          </a>
        </div>
        <nav>
          <button className={styles.bars_icon}>
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
          <img src={iconCart} alt="Cart" onClick={(e) => setIsOpen()} />
        </div>
        <div className={isOpen ? styles.profile_active : styles.profile}>
          <img src={imgAvatar} alt="Avatar" onClick={(e) => setIsOpen()} />
        </div>
      </section>
      
      {isOpen &&
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
    </header>
  );
}

export default Header