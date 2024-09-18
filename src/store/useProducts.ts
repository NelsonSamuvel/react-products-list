import { create } from "zustand";

type ImageType = {
  thumbnail: string;
  mobile: string;
  tablet: string;
  desktop: string;
};

export type ProductsType = {
  image: ImageType;
  name: string;
  category: string;
  price: number;
  qty: number;
  id: string;
};

type UseProductsType = {
  products: ProductsType[];
  isLoading: boolean;
  getProducts: () => Promise<void>;
  error: string | null;
};

export const useProducts = create<UseProductsType>((set) => ({
  products: [],
  isLoading: false,
  error: null,
  getProducts: async () => {
    try {
      set({ isLoading: true, error: null });
      const res = await fetch("http://localhost:5000/products");
      if (!res.ok) {
        throw new Error("Products not found");
      }
      const data = await res.json();
      set({ products: data });
    } catch (err) {
      set({
        error: err instanceof Error ? err.message : "An unknown error occurred",
      });
    } finally {
      set({ isLoading: false });
    }
  },
}));
