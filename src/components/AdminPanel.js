import React, { useState } from "react";
import { Link } from "react-router-dom";

const AdminPanel = ({ products, setProducts }) => {
  const [form, setForm] = useState({
    name: "",
    description: "",
    image: "",
    price: ""
  });

  const addProduct = () => {
    if (!form.name || !form.price) return;
    const newProduct = {
      ...form,
      id: products.length + 1,
      price: Number(form.price)
    };
    setProducts([...products, newProduct]);
    setForm({ name: "", description: "", image: "", price: "" });
  };

  const editProduct = (id) => {
    const updatedPrice = prompt("Enter new price:");
    if (updatedPrice) {
      setProducts(
        products.map((p) =>
          p.id === id ? { ...p, price: Number(updatedPrice) } : p
        )
      );
    }
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    <div>
      <h1>Admin Panel</h1>
      <div>
        <input
          className="form-control"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          className="form-control"
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />
        <input
          className="form-control"
          placeholder="Image URL"
          value={form.image}
          onChange={(e) => setForm({ ...form, image: e.target.value })}
        />
        <input
          className="form-control"
          placeholder="Price"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
        />
        <button onClick={addProduct}>Add</button>
      </div>

      <ul>
        {products.map((p) => (
          <li key={p.id}>
            <Link to={`/products/${p.id}`}>{p.name}</Link>
            <button
              className="float-right"
              onClick={() => editProduct(p.id)}
            >
              Edit
            </button>
            <button
              className="float-right"
              onClick={() => deleteProduct(p.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;
