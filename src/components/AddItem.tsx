import { useCart } from "../store/useCart";
import { ProductsType } from "../store/useProducts";
import Button from "../ui/Button";
import {
  HiOutlineMinusCircle,
  HiOutlinePlusCircle,
  HiOutlineShoppingCart,
} from "react-icons/hi2";

type PropsType = {
  product: ProductsType;
  addToCart: (product: ProductsType) => void;
  cart: ProductsType[];
};

const AddItem = ({ product, addToCart, cart }: PropsType) => {
  const inCart = cart.some((item) => item.id === product.id);
  const foundCart = cart.find((item) => item.id === product.id);

  const increaseQuantity = useCart((state) => state.increaseQuantity);
  const decreaseQuantity = useCart((state) => state.decreaseQuantity);

  return (
    <div className="absolute -bottom-6 left-[50%]  w-full -translate-x-[50%]">
      {!inCart ? (
        <Button
          type="secondary"
          onClick={() => addToCart({ ...product })}
        >
          <HiOutlineShoppingCart className="icon" />
          <span>Add Item</span>
        </Button>
      ) : (
        <div className="mx-auto flex w-32 flex-wrap justify-between gap-2 rounded-full border border-none border-stone-400 bg-orange-600 px-2 py-3 font-semibold text-white">
          <button
            onClick={() => decreaseQuantity(product.id)}
            className="hover:rounded-full hover:ring-0 hover:ring-red-400 hover:ring-offset-1"
          >
            <HiOutlineMinusCircle className="icon stroke-white" />
          </button>
          <p>{foundCart?.qty}</p>
          <button
            onClick={() => increaseQuantity(product.id)}
            className="hover:rounded-full hover:ring-0 hover:ring-red-400 hover:ring-offset-1"
          >
            <HiOutlinePlusCircle className="icon stroke-white" />
          </button>
        </div>
      )}
    </div>
  );
};

export default AddItem;
