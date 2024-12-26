import React from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { Title } from "./title";
import { CountButton } from "./count-button";
import Image from "next/image";
import Link from "next/link";

interface Props {
  id: number;
  name: string;
  price: number;
  count?: number;
  imageUrl: string;
  className?: string;
}

export const ProductCard: React.FC<Props> = ({ id, name, price, count, imageUrl, className }) => {
  return (
    <div className={cn(className)}>
      <Link href={`/product/${id}`}>
        <div className="flex justify-center p-6 bg-secondary rounded-lg h-[260px]">
          <Image width={215} height={215} src={imageUrl} alt={name} style={{ width: "auto", height: "auto" }} />
        </div>
      </Link>
      <Title text={name} size="sm" className="mb-1 mt-3 font-bold" />
      <p className="text-sm text-gray-400">Chicken, mozzarella, cheddar and parmesan cheeses, cheese sauce, tomatoes, Alfredo sauce, garlic.</p>

      <div className="flex justify-between items-center mt-4">
        <span className="text-[20px]">
          от <b>{price} $</b>
        </span>

        {count ? (
          <CountButton value={count} size="lg" />
        ) : (
          <Button variant="secondary">
            <Plus size={20} className="mr-1" />
            Add
          </Button>
        )}
      </div>
    </div>
  );
};
