"use client"

import React from "react";
import { cn } from "@/lib/utils";
import { ProductImage } from "./product-image";
import { Title } from "./title";
import { Button } from "../ui";

interface Props {
  imageUrl: string;
  name: string;
  ingredients: any[];
  items?: any[];
  loading?: boolean;
  onSubmit?: (itemId: number, ingredients: number[]) => void;
  className?: string;
}

export const ChoosePizzaForm: React.FC<Props> = ({
  name,
  items,
  imageUrl,
  ingredients,
  onSubmit,
  className,
}) => {
  const textDetails = "30 cm, classic dough 30";
  const totalPrice = 100;
  return (
    <div className={cn(className, "flex flex-1")}>
      <ProductImage imageUrl={imageUrl} size={30} />

      <div className="w-[490px] bg-[#FCFCFC] p-7">
        <Title text={name} size="md" className="font-extrabold mb-1" />

        <p className="text-gray-400">{textDetails}</p>

        <Button className="h-[55px] px-10 text-base rounded-[18px] w-full">
          Add to Cart for ${totalPrice}
        </Button>
      </div>
    </div>
  );
};
