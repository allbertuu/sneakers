// icons and imgs
import mainImg from "../../assets/images/image-product-1-thumbnail.jpg";
import removeIcon from "../../assets/images/icon-delete.svg";
import Checkout from "../Checkout";


function Cart() {
  const price = (125.0).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    currencySign: "standard",
  });

  return (
    <div className="c-cart">
      <div className="c-cart__header">
        <b>Cart</b>
      </div>
      <div className="c-cart__body">
        <ol className="c-cart__body__items">
          {/* {productsList.length === 0 ? (
            <p className="withoutItems">Your cart is empty</p>
          ) : (
            productsList.map((product, key) => (
              <li className="item" key={key}>
                <div>{key + 1}</div>
                <img src={mainImg} alt="Product view" />
                <div className="info">
                  <p>{product.name}</p>
                  <div>
                    {price} x {product.count}{" "}
                    <b className="text-black">&#36;{125.0 * product.count}</b>
                  </div>
                </div>
                <img
                  src={removeIcon}
                  alt="Remove product"
                  className="self-center cursor-pointer"
                  onClick={() => deleteProduct(product.name)}
                />
              </li>
            ))
          )} */}
        </ol>
        {/* {productsList.length > 0 ? <Checkout /> : undefined} */}
      </div>
    </div>
  );
}

export default Cart;
