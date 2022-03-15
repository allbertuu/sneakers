import logoImg from '../../assets/images/logo.svg';
import iconCart from '../../assets/images/icon-cart.svg';
import imgAvatar from '../../assets/images/image-avatar.png';
import navBars from '../../assets/images/icon-menu.svg';

import styles from '../../styles/Header.module.scss';

const Header = () => {

  const pages = ['Collections', 'Men', 'Women', 'About', 'Contact'];

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
          <img src={iconCart} alt="Cart" />
        </div>
        <div className={styles.profile}>
          <img src={imgAvatar} alt="Avatar" />
        </div>
      </section>
    </header>
  );
}

export default Header