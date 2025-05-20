"use client";

import { useFilters, useQueryFilters } from "@/src/hooks";
import { cn } from "@/src/lib/utils";
import { ArrowUpDown } from "lucide-react";

interface SortPopupProps {
  className?: string;
}

export const SortPopup: React.FC<SortPopupProps> = ({ className }) => {
  const filters = useFilters();
  useQueryFilters(filters);
  return (
    <div
      className={cn(
        "items-center gap-1 bg-gray-50 px-5 h-[52px] rounded-2xl cursor-pointer hidden md:inline-flex",
        className
      )}>
      <ArrowUpDown className="w-4 h-4" />
      <b>Sort by:</b>

      <b className="text-primary">popular</b>
    </div>
  );
};
