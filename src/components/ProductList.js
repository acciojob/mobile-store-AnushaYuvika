import React from "react";
import { Link } from "react-router-dom";

const ProductList = ({ products }) => {
  return (
    <div>
      <h1>Mobile Store</h1>
      {products.map((p) => (
        <div className="col-12" key={p.id}>
          <div>
            <Link to={`/products/${p.id}`}>
              <div className="row">
                <img src={p.image} alt={p.name} />
                <div>
                  <h2>{p.name}</h2>
                  <p>₹{p.price}</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
