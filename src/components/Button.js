import iconCart from '../assets/images/icon-cart-white.svg';

import '../styles/Button.scss';

const Button = ({ type }) => {
  return (
    <>
      {type === 'addToCart' &&
        <button className="addToCart">
          <img src={iconCart} alt='Cart' />
          Add to cart
        </button>
      }
      {type === 'checkout' &&
        <button className="checkout">
          Checkout
        </button>
      }
    </>
  );
}

export default Button