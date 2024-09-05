import Button from "../component/Button";
import image from "../assets/hero.png";
const Hero = () => {
  return (
    <div className="xs:flex-col xs:mt-7 xs:pb-0 relative mt-36 flex items-center justify-center gap-16 pb-14">
      <div className="xs:order-2 xs:text-center xs:items-center flex flex-1 flex-col">
        <span className="font-serif text-xl uppercase text-sub-title dark:text-sub-title-dark">
          Web Developer
        </span>
        <h1 className="xs:text-5xl mt-2.5 text-7xl font-semibold text-secondary dark:bg-linear dark:bg-clip-text dark:text-transparent">
          Erica Font
        </h1>
        <p className="xs:w-full mt-3 w-[500px] tracking-wider text-primary dark:text-primary-dark">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt.
        </p>
        <Button variant="solid" className="mt-7 w-fit">
          Contact me
        </Button>
      </div>
      <div className="xs:order-1 flex-1 select-none">
        <img src={image} className="w-full" alt="" />
      </div>
      <Button className="button-text xs:hidden absolute top-full w-fit translate-x-2/4 translate-y-1 animate-bounce rounded-full p-3 text-purple-700 transition duration-500 ease-in-out hover:bg-white dark:text-sub-title-dark dark:hover:bg-slate-600">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
          />
        </svg>
      </Button>
    </div>
  );
};
export default Hero;
