'use client'

import React from "react";
import { cn } from "@/lib/utils";

export type Variant = {
  name: string;
  value: string;
  disabled?: boolean;
};

interface Props {
  items: readonly Variant[];
  onClick?: (value: Variant["value"]) => void;
  value?: Variant["value"];
  className?: string;
  selectedValue?: Variant["value"];
}

export const GroupVariants: React.FC<Props> = ({
  items,
  onClick,
  className,
  selectedValue,
}) => {
  return (
    <div
      className={cn(
        className,
        "flex justify-between bg-[#F3F3F7] rounded-3xl p-1 select-none"
      )}
    >
      {items.map((item) => (
        <button
          key={item.name}
          onClick={() => onClick?.(item.value)}
          className={cn(
            "flex items-center justify-center cursor-pointer h-[30px] px-5 flex-1 rounded-3xl transition-all duration-all duration-400 text-sm",
            {
              "bg-white shadow": item.value === selectedValue,
              "test-gray-500 opacity-50 pointer-events-none": item.disabled,
            }
          )}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};