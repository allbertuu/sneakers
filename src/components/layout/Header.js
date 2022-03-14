import logoImg from '../../assets/images/logo.svg';
import navBars from '../../assets/images/icon-menu.svg';

import '../../styles/Header.scss';

const Header = () => {
  return (
    <header>
      <section className="navbar">
        <div className="logo">
          <a href="#">
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
        <div className='cart'></div>
        <div className="profile"></div>
      </section>
    </header>
  );
}

export default Header