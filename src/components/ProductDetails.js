import React from "react";
import { useParams, useHistory } from "react-router-dom";

const ProductDetails = ({ products }) => {
  const { id } = useParams();
  const history = useHistory();

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>Price: ₹{product.price}</p>
      <button className="btn" onClick={() => history.push("/")}>
        Back
      </button>
    </div>
  );
};

export default ProductDetails;
