"use client";

import { useCategoryStore } from "@/src/store/category";
import { cn } from "@/src/lib/utils";
import { Category } from "@prisma/client";
import Link from "next/link";

interface Props {
  items: Category[];
  className?: string;
}

export const Categories: React.FC<Props> = ({ items, className }) => {
  const categoryActiveId = useCategoryStore((state) => state.activeId);

  return (
    <div className={cn("inline-flex gap-1 bg-gray-50 p-1 rounded-2xl", className)}>
      {items.map(({ name, id }, index) => (
        <Link
          key={index}
          className={cn(
            "flex items-center font-bold h-11 rounded-2xl px-5",
            categoryActiveId === id && "bg-white shadow-md shadow-gray-200 text-primary"
          )}
          href={`/#${name}`}
        >
          {name}
        </Link>
      ))}
    </div>
  );
};
