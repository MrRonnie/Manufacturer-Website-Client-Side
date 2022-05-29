import { useEffect, useState } from "react";

const useAllProducts = (dependency) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://rocky-dawn-14713.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, [dependency]);

  return [products];
};
export default useAllProducts;
