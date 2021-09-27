import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";

const Product = (props) => {
  const { name, price, img, seller, stock, key } = props.product;
  return (
    <div className="product-card">
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <h4 className="product-name">
          <Link to={"/product/" + key}>{name}</Link>
        </h4>
        <br />
        <p>
          <small>by: {seller}</small>
        </p>
        <p>Only {stock} left in stock. Order soon...</p>
        <h4>Price: ${price}</h4>
        {props.showAddToCart && (
          <button
            onClick={() => props.handleProductCart(props.product)}
            className="card-button"
          >
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
