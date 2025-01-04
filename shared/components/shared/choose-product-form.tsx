"use client";

import React from "react";
import { cn } from "@/shared/lib/utils";
import { Title, ProductImage } from "@/shared/components/shared";
import { Button } from "../ui";

interface Props {
  imageUrl: string;
  name: string;
  price: number;
  loading?: boolean;
  onSubmit?: VoidFunction;
  className?: string;
}

export const ChooseProductForm: React.FC<Props> = ({ name, imageUrl, price, className, onSubmit }) => {
  const textDetails = "30 cm, classic dough 30";
  const totalPrice = 100;
  return (
    <div className={cn(className, "flex flex-1")}>
      <ProductImage imageUrl={imageUrl} />

      <div className="w-[490px] bg-[#FCFCFC] p-7">
        <Title text={name} size="md" className="font-extrabold mb-1" />

        <p className="text-gray-400">{textDetails}</p>

        <Button onClick={onSubmit} className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10">
          Add to Cart for ${price}
        </Button>
      </div>
    </div>
  );
};
