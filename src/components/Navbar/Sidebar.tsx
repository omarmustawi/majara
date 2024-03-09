"use client";
import React, { useState } from "react";
import { RiSearchEyeLine } from "react-icons/ri";
import { BsMoonStars } from "react-icons/bs";
import { GoSun } from "react-icons/go";
import { useTheme } from "@/contexts/ThemeContext";
import { useIsOpenSidebarSecond } from "@/contexts/IsOpenSidebarSecond";
import { icons, sidebarSec } from "@/data/dataSidebar";
import Link from "next/link";

export default function Sidebar() {
  const { theme, toggleTheme } = useTheme();
  const { IsOpenSidebarSecond, setIsOpenSidebarSecond } =
    useIsOpenSidebarSecond();
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <>
      <section className={`container-sidebar theme-${theme}`}>
        <div className="px-3 py-1  bg-[#c4eed0] hover:bg-gray-200 text-dark w-fit h-fit rounded-2xl mx-auto ">
          <RiSearchEyeLine size={30} className="icon-sidebar " />
        </div>
        <div className="">
          {icons.map((icon, index) => (
            <Link
              key={index}
              href={icon.link}
              className=" my-5 cursor-pointer flex flex-col justify-center items-center group"
              onClick={() =>
                index === 1 && setIsOpenSidebarSecond(!IsOpenSidebarSecond)
              }
            >
              <div
                onClick={() => setSelectedIndex(index)}
                className={`${
                  selectedIndex === index && "selected-link text-dark"
                } px-3 py-1 mx-auto group-hover:bg-gray-200 group-hover:text-dark w-fit h-fit rounded-2xl`}
              >
                {icon.icon}
              </div>
              <span> {icon.name} </span>
            </Link>
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
        className={`fixed  top-0  left-[96px] h-full  w-[140px] text-right text-lg text-gray-900 ${
          IsOpenSidebarSecond ? "translate-x-0" : "-translate-x-full "
        }  transition-all ease-in-out duration-[1s]  shadow-2xl  py-5 px-2 theme-${theme} z-10`}
      >
        {sidebarSec.map((ele, index) => (
          <Link
            key={index}
            href={ele.link}
            className="my-6 cursor-pointer block hover:bg-gray-200 hover:text-dark rounded-xl px-3 py-1"
          >
            {ele.title}
          </Link>
        ))}
      </section>
    </>
  );
}
