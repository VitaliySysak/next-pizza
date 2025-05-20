"use client";

import React from "react";
import { cn } from "@/src/lib/utils";
import { Title } from "./title";
import { Button } from "@/src/components/ui";
import { GroupVariants, IngredientItem, PizzaImage } from "@/src/components/shared";
import { PizzaSize, PizzaType, pizzaTypes } from "@/src/constants/pizza";
import { Ingredient, ProductItem } from "@prisma/client";
import { usePizzaOptions } from "@/src/hooks";
import { getPizzaDetails } from "@/src/lib";

interface Props {
  imageUrl: string;
  name: string;
  ingredients: Ingredient[];
  items: ProductItem[];
  onSubmit: (itemId: number, ingredients: number[]) => void;
  loading?: boolean;
  className?: string;
}

export const ChoosePizzaForm: React.FC<Props> = ({ name, items, imageUrl, ingredients, loading, className, onSubmit }) => {
  const { size, type, selectedIngredients, availableSizes, currentItemId, setSize, setType, toggleIngredient } =
    usePizzaOptions(items);
  const { totalPrice, textDetails } = getPizzaDetails(type, size, items, ingredients, selectedIngredients);

  const handleClickAdd = () => {
    if (currentItemId) {
      onSubmit(currentItemId, Array.from(selectedIngredients));
    }
  };

  return (
    <div className={cn(className, "flex flex-1 flex-col sm:flex-row items-center")}>
      <PizzaImage size={size} imageUrl={imageUrl} />

      <div className="lg:w-[490px] bg-[#FCFCFC] p-7 ">
        <Title text={name} size="md" className="font-extrabold mb-1" />

        <p className="text-gray-400">{textDetails}</p>

        <div className="flex flex-col gap-4 mt-5">
          <GroupVariants items={availableSizes} value={String(size)} onClick={(value) => setSize(Number(value) as PizzaSize)} />
          <GroupVariants items={pizzaTypes} value={String(type)} onClick={(value) => setType(Number(value) as PizzaType)} />
        </div>
        <div className="bg-gray-50 p-5 rounded-md lg:h-[420px] lg:overflow-auto scrollbar mt-5">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 ">
            {ingredients.map((ingredient) => (
              <IngredientItem
                key={ingredient.id}
                name={ingredient.name}
                imageUrl={ingredient.imageUrl}
                price={ingredient.price}
                onClick={() => toggleIngredient(ingredient.id)}
                active={selectedIngredients.has(ingredient.id)}
              />
            ))}
          </div>
        </div>

        <Button loading={loading} onClick={handleClickAdd} className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10">
          Add to Cart for ${totalPrice}
        </Button>
      </div>
    </div>
  );
};
