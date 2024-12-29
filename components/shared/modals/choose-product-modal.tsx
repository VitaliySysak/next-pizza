"use client";

import React from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Product } from "@prisma/client";
import { Title } from "../title";
import { useRouter } from "next/navigation";
import { ChoosePizzaForm } from "../choose-pizza-form";

interface Props {
  product: Product;
  className?: string;
}

export const ChooseProductModal: React.FC<Props> = ({ product, className }) => {
  const router = useRouter();
  
  return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
      <DialogContent className="p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden">
        <ChoosePizzaForm imageUrl={product.imageUrl} name={product.name} ingredients={[]} />
      </DialogContent>
    </Dialog>
  );
};