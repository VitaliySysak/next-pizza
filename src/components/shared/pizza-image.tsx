import React from "react";
import { cn } from "@/src/lib/utils";
import Image from "next/image";

interface Props {
  className?: string;
  imageUrl: string;
  size: 20 | 30 | 40;
}
export const PizzaImage: React.FC<Props> = ({ imageUrl, size, className }) => {
  return (
    <div className={cn("flex items-center justify-center lg:flex-1 relative w-full h-[300px] mt-16 lg:mt-0", className)}>
      <Image
        width={300}
        height={300}
        src={imageUrl}
        alt="Logo"
        className={cn("relative left-2 top-2 transition-all z-10 duration-300 mr-4", {
          "w-[200px] h-[200px] lg:w-[300px] lg:h-[300px]": size === 20,
          "w-[300px] h-[300px] lg:w-[400px] lg:h-[400px]": size === 30,
          "w-[350px] h-[350px] lg:w-[500px] lg:h-[500px]": size === 40,
        })}
      />

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed border-2 rounded-full border-gray-100 w-[260px] h-[260px] lg:w-[360px] lg:h-[360px]" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed border-2 rounded-full border-gray-200 w-[320px] h-[320px] lg:w-[460px] lg:h-[460px]" />
    </div>
  );
};
