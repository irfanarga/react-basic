import { useEffect, useState } from "react";
import Product from "./Product.jsx";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [load, setLoad] = useState(false);

  function handleClick() {
    setLoad(true);
  }

  useEffect(() => {
    console.log("Call use effect with []");
  }, []);

  useEffect(() => {
    console.log("Call Use Effect");

    async function fetchProducts() {
      const response = await fetch("/product.json");
      const data = await response.json();
      setProducts(data);
    }

    if (load) {
      fetchProducts();
    }

    return () => {
      console.log("Product List Unmount");
    };
  }, [load]);

  return (
    <div>
      <h1>Product List</h1>
      <button onClick={handleClick}>Load Product</button>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}
