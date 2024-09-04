import { CgDetailsMore } from "react-icons/cg";
import Button from "../component/Button";
import Link from "../component/Link";
import Switch from "../component/Switch";
import { isCurrentBreakpoint } from "../util/mediaQuery";
import Drawer from "./Drawer";
import { useState } from "react";

const Header = () => {
  const isMobile = isCurrentBreakpoint("xs");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="d-flex py-7">
      <div className="flex items-center justify-between">
        {isMobile && (
          <CgDetailsMore
            size={28}
            className="text-primary dark:text-primary-dark"
            onClick={() => setIsOpen((state) => !state)}
          />
        )}
        <Link>Home</Link>
        {!isMobile && (
          <>
            <Link className="ms-auto font-medium">Project</Link>
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
                <Link className="text-lg font-medium">Project</Link>
              </div>
              <div className="border-b-[1px] border-slate-400 py-2 text-center">
                <Link className="block text-lg font-medium" variant="solid">
                  Contact
                </Link>
              </div>
            </div>
          </Drawer>
        )}
      </div>
    </div>
  );
};
export default Header;
