import { ReactNode } from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { RiGithubLine } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="xs:mt-24 mt-36 flex justify-center">
      <div className="inline-flex flex-col items-center">
        <div className="xs:gap-16 inline-flex gap-20">
          <Social icon={<MdOutlineMail size={25} />} text="Gmail" />
          <Social icon={<RiGithubLine size={25} />} text="GitHub" />
          <Social icon={<FaLinkedinIn size={25} />} text="Linkedin" />
        </div>
        <div className="mb-24 mt-12 flex w-full">
          <span className="flex-1 text-center text-sm text-gray-500 dark:text-primary-dark">
            Project
          </span>
          <span className="flex-1 text-center text-sm text-gray-500 dark:text-primary-dark">
            Contact
          </span>
        </div>
      </div>
    </footer>
  );
};

function Social({ icon, text }: { icon: ReactNode; text: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex size-9 items-center justify-center rounded-full text-center text-purple-500 dark:bg-linear dark:text-background-dark">
        {icon}
      </div>
      <span className="mt-2 text-xs uppercase tracking-wider dark:text-primary-dark">
        {text}
      </span>
    </div>
  );
}

export default Footer;
