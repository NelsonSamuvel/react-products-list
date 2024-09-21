import { ProductsType } from "../store/useProducts";
import { formatCurrency } from "../utils/helper";

type PropsType = {
  item: ProductsType;
};

const OrderItem = ({ item }: PropsType) => {
  return (
    <li className="flex items-center gap-4">
      <img src={item.image.thumbnail} alt=""  className="rounded-md"/>
      <div className="grow">
        <h3 className="h3 text-stone-800">{item.name}</h3>
        <div className="flex gap-4 items-center">
          <p className="text-rose-700 text-lg font-medium tracking-wider">{item.qty}x</p>
          <p className="text-gray-600">@ {formatCurrency(item.price)}</p>
        </div>
      </div>
      <h3 className="h3 text-stone-800">
        {formatCurrency((item.qty as number) * item.price)}
      </h3>
    </li>
  );
};

export default OrderItem;
