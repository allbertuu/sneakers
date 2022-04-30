import { useState } from 'react';
// hooks
import useToggle from "../../hooks/useToggle";
import { useProductsList } from '../../hooks/useProductsList';
// icons
import iconMinus from "../../assets/images/icon-minus.svg";
import iconPlus from "../../assets/images/icon-plus.svg";
import btnClose from "../../assets/images/close-modal.svg";
import iconCart from '../../assets/images/icon-cart-white.svg';
// styles
import description from '../../sass/Description.module.scss';
import countStyles from '../../sass/Count.module.scss';
import button from '../../sass/Button.module.scss';

function Description() {

  const price = 125.00.toLocaleString('en-US', {style: 'currency', currency: 'USD', currencySign: 'standard'});

  const [count, setCount] = useState(0);

  function handleSubmit(e) {
    e.preventDefault()
  }

  //logic of count
  function subtractOne() {
    count === 0 ? toggle() : setCount(count - 1);
  }
  const [isOpen, toggle] = useToggle();

  //logic of addToCart
  const { productsList, setProductsList } = useProductsList();

  function addToCart(productToAdd = 'Product') {
    // don't add nonexistent product
    if (count === 0) {
      return;
    }
    // update existent product (if have), if not: add new
    let productToUpdate = productsList.findIndex((product) => {
      return product.name === productToAdd;
    });
    if (productToUpdate === -1) {
      productsList.push({ name: productToAdd, count: count })
    }
    else {
      productsList[productToUpdate].count += count;
    }
    setCount(0);
    setProductsList([...productsList])
  }

  return (
    <section className={description.container}>
      <span className={description.brand}>SNEAKER COMPANY</span>
      <h1>Fall Limited Edition Sneakers</h1>
      <p>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.
      </p>
      <div className={description.c_price}>
        <div className={description.c_with_discount}>
          <span className={description.price}>{price}</span>
          <div className={description.discount}>50%</div>
        </div>
        <span className={description.no_discount}>&#36;250.00</span>
      </div>


      <form onSubmit={(e) => handleSubmit(e)} className={description.c_buttons}>
        <div className={countStyles.container}>
          <button onClick={subtractOne}>
            <img src={iconMinus} alt='subtract 1' />
          </button>
          <div className={countStyles.display}>{count}</div>
          <button onClick={() => setCount(count + 1)}>
            <img src={iconPlus} alt='add 1' />
          </button>
        </div>

        {isOpen &&
          <div aria-hidden="true" className={countStyles.c_modal}>
            <div className={countStyles.modal}>
              <div className={countStyles.modal_content}>
                <div className={countStyles.modal_header}>
                  <h3>
                    Oops!
                  </h3>
                  <button type="button" onClick={() => toggle()}>
                    <img src={btnClose} alt="Fechar modal" />
                  </button>
                </div>
                <div className={countStyles.modal_body}>
                  <p>
                    Please, don't press the remove button without having something in the count.
                  </p>
                </div>
                <div className={countStyles.modal_footer}>
                  <button onClick={() => toggle()} type="button" className={`${button.btn}`}>Ok</button>
                </div>
              </div>
            </div>
          </div>
        }

        <button type='submit' className={`${button.btn} ${button.btn_add}`} onClick={() => addToCart("Fall Limited Edition Sneakers")}>
          <img src={iconCart} alt='Cart icon' />
          Add to cart
        </button>
      </form>


    </section>
  );
}

export default Description