import logo from "@/images/logo.svg";
import { CgMenuGridO } from "react-icons/cg";
import { IoIosPeople } from "react-icons/io";
import { TbStarFilled } from "react-icons/tb";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { BsPerson } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import Image from "next/image";

const icons = [
  {
    icon: (
      <Image
        className="icon-sidebar w-8 h-8"
        src={logo}
        alt="مجرة"
        width={1000}
        height={1000}
      />
    ),
    name: "home",
    link: "/"
  },
  {
    icon: <CgMenuGridO size={30} className="icon-sidebar" />,
    name: "خدماتنا",
    link: ""
  },
  {
    icon: <IoIosPeople size={30} className="icon-sidebar" />,
    name: "عنا",
    link: "/about-us"
  },
  {
    icon: <TbStarFilled size={30} className="icon-sidebar" />,
    name: "المدونة",
    link: ""
  },
  {
    icon: <IoChatbubbleEllipsesOutline size={30} className="icon-sidebar" />,
    name: "اتصل بنا",
    link: ""
  },
  {
    icon: <BsPerson size={30} className="icon-sidebar" />,
    name: "حسابي",
    link: ""
  },
  {
    icon: <FaHeart size={30} className="icon-sidebar" />,
    name: "مفضلتي",
    link: ""
  },
];

const sidebarSec = [
  { title: "مجرة ايجنسي", link: "/companies/igency" },
  { title: "مجرة ايفينت", link: "/companies/event" },
  { title: "مجرة تمكين", link: "/companies/temkeen" },
  { title: "مجرة اكاديمي", link: "/companies/academy" },
  { title: "مجرة ميديا", link: "/companies/media" },
];

export { icons, sidebarSec };
