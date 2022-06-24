import { FormEvent, useState } from "react";
// hooks
import useToggle from "../../hooks/useToggle";
// icons
import iconMinus from "../../assets/images/icon-minus.svg";
import iconPlus from "../../assets/images/icon-plus.svg";
import btnClose from "../../assets/images/close-modal.svg";
import iconCart from "../../assets/images/icon-cart-white.svg";

export default function Description() {
  const price = (125.0).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    currencySign: "standard",
  });

  const [count, setCount] = useState(0);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  function subtractOne() {
    count === 0 ? toggle() : setCount(count - 1);
  }
  const [isOpen, toggle] = useToggle();

  function addToCart(productToAdd = "Product") {
    // don't add nonexistent product
    if (count === 0) {
      return;
    }
    // update existent product (if have), if not: add new
    // let productToUpdate = productsList.findIndex((product) => {
    //   return product.name === productToAdd;
    // });
    // if (productToUpdate === -1) {
    //   productsList.push({ name: productToAdd, count: count });
    // } else {
    //   productsList[productToUpdate].count += count;
    // }
    setCount(0);
  }

  return (
    <section className="c-description">
      <span className="c-description__brand">SNEAKER COMPANY</span>
      <h1>Fall Limited Edition Sneakers</h1>
      <p>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>
      <div className="c-description__price">
        <div className="c-description__price__with-discount">
          <span>{price}</span>
          <span>50%</span>
        </div>
        <span className="c-description__price__without-discount">
          &#36;250.00
        </span>
      </div>

      <form
        onSubmit={(e) => handleSubmit(e)}
        className="c-description__buttons"
      >
        <div className="c-count">
          <button onClick={subtractOne}>
            <img src={iconMinus} alt="subtract 1" />
          </button>
          <span className="c-count__display">{count}</span>
          <button onClick={() => setCount(count + 1)}>
            <img src={iconPlus} alt="add 1" />
          </button>
        </div>

        {isOpen && (
          <div aria-hidden="true" className="u-full-screen-bg-black">
            <div className="c-modal">
              <div className="c-modal__header">
                <h3>Oops!</h3>
                <button type="button" onClick={toggle}>
                  <img src={btnClose} alt="Close modal" />
                </button>
              </div>
              <div className="c-modal__body">
                <p>
                  Please, don't press the remove button without having something
                  in the count.
                </p>
              </div>
              <div className="c-modal__footer">
                <button onClick={toggle} type="button" className="c-btn">
                  Ok
                </button>
              </div>
            </div>
          </div>
        )}

        <button
          type="submit"
          className="c-btn c-btn--add"
          onClick={() => addToCart("Fall Limited Edition Sneakers")}
        >
          <img src={iconCart} alt="Cart icon" />
          Add to cart
        </button>
      </form>
    </section>
  );
}
