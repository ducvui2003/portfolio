import avatar from "../assets/avatar.jpg";
import { GoArrowUpRight } from "react-icons/go";
import Github from "../assets/svg/Github";
import {
  AUTHOR,
  FACEBOOK_URL,
  GITHUB_URL,
  GITLAB_URL,
  LINKEDIN_URL,
} from "../util/const";
import Link from "../component/Link";
import Switch from "../component/Switch";
import CarouselSocial from "../component/CarouselSocial";
import Technical from "../component/Technical";
import AboutHomePage from "../component/section/AboutHomePage";
import ProjectHomePage from "../component/section/ProjectHomePage";

const HomePage = () => {
  function getGreeting(date = new Date()) {
    const hour = date.getHours();

    if (hour >= 5 && hour < 12) {
      return "Good Morning";
    } else if (hour >= 12 && hour < 18) {
      return "Good Evening";
    } else {
      return "Good Night";
    }
  }

  return (
    <div className="pc:grid-cols-4 dark:[&>*]:bg-secondary-dark pc:px-0 grid grid-cols-1 gap-4 px-4 pt-4">
      <section className="border-app pc:col-span-2 col-span-1 p-6">
        <div className="size-25 relative">
          <img
            className="block size-full rounded-xl shadow-2xl"
            src={avatar}
            alt=""
          />
          <span className="absolute -right-7 -top-2 translate-x-full select-none text-nowrap rounded-3xl bg-orange-500 px-4 py-2 font-serif font-semibold tracking-wide text-white">
            {getGreeting()}

            <svg
              _ngcontent-ng-c693036278=""
              width="21"
              height="13"
              viewBox="0 0 21 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute -bottom-[11px] left-5 w-5 rotate-2 text-orange-500"
            >
              <path
                d="M20.473.465c-2.222 5.25-5.185 9.662-10.413 12.585C9.04 6.101 6.946 4.072-.096 1.182L3.5 1l14-.5 2.973-.035z"
                fill="currentColor"
              ></path>
            </svg>
          </span>
        </div>

        <p className="text-md Duc Vui mt-3 select-none font-serif leading-[1.67] text-gray-500 dark:text-gray-300">
          I'm{" "}
          <span className="relative inline-block font-sans text-sm font-bold text-black md:text-2xl dark:text-white">
            {AUTHOR}
          </span>
          , a Software Engineer from Ho Chi Minh City, Vietnam, with experience
          across the full stack — from Frontend development and Backend systems
          to APIs and Databases. I enjoy solving complex problems, exploring new
          technologies, and creating applications that bring real value to
          users.
        </p>
      </section>
      <div className="border-app aspect-square overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d501725.4184456823!2d106.36556499987364!3d10.755292862572944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529292e8d3dd1%3A0xf15f5aad773c112b!2zVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1757934281523!5m2!1svi!2s"
          loading="lazy"
          className="size-full border-0"
        ></iframe>
      </div>
      <div className="border-app pc:row-span-2 row-span-1 overflow-hidden">
        <Technical />
      </div>
      <div className="border-app">
        <Switch />
      </div>
      <div className="border-app overflow-hidden">
        <CarouselSocial
          facebook={FACEBOOK_URL}
          gitlab={GITLAB_URL}
          linkedin={LINKEDIN_URL}
        />
      </div>
      <div className="border-app pc:row-span-2 row-span-1 bg-blue-400">
        <ProjectHomePage />
      </div>
      <div className="border-app pc:col-span-2 relative col-span-1 p-10">
        <AboutHomePage />
      </div>

      <div className="border-app relative flex aspect-square items-center justify-center bg-black">
        <Github />
        <Link
          target="_blank"
          to={GITHUB_URL}
          className="absolute bottom-4 left-4 rounded-full bg-white p-2 outline-0 transition-all hover:outline-2 hover:outline-gray-300 dark:bg-gray-200 dark:outline-white"
        >
          <GoArrowUpRight size={25} className="dark:text-gray-500" />
        </Link>
      </div>
    </div>
  );
};
export default HomePage;
