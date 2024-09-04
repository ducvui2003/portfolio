import { cva, VariantProps } from "class-variance-authority";
import { AnchorHTMLAttributes, ReactNode } from "react";
import cn from "../util/cn";
type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  VariantProps<typeof linkVariants> & {
    children?: ReactNode;
  };

const linkVariants = cva("text-base text-primary dark:text-primary-dark", {
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
    underline: {
      true: "underline decoration-solid",
      false: "no-underline",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
    underline: false,
  },
});
const Link = ({ variant, size, className, children, ...props }: LinkProps) => {
  return (
    <a className={cn(linkVariants({ variant, size, className }))} {...props}>
      {children}
    </a>
  );
};

export default Link;
