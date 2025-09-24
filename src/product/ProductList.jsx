import { useEffect, useRef, useState } from "react";
import Product from "./Product.jsx";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const loaded = useRef(false);

  useEffect(() => {
    console.log("Call Use Effect");
    if (loaded.current === false) {
      fetch("/product.json")
        .then((response) => response.json())
        .then((data) => setProducts(data))
        .then(() => (loaded.current = true));
    }

    return () => {
      console.log("Product List Unmount");
    };
  });

  return (
    <div>
      <h1>Product List</h1>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}
