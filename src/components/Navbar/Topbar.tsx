"use client";
import { MdMenuOpen } from "react-icons/md";
import { CgMenu } from "react-icons/cg";
import React from "react";
import { useIsOpenContact } from "@/contexts/IsOpenContact";
import { RiSearchEyeLine } from "react-icons/ri";
import { useTheme } from "@/contexts/ThemeContext";

export default function Topbar() {
  const { theme, toggleTheme } = useTheme();

  const { IsOpenContact, setIsOpenContact } = useIsOpenContact();
  return (
    <section
      className={`p-5 theme-${theme}  z-10 shadow-sm fixed top-0 left-0 right-0 flex justify-between`}
    >
      <div
        className="hover:bg-gray-200 hover:text-dark p-2 rounded-full"
        onClick={() => setIsOpenContact(!IsOpenContact)}
      >
        {IsOpenContact ? <CgMenu size={30} /> : <MdMenuOpen size={30} />}
      </div>
      <div className="hover:bg-gray-200 hover:text-dark p-2 rounded-full">
        <RiSearchEyeLine size={35} className="icon-sidebar " />
      </div>
    </section>
  );
}
