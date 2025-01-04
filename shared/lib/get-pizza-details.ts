import { Ingredient, ProductItem } from "@prisma/client";
import { calculateTotalPizzaPrice } from "./calculate-total-pizza-price";
import { mapPizzaType, PizzaSize, PizzaType } from "../constants/pizza";

export const getPizzaDetails = (
  type: PizzaType,
  size: PizzaSize,
  items: ProductItem[],
  ingredients: Ingredient[],
  selectedIngredients: Set<number>
) => {
  const totalPrice = calculateTotalPizzaPrice(type, size, items, ingredients, selectedIngredients);
  const textDetails = `${size} cm, ${mapPizzaType[type]} dough`;

  return { totalPrice, textDetails };
};
