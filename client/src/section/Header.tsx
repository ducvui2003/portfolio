import { useEffect, useRef, useState } from "react";
import vn from "../assets/vn.svg";
import Link from "../component/Link";
import { AUTHOR } from "../util/const";
import { CiMenuBurger } from "react-icons/ci";
import cn from "../util/cn";
import { isCurrentBreakpoint } from "../util/mediaQuery";

const Header = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const [activeMenuMobile, setActiveMenuMobile] = useState<boolean>(false);
  const isPc = isCurrentBreakpoint("pc");

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
          <LinkItem title="Home" href="/" />
          <LinkItem title="About" href="/about" />
          <LinkItem title="Tools" href="/tool" />
          <LinkItem title="Projects" href="/project" />
          <LinkItem title="Blogs" href="/blog" />
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
        <div
          className={cn(
            "absolute left-4 right-4 top-full hidden flex-col rounded-3xl bg-white shadow-lg",
            activeMenuMobile ? "flex" : "hidden",
          )}
        >
          <LinkItemInline
            className="border-gray-300 bg-transparent py-2 text-center"
            title="Home"
            href="/"
          />
          <LinkItemInline
            className="border-gray-300 bg-transparent py-2 text-center"
            title="About"
            href="/about"
          />
          <LinkItemInline
            className="border-gray-300 bg-transparent py-2 text-center"
            title="Tools"
            href="/tool"
          />
          <LinkItemInline
            className="border-gray-300 bg-transparent py-2 text-center"
            title="Projects"
            href="/project"
          />
          <LinkItemInline
            className="border-gray-300 bg-transparent py-2 text-center"
            title="Blogs"
            href="/blog"
          />
        </div>
      </div>
    </header>
  );
};

const LinkItem = ({
  title,
  href,
  className,
}: {
  title: string;
  href: string;
  className?: string;
}) => {
  return (
    <Link
      to={href}
      activeClassName="border-[1px] border-inherit rounded-3xl"
      className={cn(
        "min-w-[100px] bg-gradient-to-r from-rose-500 to-blue-600 bg-clip-text px-4 py-1 text-center text-xl text-transparent",
        className,
      )}
    >
      {title}
    </Link>
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
  return (
    <Link
      to={href}
      activeClassName="border-[1px] border-inherit rounded-3xl"
      className={cn("min-w-[100px]", className)}
    >
      <span className="bg-gradient-to-r from-rose-500 to-blue-600 bg-clip-text px-4 py-1 text-center text-xl text-transparent">
        {" "}
        {title}
      </span>
    </Link>
  );
};
export default Header;
