import { useCart } from "../store/useCart";
import CartList from "./CartList";

const Cart = () => {
  const cart = useCart((state) => state.cart);

  const emptyCart = (
    <>
      <img
        src="assets/svg/empty-cart.svg"
        alt=""
        className="mx-auto mt-12 w-[200px]"
      />
      <p className="text-center font-semibold text-stone-500">
        Your Added Items will appear here
      </p>
    </>
  );

  return (
    <section className="my-12">
      <div className="box rounded-md bg-white p-6 pb-12 shadow-md">
        <h2 className="h1 text-rose-700">Your Cart ({cart.length})</h2>
        {!cart.length ? emptyCart : <CartList />}
        
      </div>
    </section>
  );
};

export default Cart;
