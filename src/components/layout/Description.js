import { useState } from 'react';
//hooks
import useToggle from "../../hooks/useToggle";
import { useProducts } from '../../hooks/useProducts';
//icons
import iconMinus from "../../assets/images/icon-minus.svg";
import iconPlus from "../../assets/images/icon-plus.svg";
import btnClose from "../../assets/images/close-modal.svg";
import iconCart from '../../assets/images/icon-cart-white.svg';
//styles
import description from '../../styles/Description.module.scss';
import countStyles from '../../styles/Count.module.scss';

function Description({ price }) {

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
  const { products } = useProducts();

  function addToCart(productToAdd = 'Product') {
    // don't add nonexistent product
    if (count === 0) {
      return;
    }
    // update existent product (if have), if not: add new
    let productToUpdate = products.findIndex((product) => {
      return product.name === productToAdd;
    });
    if (productToUpdate === -1) {
      products.push({ name: productToAdd, count: count })
    }
    else {
      products[productToUpdate].count += count;
    }
    // reset count
    setCount(0);
    // um modal de adicionado com sucesso
  }

  return (
    <section className={description.container}>
      <span className={description.brand}>SNEAKER COMPANY</span>
      <h1>Fall Limited Edition Sneakers</h1>
      <p>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.
      </p>
      <div className={description.l_price}>
        <div className={description.l_with_discount}>
          <span className={description.price}>&#36;{price}</span>
          <div className={description.discount}>50%</div>
        </div>
        <span className={description.no_discount}>&#36;250.00</span>
      </div>


      <form onSubmit={(e) => handleSubmit(e)} className={description.l_buttons}>
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
          <div aria-hidden="true" className={countStyles.l_modal}>
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
                  <button onClick={() => toggle()} type="button" className={countStyles.agree}>Ok</button>
                </div>
              </div>
            </div>
          </div>
        }

        <button type='submit' className={description.btnAddToCart} onClick={() => addToCart("Fall Limited Edition Sneakers")}>
          <img src={iconCart} alt='Cart icon' />
          Add to cart
        </button>
      </form>


    </section>
  );
}

export default Description