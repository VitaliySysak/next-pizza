import { cn } from "@/src/lib/utils";
import React from "react";

interface Props {
  className?: string;
}

export const Container: React.FC<React.PropsWithChildren<Props>> = ({ className, children }) => {
  return <div className={cn("mx-auto max-w-[800px] sm:max-w-[400px] md:max-w-[800px] lg:max-w-[1280px]", className)}>{children}</div>;
};
