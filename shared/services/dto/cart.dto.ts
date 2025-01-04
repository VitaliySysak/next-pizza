import { Cart, CartItem, Product, ProductItem } from "@prisma/client";

export type CartItemDTO = CartItem & { productItem: ProductItem & { product: Product }, ingredients: ProductItem[] };

export interface CartDTO extends Cart {
  items: CartItemDTO[];
}
