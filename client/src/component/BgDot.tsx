import { ReactNode } from "react";
import cn from "../util/cn";

type BgDotProps = {
  children?: ReactNode;
};

export function BgDot({ children }: BgDotProps) {
  return (
    <div className="min-h-[100vh] w-full items-center justify-center">
      <div
        className={cn(
          "[background-size:45px_45px]",
          "[background-image:radial-gradient(#d4d4d4_1px,transparent_2px)]",
          "dark:[background-image:radial-gradient(#9e9797_1px,#1a1a1a_1px)]",
        )}
      >
        {children}
      </div>
    </div>
  );
}
