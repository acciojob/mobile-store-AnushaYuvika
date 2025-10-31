import React, { useState } from "react";
import './../styles/App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ProductList from "./ProductList";
import ProductDetails from "./ProductDetails";
import AdminPanel from "./AdminPanel";

const App = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "iPhone 15",
      price: 120000,
      description: "Apple iPhone 15 with A16 Bionic chip",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 2,
      name: "Samsung Galaxy S24",
      price: 95000,
      description: "Samsung Galaxy S24 with amazing display",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 3,
      name: "OnePlus 12",
      price: 65000,
      description: "OnePlus 12 with powerful Snapdragon processor",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 4,
      name: "Xiaomi 14",
      price: 45000,
      description: "Xiaomi 14 with elegant design and fast charging",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 5,
      name: "Pixel 8 Pro",
      price: 105000,
      description: "Google Pixel 8 Pro with AI camera magic",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 6,
      name: "Realme GT 5",
      price: 40000,
      description: "Realme GT 5 with blazing performance",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 7,
      name: "Vivo X100",
      price: 52000,
      description: "Vivo X100 with flagship performance",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 8,
      name: "Nothing Phone 2",
      price: 58000,
      description: "Nothing Phone 2 with transparent design",
      image: "https://via.placeholder.com/150"
    }
  ]);

  return (
    <Router>
      <div style={{ padding: "20px" }}>
        <nav style={{ marginBottom: "20px" }}>
          <Link to="/">Home</Link> |{" "}
          <Link to="/admin">Admin Panel</Link>
        </nav>

        <Switch>
          <Route exact path="/">
            <ProductList products={products} />
          </Route>
          <Route path="/products/:id">
            <ProductDetails products={products} />
          </Route>
          <Route path="/admin">
            <AdminPanel products={products} setProducts={setProducts} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
