// hooks
import useToggle from "../../hooks/useToggle";
// components
import Cart from "../Cart";
// icons and imgs
import logoImg from "../../assets/images/logo.svg";
import iconCart from "../../assets/images/icon-cart.svg";
import imgAvatar from "../../assets/images/image-avatar.png";
import navBars from "../../assets/images/icon-menu.svg";
import iconClose from "../../assets/images/icon-close.svg";

export default function Header() {
  const pagesList = ["Collections", "Men", "Women", "About", "Contact"];

  const [isCartOpen, toggleCart] = useToggle(false);
  const [isMenuOpen, toggleMenu] = useToggle(false);

  return (
    <header>
      <section className="navbar">
        <div className="logo">
          <a href="/">
            <img src={logoImg} alt="Logotipo" />
          </a>
        </div>
        <nav>
          <button className="bars_icon" onClick={toggleMenu}>
            <img src={navBars} alt="Navbar icon" />
          </button>
          <ul>
            {pagesList.map((page) => (
              <li key={page}>{page}</li>
            ))}
          </ul>
        </nav>
      </section>
      <section className="personal">
        <div className="personal__cart">
          <img src={iconCart} alt="Cart" onClick={toggleCart} />
        </div>
        <div
          className={
            isCartOpen ? "personal__profile is-active" : "personal__profile"
          }
        >
          <img src={imgAvatar} alt="Avatar" onClick={toggleCart} />
        </div>
      </section>

      {/* Modal cart */}
      {isCartOpen && <Cart />}

      {/* Modal menu */}
      {isMenuOpen && (
        <div className="u-full-screen-bg-black">
          <aside className="c-menu">
            <img src={iconClose} onClick={toggleMenu} alt="Close menu" />
            <nav>
              <ul>
                {pagesList.map((page) => (
                  <li key={page}>{page}</li>
                ))}
              </ul>
            </nav>
          </aside>
        </div>
      )}
    </header>
  );
}
