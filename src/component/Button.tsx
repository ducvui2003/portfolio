import { cva, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, ReactNode } from "react";
import cn from "../util/cn";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    children?: ReactNode;
  };

const buttonVariants = cva("rounded-lg text-base leading-none", {
  variants: {
    variant: {
      default: "text-black  dark:text-button-dark",
      solid: "text-white  bg-secondary  dark:bg-linear dark:text-button-dark ",
      outlined: "border border-black text-white bg-secondary",
    },
    size: {
      sm: "",
      md: "px-5 py-3 font-medium",
      lg: "",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
});

const Button = ({
  children,
  className,
  variant,
  size,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
