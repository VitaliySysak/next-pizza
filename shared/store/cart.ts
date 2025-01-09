import { create } from "zustand";
import { Api } from "../services/api-cient";
import { getCartDetails } from "../lib";
import { CartStateItem } from "../lib/get-cart-details";
import { CreateCartItemValues } from "../services/dto/cart.dto";

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
  addCartItem: (values: CreateCartItemValues) => Promise<void>;

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
      const data = await Api.cart.getCart();
      set(getCartDetails(data));
    } catch (error) {
      console.log("Error while fetchCartItems:", error);
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },

  updateItemQuantity: async (id: number, quantity: number) => {
    try {
      set({ loading: true, error: false });
      const data = await Api.cart.updateItemQuantity(id, quantity);
      set(getCartDetails(data));
    } catch (error) {
      console.log("Error while updateItemQuantity:", error);
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },

  addCartItem: async (values: CreateCartItemValues) => {
    try {
      set({ loading: true, error: false });
      const data = await Api.cart.addCartItem(values);
      set(getCartDetails(data));
    } catch (error) {
      console.log("Error while removeCartItem:", error);
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },

  removeCartItem: async (id: number) => {
    try {
      set((state) => ({
        loading: true,
        error: false,
        items: state.items.map((item) => (item.id === id ? { ...item, disabled: true } : item)),
      }));
      const data = await Api.cart.removeCartItem(id);
      set(getCartDetails(data));
    } catch (error) {
      console.log("Error while removeCartItem:", error);
      set({ error: true });
    } finally {
      set((state) => ({ loading: false, items: state.items.map((items) => ({ ...items, disabled: false })) }));
    }
  },
}));
