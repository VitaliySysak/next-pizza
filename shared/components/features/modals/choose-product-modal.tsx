"use client";

import { Dialog, DialogContent, DialogTitle } from "@/shared/components/ui/dialog";
import { cn } from "@/shared/lib/utils";
import React from "react";
import { useRouter } from "next/navigation";
import { ProductWithRelations } from "@/@types/prisma";
import { ProductForm } from "@/shared/components/features";
import { Description } from "@radix-ui/react-dialog";
import { useCartStore } from "@/shared/store";
import toast from "react-hot-toast";

interface Props {
  product: ProductWithRelations;
  className?: string;
}

export const ChooseProductModal: React.FC<Props> = ({ product, className }) => {
  const router = useRouter();

  return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
      <DialogTitle></DialogTitle>
      <DialogContent className={cn("p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden", className)}>
        <ProductForm product={product} onSubmit={()=> router.back() } />
      </DialogContent>
      <Description />
    </Dialog>
  );
};
