import { CgDetailsMore } from "react-icons/cg";
import Button from "../component/Button";
import Link from "../component/Link";
import Switch from "../component/Switch";
import { isCurrentBreakpoint } from "../util/mediaQuery";
import Drawer from "./Drawer";
import { useRef, useState } from "react";

const Header = () => {
  const headerRef = useRef<HTMLElement>(null);
  const isMobile = isCurrentBreakpoint("xs");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header
      className="d-flex bg-[rgba(15, 23, 42, .75)] sticky inset-x-0 top-0 z-20 backdrop-blur"
      ref={headerRef}
    >
      <div className="xs:px-6 container mx-auto flex items-center justify-between py-7">
        {isMobile && (
          <CgDetailsMore
            size={28}
            className="text-primary dark:text-primary-dark"
            onClick={() => setIsOpen((state) => !state)}
          />
        )}
        <Link
          to={"/"}
          underline={true}
          activeClassName="relative before:-left-2 before:h-[10px] before:w-[calc(100%+(8px*2))] before:bg-secondary before:block before:rounded-md"
          className="dark:before:bg-linear font-medium before:absolute before:-bottom-3 before:w-0 before:transition-all before:delay-100 before:ease-in-out before:content-['']"
        >
          Home
        </Link>
        {!isMobile && (
          <>
            <Link
              to={"/project"}
              underline={true}
              activeClassName="relative before:-left-2 before:h-[10px] before:w-[calc(100%+(8px*2))] before:bg-secondary before:block before:rounded-md"
              className="dark:before:bg-linear ms-auto font-medium before:absolute before:-bottom-3 before:w-0 before:transition-all before:delay-100 before:ease-in-out before:content-['']"
            >
              Project
            </Link>
            <Button
              className="xs:ml-8 xs:mr-0 ml-20 mr-3 font-medium"
              variant="solid"
            >
              Contact
            </Button>
            <Switch />
          </>
        )}
        {isMobile && (
          <Drawer
            isOpen={isOpen}
            onClose={() => {
              setIsOpen(false);
            }}
          >
            <div className="px-4 py-2">
              <Switch />
              <div className="border-b-[1px] border-slate-400 py-2 text-center">
                <Link to={"/project"} className="text-lg font-medium">
                  Project
                </Link>
              </div>
              <div className="border-b-[1px] border-slate-400 py-2 text-center">
                <Link
                  to={"contact"}
                  className="block text-lg font-medium"
                  variant="solid"
                >
                  Contact
                </Link>
              </div>
            </div>
          </Drawer>
        )}
      </div>
    </header>
  );
};
export default Header;
