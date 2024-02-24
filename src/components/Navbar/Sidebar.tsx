/* eslint-disable react/jsx-key */
"use client";
// import { elementsLargeScreen } from "@/data/dataSidebar";
import React, { useState } from "react";
import { RiSearchEyeLine } from "react-icons/ri";
import { BsMoonStars } from "react-icons/bs";
import { GoSun } from "react-icons/go";
import { useTheme } from "@/contexts/ThemeContext";

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

export default function Sidebar() {
  const { theme, toggleTheme } = useTheme();
  const { IsOpenSidebarSecond, setIsOpenSidebarSecond } =
    useIsOpenSidebarSecond();
  return (
    <>
      <section className={`container-sidebar theme-${theme}`}>
        <div className="px-3 py-1  bg-[#c4eed0] hover:bg-gray-200 hover:text-dark w-fit h-fit rounded-2xl mx-auto ">
          <RiSearchEyeLine size={30} className="icon-sidebar " />
        </div>
        <div className="">
          {icons.map((icon, index) => (
            <div
              key={index}
              className=" my-5 cursor-pointer flex flex-col justify-center items-center group"
              onClick={() =>
                index === 0 && setIsOpenSidebarSecond(!IsOpenSidebarSecond)
              }
            >
              <div className="px-3 py-1 mx-auto  group-hover:bg-gray-200 group-hover:text-dark w-fit h-fit rounded-2xl ">
                {icon.icon}
              </div>
              <span className=""> {icon.name} </span>
            </div>
          ))}
        </div>
        <div
          className={` border-2 border-${theme}  w-fit rounded-full p-2 absolute bottom-5 icon-sidebar hover:bg-gray-200 hover:text-dark`}
          onClick={toggleTheme}
        >
          {theme === "light" ? <BsMoonStars size={30} /> : <GoSun size={30} />}
        </div>
      </section>
      <section
        className={`fixed  top-0  left-[78px] h-full  w-[200px] text-right text-lg text-gray-900 ${
          IsOpenSidebarSecond ? "translate-x-0" : "-translate-x-full "
        }  transition-all ease-in-out duration-[1s]  shadow-2xl  py-5 px-2 theme-${theme}   z-10`}
      >
        {sidebarSec.map((ele, index) => (
          <div
            key={index}
            className="my-6 cursor-pointer hover:bg-gray-200 hover:text-dark rounded-full px-3 py-1"
          >
            {ele}
          </div>
        ))}
      </section>
    </>
  );
}
