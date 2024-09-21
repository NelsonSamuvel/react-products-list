import { HiOutlineCloud } from "react-icons/hi2";
import { useCart } from "../store/useCart";
import { formatCurrency } from "../utils/helper";
import CartItem from "./CartItem";
import Button from "../ui/Button";

const CartList = () => {
  const cart = useCart((state) => state.cart);

  const setOrder = useCart((state) => state.setOrder);

  const totalPrice = cart.reduce(
    (acc, cur) => (cur.qty ? acc + cur.price * cur.qty : 0),
    0,
  );

  return (
    <>
      <ul className="mt-4 space-y-4 divide-y">
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </ul>
      <div className="mt-6 flex justify-between">
        <p className="text-xl text-stone-700">Order Total</p>
        <p className="text-xl font-extrabold text-stone-700">
          {formatCurrency(totalPrice)}
        </p>
      </div>

      <div className="my-4 flex items-center justify-center gap-2 rounded-md bg-rose-50 px-3 py-4">
        <HiOutlineCloud className="icon stroke-green-500 stroke-2" />
        <p className="text-stone-800">
          This is a <span className="font-semibold">Carbon Neutral</span>{" "}
          delivery
        </p>
      </div>
      <Button onClick={setOrder}>Confirm Order</Button>
    </>
  );
};

export default CartList;
