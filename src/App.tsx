import { useProducts } from "./store/useProducts";
import ProductsList from "./components/ProductsList";
import Cart from "./components/Cart";
import Order from "./components/Order";

function App() {
  const isLoading = useProducts((state) => state.isLoading);
  const error = useProducts((state) => state.error);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div className="grid-cols-[1fr_auto] lg:grid">
        <ProductsList />
        <Cart />
      </div>
      <Order />
    </>
  );
}

export default App;
