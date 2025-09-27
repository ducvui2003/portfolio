import { useState } from "react";
import cn from "../util/cn";

type Theme = "light" | "dark";

const Switch = () => {
  const currentMode: Theme =
    document.documentElement.dataset?.theme === "dark" ? "dark" : "light";
  const [mode, setMode] = useState<Theme>(currentMode);

  const changeTheme = (theme: Theme) => {
    if (theme === "light") {
      document.documentElement.dataset.theme = "light";
      setMode("light");
    } else {
      document.documentElement.dataset.theme = "dark";
      setMode("dark");
    }
  };

  return (
    <div className="flex aspect-square flex-col items-center justify-center px-4 py-5">
      <div className="color relative size-40 rounded-full bg-[image:var(--gradient-switcher)]">
        <span className="size-30 absolute right-0 origin-top-right scale-0 rounded-full bg-[#26242e] transition-transform duration-500 dark:scale-100"></span>
      </div>
      <div className="relative mt-7 flex h-[50px] w-[200px] rounded-3xl bg-gray-200 text-center font-serif text-sm font-bold text-black dark:bg-[#222632] dark:text-[#858b92]">
        <span
          className="absolute-center-y z-20 w-[100px] leading-[50px]"
          onClick={() => changeTheme("light")}
        >
          Light
        </span>
        <span
          className="absolute-center-y right-0 z-20 w-[100px] leading-[50px]"
          onClick={() => changeTheme("dark")}
        >
          Dark
        </span>
        <span
          className={cn(
            "absolute-center-y shadow-2xs left-0 z-10 h-[50px] w-[100px] rounded-3xl bg-white transition-transform duration-300 dark:bg-[#34323d]",
            {
              "translate-x-0": mode === "light",
              "translate-x-full": mode === "dark",
            },
          )}
        ></span>
      </div>
    </div>
  );
};

export default Switch;
