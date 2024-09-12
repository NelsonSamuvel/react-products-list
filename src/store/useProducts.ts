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
    set({ isLoading: true, error: null });
    try {
      const res = await fetch("http://localhost:5000/products");
      if (!res.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await res.json();
      set({ products: data, isLoading: false });
    } catch (err) {
      if (err instanceof Error) {
        set({ error: err.message, isLoading: false });
      } else {
        set({ error: "An unknown error occurred", isLoading: false });
      }
    }
  },
}));
