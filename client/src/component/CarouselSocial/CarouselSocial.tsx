import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import Link from "../Link";
import { GoArrowUpRight } from "react-icons/go";
import cn from "../../util/cn";
import { FaFacebookF, FaGitlab, FaLinkedinIn } from "react-icons/fa";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

type SocialType = "linkedin" | "gitlab" | "facebook";

type CarouselSocialProps = Partial<Record<SocialType, string>>;

const CarouselSocial = ({
  facebook,
  gitlab,
  linkedin,
}: CarouselSocialProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="embla relative overflow-hidden" ref={emblaRef}>
      <div className="embla__container flex">
        {linkedin && (
          <Item key={"linkedin"} type={"linkedin"} href={linkedin} />
        )}
        {gitlab && <Item key={"gitlab"} type={"gitlab"} href={gitlab} />}
        {facebook && (
          <Item key={"facebook"} type={"facebook"} href={facebook} />
        )}
      </div>
      <MdNavigateBefore
        className="embla__next absolute-center-y left-3 grid size-10 rounded-full bg-white p-2 outline-0 transition-all hover:cursor-pointer hover:outline-2 hover:outline-gray-300 dark:bg-gray-200 dark:outline-white"
        onClick={scrollPrev}
      />
      <MdNavigateNext
        className="embla__next absolute-center-y right-3 grid size-10 rounded-full bg-white p-2 outline-0 transition-all hover:cursor-pointer hover:outline-2 hover:outline-gray-300 dark:bg-gray-200 dark:outline-white"
        onClick={scrollNext}
      />
    </div>
  );
};

const Item = ({ type, href }: { type: SocialType; href: string }) => {
  let icon, background;
  switch (type) {
    case "facebook":
      icon = <FaFacebookF size={100} color="white" />;
      background = "bg-[#1877F2]";
      break;
    case "gitlab":
      icon = <FaGitlab size={100} color="white" />;
      background =
        "bg-gradient-to-tr from-[#E24329] via-[#FC6D26] to-[#FCA326]";
      break;
    case "linkedin":
      icon = <FaLinkedinIn size={100} color="white" />;
      background = "bg-[#0a66c2]";
      break;
    default:
      icon = null;
  }

  return (
    <div
      className={cn(
        "embla__slide relative flex aspect-square flex-[0_0_100%] items-center justify-center",
        background,
      )}
    >
      {icon}
      <Link
        target="_blank"
        to={href}
        className="absolute bottom-4 left-4 rounded-full bg-white p-2 outline-0 transition-all hover:outline-2 hover:outline-gray-300 dark:bg-gray-200 dark:outline-white"
      >
        <GoArrowUpRight size={25} className="dark:text-gray-500" />
      </Link>
    </div>
  );
};

export default CarouselSocial;
