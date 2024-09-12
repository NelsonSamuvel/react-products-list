import { useCallback, useEffect } from "react";
import { useProducts } from "../store/useProducts";
import ProductsItem from "./ProductsItem";

const ProductsList = () => {
  const products = useProducts((state) => state.products);
  const getProducts = useProducts((state) => state.getProducts);

  const memoizedGetProducts = useCallback(() => {
    getProducts();
  }, [getProducts]);

  useEffect(() => {
    memoizedGetProducts();
  }, [memoizedGetProducts]);

  return (
    <section>
      <div className="box">
        <h1 className="h1 pt-6">Desserts</h1>
        <ul className="mt-10 flex flex-col gap-6">
          {products.map((product) => (
            <ProductsItem key={product.name} product={product} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProductsList;
