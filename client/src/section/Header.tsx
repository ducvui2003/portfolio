import { useRef, useState } from "react";
import vn from "../assets/vn.svg";
import Link from "../component/Link";
import { AUTHOR } from "../util/const";
import { CiMenuBurger } from "react-icons/ci";
import cn from "../util/cn";
import { useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const menuItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Tools", path: "/tool" },
  { name: "Projects", path: "/project" },
  { name: "Blogs", path: "/blog" },
];

const Header = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const [activeMenuMobile, setActiveMenuMobile] = useState<boolean>(false);

  return (
    <header className="sticky inset-x-0 top-0 z-20">
      <div
        className="pc:justify-between container flex items-center p-4 font-bold backdrop-blur"
        ref={headerRef}
      >
        <h1 className="dark:before:bg-linear text-xl text-[#075985]">
          {AUTHOR}
        </h1>

        <nav className="pc:flex hidden items-center gap-2 rounded-3xl border-[1px] border-gray-400 p-1">
          {menuItems.map((item) => {
            return <LinkItem title={item.name} href={item.path} />;
          })}
        </nav>

        <div className="pc:ml-0 ml-auto flex items-center gap-2">
          <img
            className="pc:size-5 inline-block size-8 rounded-full object-center"
            src={vn}
            alt="VietNam"
          />
          <span className="font-mono font-medium uppercase dark:text-white">
            Viet Nam
          </span>
        </div>
        <CiMenuBurger
          onClick={() => setActiveMenuMobile((state) => !state)}
          className="pc:hidden ml-5 rounded-md border-[1px] border-gray-400 bg-white p-1 text-3xl hover:cursor-pointer hover:opacity-50"
        />
        <AnimatePresence>
          {activeMenuMobile && (
            <motion.nav
              key="mobileMenu"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute left-0 top-full z-50 flex w-full flex-col items-center gap-6 px-4 py-6 md:hidden"
            >
              <div className="w-full rounded-3xl bg-white shadow-md">
                {menuItems.map((item) => {
                  return (
                    <LinkItemInline
                      title={item.name}
                      href={item.path}
                      className="border-gray-300 bg-transparent py-2 text-center"
                    />
                  );
                })}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

type LinkItemProps = {
  title: string;
  href: string;
  className?: string;
};

const LinkItem = ({ title, href, className }: LinkItemProps) => {
  const location = useLocation();
  const isActive = location.pathname === href;

  return (
    <div className="relative">
      <Link
        to={href}
        className={cn(
          "relative min-w-[100px] px-4 py-1 text-center text-xl font-medium",
          "bg-gradient-to-r from-rose-500 to-blue-600 bg-clip-text text-transparent",
          "transition-opacity hover:opacity-80",
          className,
        )}
      >
        {title}
      </Link>

      {isActive && (
        <motion.div
          layoutId="activeIndicator"
          className="absolute inset-0 rounded-3xl border border-gray-400 px-4 py-1"
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      )}
    </div>
  );
};

const LinkItemInline = ({
  title,
  href,
  className,
}: {
  title: string;
  href: string;
  className?: string;
}) => {
  const location = useLocation();
  const isActive = location.pathname === href;
  return (
    <div className="relative">
      <Link to={href} className={cn("inline-block w-full", className)}>
        <span className="bg-gradient-to-r from-rose-500 to-blue-600 bg-clip-text px-4 py-1 text-center text-xl text-transparent">
          {title}
        </span>
        {isActive && (
          <motion.div
            layoutId="activeIndicator"
            className="absolute inset-0 rounded-3xl border border-gray-400 px-4 py-1"
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          />
        )}
      </Link>
    </div>
  );
};
export default Header;
