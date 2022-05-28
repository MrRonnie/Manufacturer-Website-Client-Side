import { useEffect, useState } from "react";

const useAllProducts = (dependency) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, [dependency]);

  return [products];
};
export default useAllProducts;
