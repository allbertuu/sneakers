import logoImg from '../../assets/images/logo.svg';
import iconCart from '../../assets/images/icon-cart.svg';
import imgAvatar from '../../assets/images/image-avatar.png';
import navBars from '../../assets/images/icon-menu.svg';

import '../../styles/Header.scss';

const Header = () => {
  return (
    <header>
      <section className="navbar">
        <div className="logo">
          <a href="/">
            <img src={logoImg} alt="logo" />
          </a>
        </div>
        <nav>
          <button className="bars">
            <img src={navBars} alt="Barra de navegação" />
          </button>
          <ul>
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </section>
      <section className="personal">
        <div className='cart'>
          <img src={iconCart} alt="Cart" />
        </div>
        <div className="profile">
          <img src={imgAvatar} alt="Avatar" />
        </div>
      </section>
    </header>
  );
}

export default Header