import { cva, VariantProps } from "class-variance-authority";
import { AnchorHTMLAttributes, ReactNode } from "react";
import cn from "../util/cn";
import { NavLink, NavLinkProps } from "react-router-dom";
type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  VariantProps<typeof linkVariants> &
  NavLinkProps &
  React.RefAttributes<HTMLAnchorElement> & {
    children?: ReactNode;
    activeClassName?: string;
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
const Link = ({
  to,
  variant,
  underline,
  activeClassName,
  size,
  className,
  children,
  ...props
}: LinkProps) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => {
        return cn(
          linkVariants({ variant, size }),
          isActive ? activeClassName || linkVariants({ underline }) : "",
          className,
        );
      }}
      {...props}
    >
      {children}
    </NavLink>
  );
};

export default Link;
