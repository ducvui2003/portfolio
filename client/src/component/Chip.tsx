import { cva, VariantProps } from "class-variance-authority";
import { HTMLAttributes, ReactNode } from "react";
import cn from "../util/cn";

type ChipProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof chipVariants> & {
    children?: ReactNode;
  };

const chipVariants = cva(
  "dark:text-primary text-button tracking-wider  rounded-md bg-secondary px-4 py-2 text-xs uppercase dark:bg-linear ",
  {
    variants: {
      variant: {
        default: "",
        solid: "",
      },
      size: {
        sm: "",
        md: "",
        lg: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  },
);

const Chip = ({ variant, size, children, className, ...props }: ChipProps) => {
  return (
    <div className={cn(chipVariants({ variant, size, className }))} {...props}>
      {children}
    </div>
  );
};

export default Chip;
