import React from "react";
import {dataHeroSecAboutUS} from "../../../public/data/aboutusData.json";
import { useTheme } from "@/contexts/ThemeContext";
export default function HeroSectionAboutUS() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={
        "bg-hero-about flex-grow w-full lg:min-h-[600px] rounded-3xl  flex justify-center items-center flex-col py-10"
      }
    >
      <h1 className="text-3xl lg:text-8xl  font-bold mb-5">من نحن؟</h1>
      <h6 className="text-xl lg:text-2xl max-w-[400px] text-center">
        من نحن وماذا نمنحك من نحن وماذا نمنحك من نحن وماذا نمنحك من نحن وماذا
        نمنحك من نحن وماذا نمنحك
      </h6>
      <div className="grid w-5/6 md:grid-cols-2 md:grid-rows-2 gap-5 mt-16">
        {dataHeroSecAboutUS.map((ele, index) => (
          <span
            key={index}
            className={`bg-${theme} rounded-2xl p-4 col-start-${index+1} col-end-${index+2}`}
          >
            <h2 className="font-extrabold"> {ele.ques} </h2>
            <p> {ele.para} </p>
          </span>
        ))}
      </div>
    </div>
  );
}
