import { Ingredient, ProductItem } from "@prisma/client";
import { calculationTotalPizzaPrice } from "./calculation-total-pizza-price";
import { mapPizzaType, PizzaSize, PizzaType } from "../constants/pizza";

export const getPizzaDetails = (
  type: PizzaType,
  size: PizzaSize,
  items: ProductItem[],
  ingredients: Ingredient[],
  selectedIngredients: Set<number>
) => {
  const totalPrice = calculationTotalPizzaPrice(type, size, items, ingredients, selectedIngredients);
  const textDetails = `${size} cm, ${mapPizzaType[type]} dough`;

  return {totalPrice, textDetails}
};
