// src/components/ui/checkbox.tsx
import * as React from "react";
import { cn } from "@/lib/utils";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(({ className, ...props }, ref) => {
  return (
    <input
      type="checkbox"
      ref={ref}
      className={cn("form-checkbox", className)}
      {...props}
    />
  );
});

Checkbox.displayName = "Checkbox";

export { Checkbox };
