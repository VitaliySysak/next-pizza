import { cn } from "@/src/lib/utils";
import React from "react";
import { Skeleton } from "../ui";

interface CheckoutItemsDetailsProps {
  title?: React.ReactNode;
  value?: number;
  loading: boolean;
  className?: string;
}

export const CheckoutItemsDetails: React.FC<CheckoutItemsDetailsProps> = ({ title, value, loading, className }) => {
  return (
    <div className={cn("flex my-4", className)}>
      <span className="flex flex-1 text-lg text-neutral-500">
        {title}
        <div className="flex-1 border-b border-dashed"></div>
      </span>

      {loading ? <Skeleton className="w-24 h-6 rounded-[6px]" /> : <span className="font-bold text-lg">${value}</span>}
    </div>
  );
};
