import React from "react";
import { cn } from "@/shared/lib/utils";
import { Plus } from "lucide-react";
import { Button } from "@/shared/components/ui";
import { Title, CountButton } from "@/shared/components/shared"
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
          <Image className="w-[212px] h-[212px]" width={200} height={200} src={imageUrl} alt={name} priority />
        </div>

        <Title text={name} size="sm" className="mb-1 mt-3 font-bold" />
        <p className="text-sm text-gray-400">
          Chicken, mozzarella, cheddar and parmesan cheeses, cheese sauce, tomatoes, Alfredo sauce, garlic.
        </p>
      </Link>
      <div className="flex justify-between items-center mt-4">
        <span className="text-[20px]">
          from <b>${price}</b>
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
