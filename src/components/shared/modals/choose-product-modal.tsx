"use client";

import { Dialog, DialogContent, DialogTitle } from "@/src/components/ui/dialog";
import { cn } from "@/src/lib/utils";
import React from "react";
import { useRouter } from "next/navigation";
import { ProductWithRelations } from "@/@types/prisma";
import { ProductForm } from "@/src/components/shared";
import { Description } from "@radix-ui/react-dialog";

interface Props {
  product: ProductWithRelations;
  className?: string;
}

export const ChooseProductModal: React.FC<Props> = ({ product, className }) => {
  const router = useRouter();

  return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
      <DialogTitle></DialogTitle>
      <DialogContent className={cn("p-0 lg:pt-0 lg:w-[1060px] max-w-[1060px] min-h-[500px] bg-white max-h-screen overflow-y-auto", className)}>
        <ProductForm product={product} onSubmit={() => router.back()} />
      </DialogContent>
      <Description />
    </Dialog>
  );
};
