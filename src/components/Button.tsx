import type { ReactElement } from "react";

interface ButtonProps {
  variant: "primary" | "secondary";
  text: string;
  startIcon?: ReactElement; 
}

const variantClasses = {
  primary: "bg-purple-600 text-white hover:bg-purple-700",
  secondary: "bg-purple-200 text-purple-700 hover:bg-purple-300",
};

export function Button({ variant, text, startIcon }: ButtonProps) {
  return (
    <button
      className={`flex items-center gap-2 px-4 py-2 rounded-md font-medium transition-colors ${variantClasses[variant]}`}
    >
      {startIcon && <span>{startIcon}</span>}
      <span>{text}</span>
    </button>
  );
}
