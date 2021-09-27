import React, { useEffect, useState } from "react";
import "./Shop.css";
import { Link } from "react-router-dom";
import fakeData from "../../fakeData";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import {
  addToDatabaseCart,
  getDatabaseCart,
} from "../../utilities/databaseManager";

const Shop = () => {
  const first10 = fakeData.slice(0, 15);
  const [products, setProducts] = useState(first10);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = getDatabaseCart();
    const productKeys = Object.keys(savedCart);
    const previousCart = productKeys.map((existingKey) => {
      const product = fakeData.find((pd) => pd.key === existingKey);
      product.quantity = savedCart[existingKey];
      return product;
    });
    setCart(previousCart);
  }, []);

  const handleProductCart = (product) => {
    const sameProduct = cart.find((pd) => pd.key === product.key);
    let count = 1;
    let newCart;
    if (sameProduct) {
      const count = sameProduct.quantity + 1;
      sameProduct.quantity = count;
      const others = cart.filter((pd) => pd.key !== product.key);
      newCart = [...others, sameProduct];
    } else {
      product.quantity = 1;
      newCart = [...cart, product];
    }
    setCart(newCart);
    addToDatabaseCart(product.key, count);
  };

  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((product) => (
          <Product
            showAddToCart={true}
            key={product.key}
            product={product}
            handleProductCart={handleProductCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
          <Link to="/review">
            <button className="card-button">Order Review</button>
          </Link>{" "}
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
