import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const cart = props.cart;
  const total = cart.reduce((total, pd) => total + pd.price * pd.quantity, 0);

  let shipping = 0;
  if (total > 100) {
    shipping = 0;
  } else if (total > 50) {
    shipping = 6.99;
  } else if (total > 1) {
    shipping = 12.99;
  }

  const tax = total / 10;
  const grandTotal = total + tax + shipping;

  const formateNumber = (num) => {
    const precision = parseFloat(num).toFixed(2);
    return precision;
  };
  return (
    <div className="cart-area">
      <h3>Shopping Items: {cart.length}</h3>
      <h5>Product Price: {formateNumber(total)}</h5>
      <h5>Shipping Cost: {formateNumber(shipping)}</h5>
      <h5>Tax + VAT {formateNumber(tax)}</h5>
      <h4>Total: {formateNumber(grandTotal)}</h4>
      <br />
      {props.children}
    </div>
  );
};

export default Cart;
