"use client";
/* eslint-disable jsx-a11y/role-supports-aria-props */
import Link from "next/link";
import React from "react";
import { GoPerson } from "react-icons/go";
import { RiLock2Line } from "react-icons/ri";
import Image from "next/image";
import imgAuth from "../../../../public/images/imgAuth.png";
import { useTheme } from "@/contexts/ThemeContext";

export default function Login() {
  const { theme, toggleTheme } = useTheme();

  return (
    <section
      dir="rtl"
      className=" w-full lg:h-screen flex flex-col items-center justify-center lg:flex-row py-16 px-5"
    >
      <Image
        className="h-fit max-h-[60vw] w-fit md:w-1/2 mx-auto"
        src={imgAuth}
        alt=""
        width={500}
        height={500}
      />
      <section className="xl:w-[calc(50vw)] h-full flex flex-col justify-center">
        <h1 className="text-8xl font-black text-center ">
          <span className="text-purple">Ma</span>
          <span className="text-blue-light">ja</span>
          <span className="text-red-light">ra</span>
        </h1>
        <p className="text-purple text-center font-bold my-6">
          نحن سعداء لرؤيتك تنظم إلينا
        </p>
        <form className="text-center flex flex-col gap-5 sm:w-[350px] mx-auto">
          <div className="relative">
            <input
              name="full-name"
              placeholder="الاسم الكامل"
              // onChange={handleChange}
              className={`input-class theme-${theme} shadow-md ${
                theme === "dark"
                  ? "placeholder:text-light bg-dark"
                  : "placeholder:text-dark bg-[#F2F2F2]"
              }`}
            />
            <GoPerson size={30} className="input-icon" />
          </div>
          <div className="relative">
            <input
              name="number-phone"
              placeholder="رقم الهاتف"
              // onChange={handleChange}
              className={`input-class theme-${theme} shadow-md ${
                theme === "dark"
                  ? "placeholder:text-light bg-dark"
                  : "placeholder:text-dark bg-[#F2F2F2]"
              }`}
            />
            <RiLock2Line size={30} className="input-icon" />
          </div>
          <Link
            className={`as-link block text-center font-semibold hover:font-black  my-5 `}
            href={""}
          >
            {" "}
            نسيت كلمة المرور{" "}
          </Link>
          <button className="form-btn">تسجيل دخول </button>
          <Link className="as-link text-red-500 font-bold" href={""}>
            {" "}
            ليس لدي حساب{" "}
          </Link>
        </form>
        <Link
          className={`as-link  block text-center font-semibold text-${
            theme === "dark" ? "light" : "dark"
          } hover:font-black my-5`}
          href={""}
        >
          {" "}
          إنشاء حساب{" "}
        </Link>
      </section>
    </section>
  );
}
