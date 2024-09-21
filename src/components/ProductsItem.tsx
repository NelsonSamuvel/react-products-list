import { ProductsType } from "../store/useProducts";
import { formatCurrency } from "../utils/helper";
import AddItem from "./AddItem";

type PropsType = {
  product: ProductsType;
  addToCart: (product: ProductsType) => void;
  cart: ProductsType[];
};

const ProductsItem = ({ product, addToCart, cart }: PropsType) => {
  const foundCart = cart.find((item) => item.id === product.id);

  return (
    <li>
      <div className="relative">
        <img
          src={product.image.mobile}
          alt=""
          className={`rounded-md sm:hidden ${foundCart?.id === product.id ? "border-2 border-rose-700" : ""}`}
        />
        <AddItem product={product} addToCart={addToCart} cart={cart} />
      </div>
      <div className="mt-10 space-y-1">
        <p className="text-stone-600">{product.category}</p>
        <p className="text-lg font-semibold">{product.name}</p>
        <p className="text-lg font-semibold text-rose-600">
          {formatCurrency(product.price)}
        </p>
      </div>
    </li>
  );
};

export default ProductsItem;
