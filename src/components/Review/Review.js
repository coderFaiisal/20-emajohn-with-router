import { useEffect, useState } from "react";
import fakeData from "../../fakeData";
import {
  getDatabaseCart,
  processOrder,
  removeFromDatabaseCart,
} from "../../utilities/databaseManager";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import "./Review.css";
import happyFace from "../../images/giphy.gif";

const Review = () => {
  const [cart, setCart] = useState([]);
  const [orderPlaced, setOrderPlaced] = useState(false);
  useEffect(() => {
    const savedCart = getDatabaseCart();
    const productKeys = Object.keys(savedCart);
    const cartProducts = productKeys.map((key) => {
      const product = fakeData.find((pd) => pd.key === key);
      product.quantity = savedCart[key];
      return product;
    });
    setCart(cartProducts);
  }, []);
  const handleRemoveProduct = (productKey) => {
    const newCart = cart.filter((pd) => pd.key !== productKey);
    setCart(newCart);
    removeFromDatabaseCart(productKey);
  };
  const handlePlaceOrder = () => {
    setCart([]);
    setOrderPlaced(true);
    processOrder();
  };
  let thankYou;
  if (orderPlaced) {
    thankYou = <img src={happyFace} alt="" />;
  }

  return (
    <div className="review-container">
      <div className="review-item-container">
        {cart.map((product) => (
          <ReviewItem
            handleRemoveProduct={handleRemoveProduct}
            key={product.key}
            product={product}
          ></ReviewItem>
        ))}
        {thankYou}
      </div>
      <div className="review-cart-container">
        <Cart cart={cart}>
          <button onClick={handlePlaceOrder} className="card-button">
            Place Order
          </button>
        </Cart>
      </div>
    </div>
  );
};

export default Review;
