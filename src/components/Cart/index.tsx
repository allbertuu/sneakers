// icons and imgs
import mainImg from "../../assets/images/image-product-1-thumbnail.jpg";
import removeIcon from "../../assets/images/icon-delete.svg";
import Checkout from "../Checkout";
import { useDispatch, useSelector } from "react-redux";
import {
  removeProduct,
  selectProducts,
} from "../../redux/slices/productsSlice";

export default function Cart() {
  const price = (125.0).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    currencySign: "standard",
  });

  const dispatch = useDispatch();

  const products = useSelector(selectProducts);

  return (
    <div className="c-cart">
      <div className="c-cart__header">
        <b>Cart</b>
      </div>
      <div className="c-cart__body">
        <ol className="c-cart__body__items">
          {products.length === 0 ? (
            <p className="withoutItems">Your cart is empty</p>
          ) : (
            products.map((product, key) => (
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
                  onClick={() => dispatch(removeProduct(product))}
                />
              </li>
            ))
          )}
        </ol>
        {products.length > 0 ? <Checkout /> : undefined}
      </div>
    </div>
  );
}
