"use client";

import React from "react";
import { cn } from "@/shared/lib/utils";
import { Title } from "./title";
import { Button } from "../ui";
import { GroupVariants, PizzaImage } from "@/shared/components/shared";
import { PizzaSize, pizzaSizes, PizzaType, pizzaTypes } from "@/shared/constants/pizza";
import { Ingredient } from "@prisma/client";

interface Props {
  imageUrl: string;
  name: string;
  ingredients: Ingredient[];
  items?: any[];
  loading?: boolean;
  onSubmit?: (itemId: number, ingredients: number[]) => void;
  className?: string;
}

export const ChoosePizzaForm: React.FC<Props> = ({ name, items, imageUrl, ingredients, onSubmit, className }) => {
  const [size, setSize] = React.useState<PizzaSize>(40);
  const [type, setType] = React.useState<PizzaType>(1);

  const textDetails = "30 cm, classic dough 30";
  const totalPrice = 100;
  return (
    <div className={cn(className, "flex flex-1")}>
      <PizzaImage size={size} imageUrl={imageUrl} />

      <div className="w-[490px] bg-[#FCFCFC] p-7">
        <Title text={name} size="md" className="font-extrabold mb-1" />

        <p className="text-gray-400">{textDetails}</p>

        <div className="flex flex-col gap-4 mt-5">
          <GroupVariants items={pizzaSizes} value={String(size)} onClick={(value) => setSize(Number(value) as PizzaSize)} />
          <GroupVariants items={pizzaTypes} value={String(type)} onClick={(value) => setType(Number(value) as PizzaType)} />
        </div>

        <Button className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10">Add to Cart for ${totalPrice}</Button>
      </div>
    </div>
  );
};
