import { useProducts } from "./store/useProducts";
import ProductsList from "./components/ProductsList";
import Cart from "./components/Cart";


function App() {
  const isLoading = useProducts((state) => state.isLoading);
  const error = useProducts((state) => state.error);


  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ProductsList />
      <Cart/>
    </>
  );
}

export default App;
