import { useEffect, useState } from "react";
import Product from "./Product.jsx";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [load, setLoad] = useState(false);

  function handleClick() {
    setLoad(true);
  }

  useEffect(() => {
    console.log("Call Use Effect");
    if (load) {
      fetch("/product.json")
        .then((response) => response.json())
        .then((data) => setProducts(data));
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
