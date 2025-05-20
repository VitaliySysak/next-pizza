"use client";

import React from "react";
import { useIntersection } from "react-use";
import { Title, ProductCard } from "@/src/components/shared";
import { cn } from "@/src/lib/utils";
import { useCategoryStore } from "@/src/store/category";
import { ProductWithRelations } from "@/@types/prisma";

interface ProductsGroupListProps {
  title: string;
  items: ProductWithRelations[];
  categoryId: number;
  listClassName?: string;
  className?: string;
}

export const ProductsGroupList: React.FC<ProductsGroupListProps> = ({ title, items, listClassName, categoryId, className }) => {
  const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);
  const intersectionRef = React.useRef(null);
  const intersection = useIntersection(intersectionRef, { threshold: 0.4 });

  React.useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveCategoryId(categoryId);
    }
  }, [intersection?.isIntersecting]);
  return (
    <div className={className} id={title} ref={intersectionRef}>
      <Title text={title} size="lg" className="font-extrabold mb-5 mx-4 sm:mx-0" />
      <div className={cn("grid grid-cols-1 sm:grid-cols-3 gap-[25px] lg:gap-[50px]", listClassName)}>
        {items.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            imageUrl={product.imageUrl}
            price={product.items[0].price}
            ingredients={product.ingredients}
          />
        ))}
      </div>
    </div>
  );
};
