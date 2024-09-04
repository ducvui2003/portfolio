import React, { ReactNode, useEffect } from "react";
type DrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode;
};
const Drawer = ({ isOpen, onClose, children }: DrawerProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen]);
  return (
    <>
      <section
        className={`fixed left-0 top-0 z-[3] h-screen w-10/12 bg-background transition-transform dark:bg-background-dark ${!isOpen && "-translate-x-full"}`}
      >
        {children}
      </section>
      <div
        className={`bg-backdrop fixed left-0 top-0 z-[2] h-screen transition-transform ${isOpen ? "w-full" : "w-0"}`}
        onClick={onClose}
      ></div>
    </>
  );
};

export default Drawer;
