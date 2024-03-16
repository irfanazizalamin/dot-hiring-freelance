import { type ButtonHTMLAttributes, type ReactNode } from "react";
import clsx from "clsx";

type buttonVariant = "primary" | "secondary" | "tertiary";
type buttonSize = "sm" | "md" | "lg";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: buttonVariant;
  size?: buttonSize;
  children: ReactNode;
}

export default function Button({
  variant = "primary",
  size = "sm",
  children,
  className,
  ...props
}: Props) {
  return (
    <>
      <button
        className={clsx(
          "select-none py-3 px-6 text-center align-middle font-sans transition-all",
          "hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none hover:shadow-gray-400/20",
          className,
          size === "sm" && "px-2 py-2 text-xs rounded-md",
          size === "md" && "px-4 py-2 text-sm rounded-md",
          size === "lg" && "px-5 py-3 text-base rounded-lg",
          variant === "primary" && "bg-red-500 text-white",
          variant === "secondary" && "border border-red-500 text-red-500",
          variant === "tertiary" && "text-black hover:shadow-none hover:underline"
        )}
        type="button"
        {...props}
      >
        {children}
      </button>
    </>
  );
}
