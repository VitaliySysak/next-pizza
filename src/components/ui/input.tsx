import * as React from "react";

import { cn } from "@/src/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(({ name, className, type, placeholder, min, max, value, onChange }, ref) => {
  return (
    <input
      name={name}
      type={type}
      className={cn(
        "flex h-10 w-full rounded-md border border-input",
        "bg-background px-3 py-2 text-base ring-offset-background",
        "file:border-0 file:bg-transparent file:text-sm file:font-medium",
        "file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none",
        "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        "disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      ref={ref}
      placeholder={placeholder}
      min={min}
      max={max}
      value={value}
      onChange={onChange}
    />
  );
});
Input.displayName = "Input";
