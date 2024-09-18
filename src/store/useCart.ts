import { create } from "zustand";
import { devtools } from "zustand/middleware";

import { ProductsType } from "./useProducts";

type UseCartType = {
  cart: ProductsType[];
  addToCart: (product: ProductsType) => void;
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
  removeFromCart: (id: string) => void;
};

export const useCart = create<UseCartType>()(
  devtools((set) => ({
    cart: [],
    addToCart: (product: ProductsType) =>
      set((state) => ({ cart: [...state.cart, product] })),
    increaseQuantity: (id: string) => {
      return set((state) => {
        const cartItem = state.cart.find((item) => item.id === id);
        if (!cartItem) return { cart: state.cart };
        const filteredItem = state.cart.filter((item) => item.id !== id);
        const addedQuantity = {
          ...cartItem,
          qty: cartItem.qty + 1,
        };
        return { cart: [...filteredItem, addedQuantity] };
      });
    },
    decreaseQuantity: (id: string) => {
      return set((state) => {
        const cartItem = state.cart.find((item) => item.id === id);
        if (!cartItem) return { cart: state.cart };
        const filteredItem = state.cart.filter((item) => item.id !== id);
        if (cartItem.qty - 1 == 0) {
          return { cart: filteredItem };
        }
        const decreaseQuantity = { ...cartItem, qty: cartItem.qty - 1 };
        return { cart: [...filteredItem, decreaseQuantity] };
      });
    },
    removeFromCart: (id: string) => {
      return set((state) => {
        const filteredCart = state.cart.filter((item) => item.id !== id);
        return { cart: filteredCart };
      });
    },
  })),
);
