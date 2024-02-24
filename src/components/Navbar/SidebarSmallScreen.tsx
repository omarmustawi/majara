import { FaArrowLeft } from "react-icons/fa6";
import { useIsOpenContact } from "@/contexts/IsOpenContact";
import { useTheme } from "@/contexts/ThemeContext";
import { BsMoonStars } from "react-icons/bs";
import { GoSun } from "react-icons/go";
import { MdMenuOpen } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import { CgMenuGridO } from "react-icons/cg";
import { GoArrowRight } from "react-icons/go";
import { IoIosPeople } from "react-icons/io";
import { TbStarFilled } from "react-icons/tb";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { BsPerson } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { useIsOpenSidebarSecond } from "@/contexts/IsOpenSidebarSecond";

const icons = [
  {
    icon: <AiFillHome size={30} className="icon-sidebar" />,
    name: "home",
  },
  {
    icon: <CgMenuGridO size={30} className="icon-sidebar" />,
    name: "خدماتنا",
  },
  {
    icon: <IoIosPeople size={30} className="icon-sidebar" />,
    name: "عنا",
  },
  {
    icon: <TbStarFilled size={30} className="icon-sidebar" />,
    name: "المدونة",
  },
  {
    icon: <IoChatbubbleEllipsesOutline size={30} className="icon-sidebar" />,
    name: "اتصل بنا",
  },
  {
    icon: <BsPerson size={30} className="icon-sidebar" />,
    name: "حسابي",
  },
  {
    icon: <FaHeart size={30} className="icon-sidebar" />,
    name: "مفضلتي",
  },
];
const sidebarSec = ["مجرة ايجنسي", "مجرة ايفينت", "مجرة اكاديمي", "مجرة ميديا"];

export default function SidebarSmallScreen() {
  const { IsOpenContact, setIsOpenContact } = useIsOpenContact();
  const { theme, toggleTheme } = useTheme();
  const { IsOpenSidebarSecond, setIsOpenSidebarSecond } =
    useIsOpenSidebarSecond();

  return (
    <section
      className={`theme-${theme} z-20 px-2 fixed top-0 ${
        IsOpenContact ? "translate-x-0" : "-translate-x-full"
      } transition-all duration-1000 ease-in-out h-screen w-fit`}
    >
      <div
        className={`hover:bg-gray-200 hover:text-dark w-fit p-2 m-5 rounded-full   `}
      >
        <MdMenuOpen
          className=" "
          onClick={() => setIsOpenContact(!IsOpenContact)}
          size={30}
        />
      </div>
      {IsOpenSidebarSecond && (
        <FaArrowLeft
          onClick={() => setIsOpenSidebarSecond(false)}
          className="ml-3 p-2 rounded-full hover:bg-gray-200 hover:text-dark"
          size={35}
        />
      )}
      {IsOpenSidebarSecond
        ? sidebarSec.map((element, index) => (
            <div
              key={index}
              className="min-w-[250px] my-5 cursor-pointer   hover:bg-gray-200 hover:text-dark rounded-full p-2 text-right "
            >
              {element}
            </div>
          ))
        : icons.map((element, index) => (
            <div
              key={index}
              onClick={() => index === 0 && setIsOpenSidebarSecond(true)}
              className="my-5 cursor-pointer group flex items-center  hover:bg-gray-200 hover:text-dark rounded-full p-2 min-w-[250px]"
            >
              <div className="px-3 py-1  group-hover:bg-gray-200 w-fit h-fit rounded-2xl ">
                {element.icon}
              </div>
              <span className=""> {element.name} </span>
              <GoArrowRight className="ml-auto" size={30} />
            </div>
          ))}
      <div
        onClick={toggleTheme}
        className={`absolute flex gap-3 border-2  hover:bg-slate-200 hover:text-dark p-3 rounded-full bottom-3 w-[230px] left-1/2 -translate-x-1/2`}
      >
        {theme === "light" ? <BsMoonStars size={30} /> : <GoSun size={30} />}
        switch to dark mode
      </div>
    </section>
  );
}
