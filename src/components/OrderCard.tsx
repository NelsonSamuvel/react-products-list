import { HiOutlineCheckCircle } from "react-icons/hi2";
import { useCart } from "../store/useCart";
import OrderItem from "./OrderItem";
import { formatCurrency } from "../utils/helper";
import Button from "../ui/Button";
import { useEffect, useRef } from "react";

const OrderCard = () => {
  const cardRef = useRef<null | HTMLDivElement>(null);

  const cart = useCart((state) => state.cart);
  const setOrder = useCart((state) => state.setOrder);
  const clearCart = useCart((state) => state.clearCart);

  const totalPrice = cart.reduce(
    (acc, cur) => (cur.qty ? acc + cur.price * cur.qty : 0),
    0,
  );

  function handleOrder() {
    setOrder();
    clearCart();
  }

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (cardRef?.current && !cardRef.current.contains(e.target as Node)) {
        setOrder();
      }
    }

    document.addEventListener("click", handleClick, true);

    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  return (
    <div
      ref={cardRef}
      className="fixed bottom-0 lg:inset-12 lg:w-1/3  lg:mx-auto  left-0 right-0 h-[85%] overflow-scroll rounded-lg bg-white px-4 py-4 lg:px-8 lg:py-2 leading-10"
    >
      <HiOutlineCheckCircle className="stroke-4 mt-6 lg:mt-2 h-12 w-12 stroke-green-600" />
      <h1 className="mt-4 w-20 lg:whitespace-nowrap text-3xl font-bold leading-10">
        Order Confirmed
      </h1>
      <p className="text-gray-600">We hope you enjoy your food</p>
      <div className="mt-6 flex flex-col gap-4 lg:gap-2 rounded-md bg-rose-50 px-4 py-6">
        <ul className="">
          {cart.map((item) => (
            <OrderItem key={item.id} item={item} />
          ))}
        </ul>
        <div className="mt-4 flex items-center justify-between gap-2">
          <p className="text-base text-gray-700">Order Total</p>
          <h2 className="h2 tracking-wider">{formatCurrency(totalPrice)}</h2>
        </div>
      </div>
      <div className="mt-4">
        <Button onClick={handleOrder}>Start new Order</Button>
      </div>
    </div>
  );
};

export default OrderCard;
