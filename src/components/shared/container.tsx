import { cn } from "@/src/lib/utils";
import React from "react";

interface Props {
  className?: string;
}

export const Container: React.FC<React.PropsWithChildren<Props>> = ({ className, children }) => {
  return <div className={cn("mx-auto max-w-[340px] sm:max-w-[600px] md:max-w-[800px] lg:max-w-[980px] xl:max-w-[1280px]", className)}>{children}</div>;
};
