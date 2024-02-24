import React from "react";
import newAboutMajara1 from "@/images/newAboutMajara1.jpg";
import Image from "next/image";
import { useTheme } from "@/contexts/ThemeContext";

const latestOfersData = [
  {
    img: newAboutMajara1,
    title: "ايجنسي",
    para: "بناء جمهور مستهدف بناء جمهور مستهدف بناء جمهور مستهدف ",
  },
  {
    img: newAboutMajara1,
    title: "ايفينت",
    para: "بناء جمهور مستهدف بناء جمهور مستهدف بناء جمهور مستهدف ",
  },
  {
    img: newAboutMajara1,
    title: "تمكين",
    para: "بناء جمهور مستهدف بناء جمهور مستهدف بناء جمهور مستهدف ",
  },
  {
    img: newAboutMajara1,
    title: "اكاديمي",
    para: "بناء جمهور مستهدف بناء جمهور مستهدف بناء جمهور مستهدف ",
  },
  {
    img: newAboutMajara1,
    title: "ميديا",
    para: "بناء جمهور مستهدف بناء جمهور مستهدف بناء جمهور مستهدف ",
  },
  {
    img: newAboutMajara1,
    title: "ايجنسي",
    para: "بناء جمهور مستهدف بناء جمهور مستهدف بناء جمهور مستهدف ",
  },
];

export default function LatestOfers() {
  const { theme, toggleTheme } = useTheme();


  return (
    <section className="w-full p-3 my-20">
      <h1 className="title"> أحدث العروض والموارد </h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 justify-center   gap-5">
        {latestOfersData.map((ele, id) => (
          <div
            key={id}
            className={`theme-${theme} rounded-3xl shadow-md max-w-[400px] lg:max-w-none`}
          >
            <Image
              className="rounded-3xl"
              src={ele.img}
              alt="majra"
              width={2000}
              height={2000}
            />
            <h1 className="text-xl font-medium px-4 py-4">{ele.title}</h1>
            <p className="px-4 pb-4 "> {ele.para}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
