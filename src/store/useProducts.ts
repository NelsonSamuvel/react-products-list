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
  qty?: number;
  id: string;
};

type UseProductsType = {
  products: ProductsType[];
  isLoading: boolean;
  // getProducts: () => Promise<void>;
  error: string | null;
};

export const useProducts = create<UseProductsType>(() => ({
  products: [
    {
      image: {
        thumbnail: "./assets/images/image-waffle-thumbnail.jpg",
        mobile: "./assets/images/image-waffle-mobile.jpg",
        tablet: "./assets/images/image-waffle-tablet.jpg",
        desktop: "./assets/images/image-waffle-desktop.jpg",
      },
      name: "Waffle with Berries",
      category: "Waffle",
      price: 6.5,
      id: Math.random().toString(),
    },
    {
      image: {
        thumbnail: "./assets/images/image-creme-brulee-thumbnail.jpg",
        mobile: "./assets/images/image-creme-brulee-mobile.jpg",
        tablet: "./assets/images/image-creme-brulee-tablet.jpg",
        desktop: "./assets/images/image-creme-brulee-desktop.jpg",
      },
      name: "Vanilla Bean Crème Brûlée",
      category: "Crème Brûlée",
      price: 7.0,
      id: Math.random().toString(),
    },
    {
      image: {
        thumbnail: "./assets/images/image-macaron-thumbnail.jpg",
        mobile: "./assets/images/image-macaron-mobile.jpg",
        tablet: "./assets/images/image-macaron-tablet.jpg",
        desktop: "./assets/images/image-macaron-desktop.jpg",
      },
      name: "Macaron Mix of Five",
      category: "Macaron",
      price: 8.0,
      id: Math.random().toString(),
    },
    {
      image: {
        thumbnail: "./assets/images/image-tiramisu-thumbnail.jpg",
        mobile: "./assets/images/image-tiramisu-mobile.jpg",
        tablet: "./assets/images/image-tiramisu-tablet.jpg",
        desktop: "./assets/images/image-tiramisu-desktop.jpg",
      },
      name: "Classic Tiramisu",
      category: "Tiramisu",
      price: 5.5,
      id: Math.random().toString(),
    },
    {
      image: {
        thumbnail: "./assets/images/image-baklava-thumbnail.jpg",
        mobile: "./assets/images/image-baklava-mobile.jpg",
        tablet: "./assets/images/image-baklava-tablet.jpg",
        desktop: "./assets/images/image-baklava-desktop.jpg",
      },
      name: "Pistachio Baklava",
      category: "Baklava",
      price: 4.0,
      id: Math.random().toString(),
    },
    {
      image: {
        thumbnail: "./assets/images/image-meringue-thumbnail.jpg",
        mobile: "./assets/images/image-meringue-mobile.jpg",
        tablet: "./assets/images/image-meringue-tablet.jpg",
        desktop: "./assets/images/image-meringue-desktop.jpg",
      },
      name: "Lemon Meringue Pie",
      category: "Pie",
      price: 5.0,
      id: Math.random().toString(),
    },
    {
      image: {
        thumbnail: "./assets/images/image-cake-thumbnail.jpg",
        mobile: "./assets/images/image-cake-mobile.jpg",
        tablet: "./assets/images/image-cake-tablet.jpg",
        desktop: "./assets/images/image-cake-desktop.jpg",
      },
      name: "Red Velvet Cake",
      category: "Cake",
      price: 4.5,
      id: Math.random().toString(),
    },
    {
      image: {
        thumbnail: "./assets/images/image-brownie-thumbnail.jpg",
        mobile: "./assets/images/image-brownie-mobile.jpg",
        tablet: "./assets/images/image-brownie-tablet.jpg",
        desktop: "./assets/images/image-brownie-desktop.jpg",
      },
      name: "Salted Caramel Brownie",
      category: "Brownie",
      price: 4.5,
      id: Math.random().toString(),
    },
    {
      image: {
        thumbnail: "./assets/images/image-panna-cotta-thumbnail.jpg",
        mobile: "./assets/images/image-panna-cotta-mobile.jpg",
        tablet: "./assets/images/image-panna-cotta-tablet.jpg",
        desktop: "./assets/images/image-panna-cotta-desktop.jpg",
      },
      name: "Vanilla Panna Cotta",
      category: "Panna Cotta",
      price: 6.5,
      id: Math.random().toString(),
    },
  ],
  isLoading: false,
  error: null,
  // getProducts: async () => {
  //   try {
  //     set({ isLoading: true, error: null });
  //     const res = await fetch("http://localhost:5000/products");
  //     if (!res.ok) {
  //       throw new Error("Products not found");
  //     }
  //     const data = await res.json();
  //     set({ products: data });
  //   } catch (err) {
  //     set({
  //       error: err instanceof Error ? err.message : "An unknown error occurred",
  //     });
  //   } finally {
  //     set({ isLoading: false });
  //   }
  // },
}));
