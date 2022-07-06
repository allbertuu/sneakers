// icons and imgs
import mainImg from "../../assets/images/image-product-1-thumbnail.jpg";
import removeIcon from "../../assets/images/icon-delete.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  removeProduct,
  selectProducts,
} from "../../redux/slices/productsSlice";
import {
  CartBody,
  CartHeader,
  CartWrapper,
  Item,
  ItemImage,
  ItemInfo,
  List,
  WithoutItem,
} from "./styled";
import Button from "../Button";

export default function Cart() {
  const price = (125.0).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    currencySign: "standard",
  });

  const dispatch = useDispatch();

  const products = useSelector(selectProducts);

  return (
    <CartWrapper>
      <CartHeader>
        <b>Cart</b>
      </CartHeader>
      <CartBody>
        <List>
          {products.length === 0 ? (
            <WithoutItem>Your cart is empty</WithoutItem>
          ) : (
            products.map((product, index) => (
              <Item key={product.id}>
                <div>{index + 1}</div>
                <ItemImage src={mainImg} alt="Product view" />
                <ItemInfo>
                  <p>{product.name}</p>
                  <div>
                    {price} x {product.count}{" "}
                    <b className="text-black">&#36;{125.0 * product.count}</b>
                  </div>
                </ItemInfo>
                <img
                  src={removeIcon}
                  alt="Remove product"
                  className="self-center cursor-pointer"
                  onClick={() => dispatch(removeProduct(product))}
                />
              </Item>
            ))
          )}
        </List>
        {products.length > 0 ? (
          <Button className="h-12">Checkout</Button>
        ) : null}
      </CartBody>
    </CartWrapper>
  );
}
