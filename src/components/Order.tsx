import { createPortal } from "react-dom";
import { useCart } from "../store/useCart";
import OrderCard from "./OrderCard";

const Order = () => {
  const isOrder = useCart((state) => state.isOrder);

  console.log(isOrder);

  if (!isOrder) return null;

  return createPortal(
    <div className="fixed inset-0 bg-gray-700/30 backdrop-blur-sm">
      <OrderCard />
    </div>,
    document.body,
  );
};

export default Order;
