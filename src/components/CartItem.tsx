import { HiOutlineXCircle } from "react-icons/hi";
import { ProductsType } from "../store/useProducts";
import { formatCurrency } from "../utils/helper";
import { useCart } from "../store/useCart";

type PropsType = {
  item: ProductsType;
};

const CartItem = ({ item }: PropsType) => {
  const removeFromCart = useCart((state) => state.removeFromCart);

  return (
    <>
      <div className="flex justify-between py-2">
        <div>
          <h3 className="h3">{item.name}</h3>
          <div className="flex items-center gap-4">
            <p className="text-[20px] font-extrabold tracking-wider text-rose-700">
              {item.qty}x
            </p>
            <p className="ml-4 text-[17px] font-semibold text-stone-500">
              @{formatCurrency(item.price)}
            </p>
            <p className="text-[17px] font-semibold text-stone-600">
              {formatCurrency((item.qty as number) * item.price)}
            </p>
          </div>
        </div>
        <button onClick={() => removeFromCart(item.id)}>
          <HiOutlineXCircle className="h-8 w-8 stroke-stone-400" />
        </button>
      </div>
    </>
  );
};

export default CartItem;
