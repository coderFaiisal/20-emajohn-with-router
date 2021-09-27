import React from "react";
import { useParams } from "react-router-dom";
import fakeData from "../../fakeData";
import Product from "../Product/Product";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { key } = useParams();
  const product = fakeData.find((pd) => pd.key === key);
  return (
    <div>
      <Product showAddToCart={false} product={product}></Product>
    </div>
  );
};

export default ProductDetails;
