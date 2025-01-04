import { create } from "zustand";
import { Api } from "../services/api-cient";
import { getCartDetails } from "../lib";
import { CartStateItem } from "../lib/get-cart-details";


export interface CartState {
  loading: boolean;
  error: boolean;
  totalAmount: number;
  items: CartStateItem[];

  /* Getting products from cart */
  fetchCartItems: () => Promise<void>;

  /* request for updating products quantity */
  updateItemQuantity: (id: number, quantity: number) => Promise<void>;

  /* request for adding products to cart */
  addCartItem: (values: any) => Promise<void>;

  /* request for deleting products from cart */
  removeCartItem: (id: number) => Promise<void>;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  error: false,
  loading: true,
  totalAmount: 0,

  fetchCartItems: async () => {
    try {
      set({ loading: true, error: false });
      const data = await Api.cart.fetchCart();
      set(getCartDetails(data));
    } catch (error) {
      console.log("Error while value:", error);
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },

  removeCartItem: async (id: number) => {},
  updateItemQuantity: async (id: number, quantity: number) => {},
  addCartItem: async (values: any) => {},
}));
