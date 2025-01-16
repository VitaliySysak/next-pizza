import React from "react";
import { cn } from "@/src/lib/utils";

interface Props {
  className?: string;
}

export const RequiredSymbol: React.FC<Props> = ({ className }) => {
  return <span className={cn("text-red-500", className)}>*</span>;
};
