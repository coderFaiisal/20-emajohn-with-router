import React from "react";
import "./ReviewItem.css";
const ReviewItem = (props) => {
  const { img, name, quantity, key, price } = props.product;
  return (
    <div className="review-item-card">
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <h3>Product Name: {name}</h3>
        <h3>Quantity: {quantity}</h3>
        <h4>Price: {price}$</h4>
        <br />
        <button
          onClick={() => props.handleRemoveProduct(key)}
          className="card-button"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default ReviewItem;
