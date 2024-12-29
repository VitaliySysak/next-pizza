import React from "react";
import { cn } from "@/shared/lib/utils";
import Image from "next/image";

interface Props {
  className?: string;
  imageUrl: string;
}

export const ProductImage: React.FC<Props> = ({ imageUrl, className }) => {
  return (
    <div className={cn("flex items-center justify-center flex-1 relative w-full", className)}>
      <Image
        width={300}
        height={300}
        className="relative left-2 top-2 transition-all z-10 duration-300 w-[350px] h-[350px]"
        src={imageUrl}
        alt="Logo"
      />
    </div>
  );
};
