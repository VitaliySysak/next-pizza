import { cn } from "@/shared/lib/utils";
import { ArrowUpDown } from "lucide-react";

interface SortPopupProps {
  className?: string;
}

export const SortPopup: React.FC<SortPopupProps> = ({ className }) => {
  return (
    <div className={cn("inline-flex items-center gap-1 bg-gray-50 px-5 h-[52px] rounded-2xl cursor-pointer", className)}>
      <ArrowUpDown className="w-4 h-4" />
      <b>Sort by:</b>

      <b className="text-primary">popular</b>
    </div>
  );
};