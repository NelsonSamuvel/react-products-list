import { ProductsType } from "../store/useProducts";
import { formatCurrency } from "../utils/helper";
import AddItem from "./AddItem";

type PropsType = {
  product: ProductsType;
};

const ProductsItem = ({ product }: PropsType) => {
  return (
    <li>
      <div className="relative">
        <img
          src={product.image.mobile}
          alt=""
          className="rounded-md sm:hidden"
        />
        <AddItem />
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
