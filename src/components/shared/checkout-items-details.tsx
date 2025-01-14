import { cn } from "@/src/lib/utils";
import React from "react";

interface CheckoutItemsDetailsProps {
  title?: React.ReactNode;
  value?: string;
  className?: string;
}

export const CheckoutItemsDetails: React.FC<CheckoutItemsDetailsProps> = ({ title, value, className }) => {
  return (
    <div className={cn("flex my-4", className)}>
      <span className="flex flex-1 text-lg text-neutral-500">
        {title}
        <div className="flex-1 border-b border-dashed"></div>
      </span>

      <span className="font-bold text-lg">${value}</span>
    </div>
  );
};
