"use client";
import { useTheme } from "@/contexts/ThemeContext";
import Image, { StaticImageData } from "next/image";
import React from "react";

function HeroSecCompany({
  img,
  compName,
  description,
  color,
}: {
  img: StaticImageData;
  compName: string;
  description: string;
  color: string;
}) {
  const { theme, toggleTheme } = useTheme();
  return (
    <section className="md:grid grid-cols-2 gap-1 ">
      <Image
        className="col-start-1 w-full lg:h-screen"
        src={img}
        alt={`majara`}
        width={500}
        height={500}
      />
      <div
        className={`theme-${theme} rounded-2xl col-start-2 flex flex-col justify-center items-start p-10 lg:gap-10`}
      >
        <h1
          className={`text-2xl lg:text-9xl ${
            color === "igency"
              ? "text-igency"
              : color === "media"
              ? "text-media"
              : color === "event"
              ? "text-event"
              : color === "academy"
              ? "text-academy"
              : "text-temkeen"
          } font-bold`}
        >
          {" "}
          {compName}{" "}
        </h1>
        <div
          className={`lg:text-3xl ${
            theme === "light" ? "text-dark" : "text-light"
          } `}
        >
          {" "}
          {description}{" "}
        </div>
      </div>
    </section>
  );
}

export default HeroSecCompany;
