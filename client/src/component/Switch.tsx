import { useState } from "react";
import { CiCloudMoon, CiSun } from "react-icons/ci";
import { FaCheck } from "react-icons/fa";
import { MdUnfoldMore } from "react-icons/md";
import Button from "./Button";

type Theme = "light" | "dark";

const Switch = () => {
  const currentMode: Theme = document.documentElement.classList.contains("dark")
    ? "dark"
    : "light";
  const [mode, setMode] = useState<Theme>(currentMode);

  const changeTheme = (theme: Theme) => {
    if (theme === "light") {
      document.documentElement.classList.remove("dark");
      setMode("light");
    } else {
      document.documentElement.classList.add("dark");
      setMode("dark");
    }
  };

  const [show, setShow] = useState<boolean>(false);

  return (
    <div>
      <label
        id="listbox-label"
        className="block text-sm font-medium leading-6 text-gray-900"
      ></label>
      <div className="relative" onClick={() => setShow((state) => !state)}>
        <Button
          type="button"
          className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
          aria-haspopup="listbox"
          aria-expanded="true"
          aria-labelledby="listbox-label"
        >
          <span className="flex items-center">
            {mode == "light" ? <CiSun size={25} /> : <CiCloudMoon size={25} />}
            <span className="ml-3 block capitalize">{mode}</span>
          </span>
          <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
            <MdUnfoldMore />
          </span>
        </Button>
        {show && (
          <ul
            className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
            role="listbox"
            aria-labelledby="listbox-label"
            aria-activedescendant="listbox-option-3"
          >
            <li
              className={`relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 ${mode == "dark" && "cursor-pointer"}`}
              id="listbox-option-0"
              role="option"
              onClick={() => changeTheme("light")}
            >
              <div className="flex items-center">
                <CiSun size={25} />
                <span className="ml-3 block truncate font-normal capitalize">
                  light
                </span>
              </div>
              {mode == "light" && (
                <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600">
                  <FaCheck />
                </span>
              )}
            </li>
            <li
              className={`relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 ${mode == "light" && "cursor-pointer"}`}
              id="listbox-option-0"
              role="option"
              onClick={() => changeTheme("dark")}
            >
              <div className="flex items-center">
                <CiCloudMoon size={25} />
                <span className="ml-3 block truncate font-normal capitalize">
                  dark
                </span>
              </div>
              {mode == "dark" && (
                <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600">
                  <FaCheck />
                </span>
              )}
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Switch;
