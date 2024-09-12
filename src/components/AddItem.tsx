import Button from "../ui/Button";
import { HiOutlineShoppingCart } from "react-icons/hi2";

const AddItem = () => {
  return (
    <div className="absolute -bottom-6 left-[50%] -translate-x-[50%] w-full">
      <Button type="secondary">
        <HiOutlineShoppingCart className="icon" />
        <span>Add Item</span>
      </Button>
    </div>
  );
};

export default AddItem;
