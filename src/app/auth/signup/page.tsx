"use client";
/* eslint-disable jsx-a11y/role-supports-aria-props */
import Link from "next/link";
import React from "react";
import { GoPerson } from "react-icons/go";
import { RiLock2Line } from "react-icons/ri";
import { MdOutlineAddLocationAlt } from "react-icons/md";
import Image from "next/image";
import imgAuth from "../../../../public/images/imgAuth.png";
import { useTheme } from "@/contexts/ThemeContext";

const governorates = [
  {
    ar: "بغداد",
    en: "Baghdad",
  },
  {
    ar: "صلاح الدين",
    en: "Salah ad-Din",
  },
  {
    ar: "ديالى",
    en: "Diyala",
  },
  {
    ar: "واسط",
    en: "Wasit",
  },
  {
    ar: "ميسان",
    en: "Maysan",
  },
  {
    ar: "البصرة",
    en: "Basra",
  },
  {
    ar: "ذي قار",
    en: "Dhi Qar",
  },
  {
    ar: "المثنى",
    en: "Al-Muthanna",
  },
  {
    ar: "القادسية",
    en: "Al-Qadisiyyah",
  },
  {
    ar: "بابل",
    en: "Babylon ",
  },
  {
    ar: "كربلاء",
    en: "Karbala'",
  },
  {
    ar: "النجف",
    en: "Najaf",
  },
  {
    ar: "نينوى",
    en: "Nineveh",
  },
  {
    ar: "دهوك",
    en: "Dohuk",
  },
  {
    ar: "أربيل",
    en: "Arbil",
  },
  {
    ar: "كركوك",
    en: "Kirkuk",
  },
  {
    ar: "السليمانية",
    en: "Sulaymāniyah",
  },
];
export default function Signup() {
  const { theme, toggleTheme } = useTheme();
  return (
    <section
      dir="rtl"
      className="w-full lg:h-screen flex flex-col items-center justify-center lg:flex-row py-16 px-5"
    >
      <Image
        className="h-fit max-h-[60vw] w-fit md:w-1/2 mx-auto"
        src={imgAuth}
        alt=""
        width={500}
        height={500}
      />
      <section className="xl:w-[calc(50vw)] h-full flex flex-col justify-center">
        <h1 className="text-8xl font-black text-center my-5">
          <span className="text-purple">Ma</span>
          <span className="text-blue-light">ja</span>
          <span className="text-red-light">ra</span>
        </h1>
        <p className="text-purple text-center font-bold my-6">
          نحن سعداء لرؤيتك تنظم إلينا
        </p>
        <form className=" text-center flex flex-col gap-5 sm:w-[350px] mx-auto">
          <div className="relative">
            <input
              name="full-name"
              placeholder="الاسم الكامل"
              // onChange={handleChange}
              className={`input-class theme-${theme} shadow-md placeholder:text-${
                theme === "dark" ? "light" : "dark"
              }`}
            />
            <GoPerson size={30} className="input-icon" />
          </div>
          <div className="relative">
            <input
              name="number-phone"
              placeholder="رقم الهاتف"
              // onChange={handleChange}
              className={`input-class theme-${theme} shadow-md placeholder:text-${
                theme === "dark" ? "light" : "dark"
              }`}
            />
            <RiLock2Line size={30} className="input-icon" />
          </div>
          <div className="relative">
            <div
              className={`input-class theme-${theme} shadow-md text-${
                theme === "dark" ? "light" : "dark"
              }`}
            >
              <select
                className="w-full h-full bg-inherit outline-none focus-within:border-none"
                aria-placeholder="المحافظة"
              >
                <option value={""}>المحافظة</option>
                {governorates.map((governorate, index) => (
                  <option key={index} value={governorate.en}>
                    {governorate.ar}
                  </option>
                ))}
              </select>
            </div>
            <MdOutlineAddLocationAlt size={30} className="input-icon" />
          </div>
          <button className="form-btn">التالي</button>
          <div className="flex justify-center sm:justify-between items-center text-center my-5 text-red-light  font-bold ">
            <div className="bg-[#F0EDFF] min-w-20 w-[calc((100%-160px)/2)] h-[1px] hidden sm:block"></div>
            <Link className="as-link" href={""}>
              {" "}
              لدي حساب بالفعل{" "}
            </Link>
            <div className="bg-[#F0EDFF] min-w-20 w-[calc((100%-160px)/2)] h-[1px] hidden sm:block "></div>{" "}
          </div>
        </form>
        <Link
          className={`as-link block text-center font-semibold text-${theme === "dark" ? "light" : "dark"} hover:font-black  my-5`}
          href={""}
        >
          {" "}
          تسجيل الدخول{" "}
        </Link>
      </section>
    </section>
  );
}
